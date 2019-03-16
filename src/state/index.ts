import { createStore, applyMiddleware, combineReducers } from "redux";
import calendar from "./calendar";
import logger from "redux-logger";

export default createStore(
  combineReducers({ calendar }),
  applyMiddleware(logger)
);
