import { State as StoreState } from "../state";

export interface State {
  [date: string]: {
    mood: string;
  };
}

const initialState: State = {};

export const getCalendar = (state: StoreState) => state.calendar;

enum ActionType {
  SetDayMood = "Calendar/SetDayMood"
}

export const setDayMood = (day: string, mood: string) => ({
  type: ActionType.SetDayMood,
  payload: {
    day,
    mood
  }
});

type Action = ReturnType<typeof setDayMood>;

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
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
