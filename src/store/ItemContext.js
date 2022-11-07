import { createContext } from "react";
import { getItems } from "../helpers/getItems";
const ItemContext = createContext(getItems());
export default ItemContext;
