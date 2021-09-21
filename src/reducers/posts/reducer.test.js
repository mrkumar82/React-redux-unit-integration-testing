import { types } from "../../actions/types";
import postsReducer from "./reducer";

describe("Posts Reducer", () => {
  it("should return default state", () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const posts = [
      { title: "Ttest 1" },
      { title: "Ttest 1" },
      { title: "Ttest 1" },
    ];
    const newState = postsReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts,
    });
  });
});
