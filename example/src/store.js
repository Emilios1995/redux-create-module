import { createStore } from "redux";
import counter from "./counter.js";

let store = createStore(counter);

export default store;
