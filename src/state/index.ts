import { createStore, applyMiddleware, combineReducers } from "redux";
import calendarReducer, {
  middleware as calendarMiddleware,
  State as CalendarState
} from "./calendar";

export interface State {
  calendar: CalendarState;
}

let middlewares = [calendarMiddleware];

if (__DEV__) {
  const { logger } = require("redux-logger");
  // middlewares.push(logger);
}

export default createStore(
  combineReducers({ calendar: calendarReducer }),
  applyMiddleware(...middlewares)
);
