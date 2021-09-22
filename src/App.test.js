import App from "./App";
import { shallow } from "enzyme";
import { findByDataAttr, testStore } from "./Utils/index";
import React from "react";

const setUp = (inititalState = {}) => {
  const store = testStore(inititalState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title",
          body: "Example desc",
        },
        {
          title: "Example title",
          body: "Example desc",
        },
        {
          title: "Example title",
          body: "Example desc",
        },
      ],
    };
    wrapper = setUp(initialState);
  });

  it("should render without errors", () => {
    const component = findByDataAttr(wrapper, "app");
    expect(component.length).toBe(1);
  });

  // it("exampleMethod method should update state as expected", () => {
  //   const classInstance = wrapper.instance();
  //   console.log(classInstance);
  // });
});
