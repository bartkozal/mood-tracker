import _ from "lodash";
import { State as StoreState } from "../state";

export const getAllTimeMood = (state: StoreState) =>
  _.countBy(Object.values(state.calendar), "mood");
