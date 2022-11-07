import ListItems from "./components/ListItems";
import MovedItems from "./components/MovedItems";
import ItemProvider from "./store/ItemProvider";

function App() {
  return (
    <ItemProvider>
      {/* <MovedItems /> */}
      <hr />

      <ListItems />
    </ItemProvider>
  );
}

export default App;
