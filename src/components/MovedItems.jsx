import { Fragment, memo, useCallback, useContext, useMemo } from "react";
import ItemContext from "../store/ItemContext";
import Header from "./Header";
import Item from "./Item";

const MovedItems = () => {
  const {
    movedItems,
    setSelectMovedItem,
    updateItemsWithSelectedMovedItems,
    updateMovedItems,
  } = useContext(ItemContext);

  const onMoveSelectedItems = useCallback(() => {
    updateItemsWithSelectedMovedItems();
    updateMovedItems();
  }, [updateItemsWithSelectedMovedItems, updateMovedItems]);

  const onUpdateItem = useCallback(
    (indexItem) => () => setSelectMovedItem(indexItem),
    [setSelectMovedItem]
  );

  const props = useMemo(
    () => ({
      title: `Moved items: ${movedItems.length}`,
      nameButton: "Move back selected items",
    }),
    [movedItems]
  );

  return (
    <Fragment>
      <Header {...props} onClickButton={onMoveSelectedItems} />
      <ul className="List">
        {movedItems.map((item, indexItem) => {
          let selected = "";
          if (item.selected) {
            selected = "List__item--selected";
          }
          return (
            <Item
              key={item.name}
              name={item.name}
              className={`List__item List__item--${item.color} ${selected}`}
              onClick={onUpdateItem(indexItem)}
            />
          );
        })}
      </ul>
    </Fragment>
  );
};

export default memo(MovedItems);
