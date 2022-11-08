const getSelectedItems = (items) => {
  return items
    .filter((item) => !!item.selected)
    .reduce((acc, currItem) => [...acc, { ...currItem, selected: false }], []);
};

export default getSelectedItems;
