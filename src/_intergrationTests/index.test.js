import moxios from "moxios";
import { testStore } from "../Utils";
import { fetchPosts } from "../actions/index";

describe("fetch post action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "emaple",
        body: "some text",
      },
      {
        title: "emaple",
        body: "some text",
      },
      {
        title: "emaple",
        body: "some text",
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
