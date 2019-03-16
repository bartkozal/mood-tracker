import _ from "lodash";
import { State as StoreState } from "../state";

type GetAllTimeMood = [
  {
    [mood: string]: number;
  },
  number
];

export const getAllTimeMood = (state: StoreState): GetAllTimeMood => {
  const values = Object.values(state.calendar);

  return [_.countBy(values, "mood"), values.length];
};
