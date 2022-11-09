export function getItems(page = 1) {
  if (typeof page !== "number" || page < 1) throw new Error("Invalid page!");
  const sizes = ["tiny", "small", "medium", "large", "huge"];
  const colors = [
    "navy",
    "blue",
    "aqua",
    "teal",
    "olive",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "maroon",
    "fuchsia",
    "purple",
    "silver",
    "gray",
    "black",
  ];
  const fruits = [
    "apple",
    "banana",
    "watermelon",
    "orange",
    "peach",
    "tangerine",
    "pear",
    "kiwi",
    "mango",
    "pineapple",
  ];

  const items = sizes.reduce(
    (items, size) => [
      ...items,
      ...fruits.reduce(
        (acc, fruit) => [
          ...acc,
          ...colors.reduce(
            (acc, color) => [
              ...acc,
              {
                name: `${size} ${color} ${fruit}`,
                color,
              },
            ],
            []
          ),
        ],
        []
      ),
    ],
    []
  );

  const rowsPerPage = 60;
  const totalPages = Math.ceil(items.length / rowsPerPage);
  let startRows = 0;
  let endRows = 0;
  let slicedItems;
  const isGreaterThanLastPage = page > totalPages;

  if (isGreaterThanLastPage) {
    page = totalPages;
  }

  endRows = page * rowsPerPage;
  slicedItems = items.slice(startRows, endRows);

  return {
    items: slicedItems,
    totalPages,
  };
}
