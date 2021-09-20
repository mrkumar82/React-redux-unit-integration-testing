import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

const findByDataAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const wrapper = findByDataAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });

  it("logo should render without errors", () => {
    const logo = findByDataAttr(component, "brand-logo");
    expect(logo.length).toBe(1);
  });
});
