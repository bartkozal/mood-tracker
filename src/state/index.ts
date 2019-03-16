import { createStore, applyMiddleware, combineReducers } from "redux";
import calendarReducer, { State as CalendarState } from "./calendar";
import logger from "redux-logger";

export interface State {
  calendar: CalendarState;
}

export default createStore(
  combineReducers({ calendar: calendarReducer }),
  applyMiddleware(logger) // TODO set only for development
);
