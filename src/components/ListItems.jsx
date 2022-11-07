import { Fragment, memo, useContext } from "react";
import ItemContext from "../store/ItemContext";
import Header from "./Header";
import Item from "./Item";

const ListItems = () => {
  const { items, setSelectItem, updateItems, updateMovedWithSelectedItems } =
    useContext(ItemContext);

  const onMoveSelectedItems = () => {
    const filteredSelectedItems = items
      .filter((item) => !!item.selected)
      .reduce((acc, currItem) => [...acc, { ...currItem, selected: false }], []);

    updateMovedWithSelectedItems(filteredSelectedItems);
    updateItems();
  };

  const onUpdateItem = (indexItem) => {
    return () => {
      setSelectItem(indexItem);
    };
  };

  return (
    <Fragment>
      <Header
        title={`Items: ${items.length}`}
        nameButton="Move selected items"
        onClickButton={onMoveSelectedItems}
      />
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

export default ListItems;
