import { Fragment, useContext } from "react";
import ItemContext from "../store/ItemContext";
import Header from "./Header";
import Item from "./Item";

const MovedItems = () => {
  const { movedItems, setSelectMovedItem, updatedWithSelectedItems, updateMovedItems } =
    useContext(ItemContext);

  const onMoveBackSelectedItems = () => {
    const filteredSelectedItems = movedItems
      .filter((item) => !!item.selected)
      .reduce((acc, currItem) => [...acc, { ...currItem, selected: false }], []);

    updatedWithSelectedItems(filteredSelectedItems);
    updateMovedItems();
  };

  const onUpdateItem = (indexItem) => {
    return () => {
      setSelectMovedItem(indexItem);
    };
  };

  return (
    <Fragment>
      <Header
        title={`Moved items: ${movedItems.length}`}
        nameButton="Move back selected items"
        onClickButton={onMoveBackSelectedItems}
      />
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

export default MovedItems;
