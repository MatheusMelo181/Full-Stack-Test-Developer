import { configureStore } from "redux";

import rootReducer from "./root-reducer";

const store = configureStore(rootReducer);

export default store;
