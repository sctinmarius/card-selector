import { Fragment, memo, useCallback, useContext, useMemo } from "react";
import ItemContext from "../store/ItemContext";
import Header from "./Header";
import Item from "./Item";

const Items = () => {
  const { items, setSelectItem, updateItems, updateMovedItemsWithSelectedItems } =
    useContext(ItemContext);

  const onMoveSelectedItems = useCallback(() => {
    updateMovedItemsWithSelectedItems();
    updateItems();
  }, [updateMovedItemsWithSelectedItems, updateItems]);

  const onUpdateItem = useCallback(
    (indexItem) => () => setSelectItem(indexItem),
    [setSelectItem]
  );

  const props = useMemo(
    () => ({
      title: `Items: ${items.length}`,
      nameButton: "Move selected items",
    }),
    [items]
  );

  return (
    <Fragment>
      <Header onClickButton={onMoveSelectedItems} {...props} />
      <ul className="List">
        {items.map((item, indexItem) => {
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

export default memo(Items);
