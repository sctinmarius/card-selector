const getArrayWithIds = (items) => {
  return items.reduce((acc, currId) => [...acc, currId.indexItem], []);
};

export default getArrayWithIds;
