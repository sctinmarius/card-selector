import { memo } from "react";
import Items from "./components/Items";
import MovedItems from "./components/MovedItems";
import ItemProvider from "./store/ItemProvider";

function App() {
  return (
    <ItemProvider>
      <MovedItems />
      <hr />
      <Items />
    </ItemProvider>
  );
}

export default memo(App);
