import { createStore, applyMiddleware, combineReducers } from "redux";
import analytics from "./state/analytics";
import logger from "redux-logger";

export default createStore(
  combineReducers({ analytics }),
  applyMiddleware(logger)
);
