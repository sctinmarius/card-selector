import { useContext, useState, useMemo } from "react";
import ItemContext from "./ItemContext";

const ItemProvider = ({ children }) => {
  const data = useContext(ItemContext);
  const [items, setItems] = useState(data);
  const [movedItems, setMovedItems] = useState([]);

  const setSelectItem = (indexItem) => {
    const updatedItems = items.reduce((acc, currItem, index) => {
      if (index === indexItem) {
        return [...acc, { ...currItem, selected: !currItem.selected }];
      }
      return [...acc, { ...currItem }];
    }, []);

    setItems(updatedItems);
  };

  const updatedWithSelectedItems = (selectedItems) => {
    setItems((prevItems) => [...selectedItems, ...prevItems]);
  };

  const updateItems = () => {
    const filteredByUnselectedItems = items.filter((item) => item.selected !== true);
    setItems(filteredByUnselectedItems);
  };

  const setSelectMovedItem = (indexItem) => {
    const updatedMovedItems = movedItems.reduce((acc, currItem, index) => {
      if (index === indexItem) {
        return [...acc, { ...currItem, selected: !currItem.selected }];
      }
      return [...acc, { ...currItem }];
    }, []);
    setMovedItems(updatedMovedItems);
  };

  const updateMovedWithSelectedItems = (selectedItems) => {
    setMovedItems((prevMovedItems) => [...selectedItems, ...prevMovedItems]);
  };

  const updateMovedItems = () => {
    const filteredByUnselectedItems = movedItems.filter((item) => item.selected !== true);
    setMovedItems(filteredByUnselectedItems);
  };

  const itemContext = {
    items,
    setSelectItem,
    updatedWithSelectedItems,
    updateItems,

    movedItems,
    setSelectMovedItem,
    updateMovedWithSelectedItems,
    updateMovedItems,
  };

  return (
    <div className="Container">
      <ItemContext.Provider value={itemContext}>{children}</ItemContext.Provider>
    </div>
  );
};

export default ItemProvider;
