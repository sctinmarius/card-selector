const getUpdatedItems = (items, indexItem) => {
  return items.reduce((acc, currItem, index) => {
    if (index === indexItem) {
      return [...acc, { ...currItem, selected: !currItem.selected, indexItem }];
    }
    return [...acc, { ...currItem }];
  }, []);
};

export default getUpdatedItems;
