import { DateTime } from "luxon";
import {
  getWeekMood,
  getMonthMood,
  getYearMood,
  getAllTimeMood
} from "../analytics";

test("getWeekMood", () => {
  DateTime.local = jest.fn(() =>
    DateTime.fromObject({ year: 2019, month: 3, day: 17 })
  );

  const state = {
    calendar: {
      "2018-03-11": { mood: "grin" },
      "2019-03-11": { mood: "grin" },
      "2019-03-16": { mood: "grin" },
      "2019-03-17": { mood: "smile" },
      "2019-03-18": { mood: "smile" },
      "2019-04-17": { mood: "smile" }
    }
  };

  expect(getWeekMood(state)).toEqual([
    {
      grin: 2,
      smile: 1
    },
    3
  ]);
});

test("getMonthMood", () => {
  DateTime.local = jest.fn(() => DateTime.fromObject({ year: 2019, month: 3 }));

  const state = {
    calendar: {
      "2018-03-17": { mood: "grin" },
      "2019-03-17": { mood: "grin" },
      "2019-03-24": { mood: "smile" },
      "2019-04-26": { mood: "smile" }
    }
  };

  expect(getMonthMood(state)).toEqual([
    {
      grin: 1,
      smile: 1
    },
    2
  ]);
});

test("getYearMood", () => {
  DateTime.local = jest.fn(() => DateTime.fromObject({ year: 2019 }));

  const state = {
    calendar: {
      "2018-01-17": { mood: "grin" },
      "2019-01-17": { mood: "grin" },
      "2019-01-24": { mood: "smile" },
      "2019-01-26": { mood: "smile" }
    }
  };

  expect(getYearMood(state)).toEqual([
    {
      grin: 1,
      smile: 2
    },
    3
  ]);
});

test("getAllTimeMood", () => {
  const state = {
    calendar: {
      "2017-01-17": { mood: "grin" },
      "2018-01-24": { mood: "smile" },
      "2019-01-26": { mood: "smile" }
    }
  };

  expect(getAllTimeMood(state)).toEqual([
    {
      grin: 1,
      smile: 2
    },
    3
  ]);
});
