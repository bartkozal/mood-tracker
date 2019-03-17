import { Middleware } from "redux";
import { State as StoreState } from "../state";
import { saveState } from "../app/storage";

export interface State {
  [date: string]: {
    mood: string;
  };
}

const initialState: State = {};

export const getCalendar = (state: StoreState) => state.calendar;

enum ActionType {
  SetCalendar = "Calendar/SetCalendar",
  SetDayMood = "Calendar/SetDayMood"
}

interface SetCalendar {
  type: ActionType.SetCalendar;
  payload: {
    calendar: State;
  };
}

export const setCalendar = (calendar: State) => ({
  type: ActionType.SetCalendar,
  payload: {
    calendar
  }
});

interface SetDayMood {
  type: ActionType.SetDayMood;
  payload: {
    day: string;
    mood: string;
  };
}

export const setDayMood = (day: string, mood: string) => ({
  type: ActionType.SetDayMood,
  payload: {
    day,
    mood
  }
});

type Action = SetCalendar | SetDayMood;

export const middleware: Middleware = store => next => async (
  action: Action
) => {
  if (action.type === ActionType.SetDayMood) {
    const state = store.getState();

    await saveState("Calendar", {
      ...getCalendar(state),
      [action.payload.day]: {
        mood: action.payload.mood
      }
    });
  }

  next(action);
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.SetCalendar:
      return action.payload.calendar;
    case ActionType.SetDayMood:
      return {
        ...state,
        [action.payload.day]: {
          mood: action.payload.mood
        }
      };
    default:
      return state;
  }
};
