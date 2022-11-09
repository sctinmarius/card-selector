const getItemsFilteredByArrayOfIds = (items, arrayIds) => {
  return items.filter((_, index) => arrayIds.indexOf(index) === -1);
};

export default getItemsFilteredByArrayOfIds;
