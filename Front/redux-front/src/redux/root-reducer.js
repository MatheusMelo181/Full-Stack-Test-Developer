import { combineReducers } from "redux";

import favoriteReducer from "./favorite/reducer";

const rootReducer = combineReducers({ favoriteReducer });

export default rootReducer;