import _ from "lodash";
import { State } from "../state";

export const getAllTimeMood = (state: State) =>
  _.countBy(Object.values(state.calendar), "mood");
