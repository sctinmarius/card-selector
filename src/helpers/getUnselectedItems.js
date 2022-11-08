const getUnselectedItems = (items) => {
  return items.filter((item) => item.selected !== true);
};

export default getUnselectedItems;
