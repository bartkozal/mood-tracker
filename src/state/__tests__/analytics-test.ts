import { getAllTimeMood } from "../analytics";

test("getAllTimeMood", () => {
  const state = {
    calendar: {
      "2019-01-17": { mood: "grin" },
      "2019-01-24": { mood: "smile" },
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
