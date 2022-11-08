import { useCallback, useContext, useState } from "react";
import getSelectedItems from "../helpers/getSelectedItems";
import getUnselectedItems from "../helpers/getUnselectedItems";
import getUpdatedItems from "../helpers/getUpdatedItems";
import ItemContext from "./ItemContext";

const ItemProvider = ({ children }) => {
  const data = useContext(ItemContext);
  const [items, setItems] = useState(data);
  const [movedItems, setMovedItems] = useState([]);

  const setSelectItem = useCallback(
    (indexItem) => {
      const updatedItems = getUpdatedItems(items, indexItem);
      setItems(updatedItems);
    },
    [items]
  );

  const updateMovedItemsWithSelectedItems = useCallback(() => {
    const selectedItems = getSelectedItems(items);
    setMovedItems((prevItems) => [...selectedItems, ...prevItems]);
  }, [items]);

  const updateItems = useCallback(() => {
    const filteredByUnselectedItems = getUnselectedItems(items);
    setItems(filteredByUnselectedItems);
  }, [items]);

  const setSelectMovedItem = useCallback(
    (indexItem) => {
      const updatedItems = getUpdatedItems(movedItems, indexItem);
      setMovedItems(updatedItems);
    },
    [movedItems]
  );

  const updateItemsWithSelectedMovedItems = useCallback(() => {
    const selectedItems = getSelectedItems(movedItems);
    setItems((prevMovedItems) => [...selectedItems, ...prevMovedItems]);
  }, [movedItems]);

  const updateMovedItems = useCallback(() => {
    const filteredByUnselectedItems = getUnselectedItems(movedItems);
    setMovedItems(filteredByUnselectedItems);
  }, [movedItems]);

  const itemContext = {
    items,
    setSelectItem,
    updateMovedItemsWithSelectedItems,
    updateItems,

    movedItems,
    setSelectMovedItem,
    updateItemsWithSelectedMovedItems,
    updateMovedItems,
  };

  return (
    <div className="Container">
      <ItemContext.Provider value={itemContext}>{children}</ItemContext.Provider>
    </div>
  );
};

export default ItemProvider;
