import { Fragment, memo, useCallback, useContext, useEffect, useState } from "react";
import Items from "./components/Items";
import MovedItems from "./components/MovedItems";
import getArrayWithIds from "./helpers/getArrayWithIds";
import { getItems } from "./helpers/getItems";
import getItemsFilteredByArrayOfIds from "./helpers/getItemsFilteredByArrayOfIds";
import ItemContext from "./store/ItemContext";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { setItems, movedItems } = useContext(ItemContext);

  const handleScroll = useCallback(
    (e) => {
      setIsLoading(true);
      const { scrollTop, scrollHeight } = e.target.documentElement;
      const isBottomOnPage = window.innerHeight + scrollTop + 1 >= scrollHeight;

      if (isBottomOnPage) {
        if (currentPage > getItems().totalPages) {
          setIsLoading(false);
          return;
        }
        setTimeout(() => {
          setCurrentPage((prev) => prev + 1);
          setIsLoading(false);
          const idsOfMovedItems = getArrayWithIds(movedItems);
          const items = [...getItems(currentPage).items];
          const filteredItems = getItemsFilteredByArrayOfIds(items, idsOfMovedItems);
          setItems([...filteredItems]);
        }, 2000);
      }
    },
    [currentPage, setItems, setCurrentPage, movedItems]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Fragment>
      <MovedItems />
      <hr />
      <Items />
      {isLoading && <h4>Loading..</h4>}
    </Fragment>
  );
}

export default memo(App);
