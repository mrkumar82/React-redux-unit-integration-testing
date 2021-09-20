import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

const findByDataAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Headline component", () => {
  it("Should render the post title component", () => {});

  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test desc",
      };
      wrapper = setUp(props);
    });

    it("Headline should render without errors", () => {
      const component = findByDataAttr(wrapper, "headline");
      expect(component.length).toBe(1);
    });

    it("Header should render without error", () => {
      const h2 = findByDataAttr(wrapper, "header");
      expect(h2.length).toBe(1);
    });

    it("Desc should render without error", () => {
      const desc = findByDataAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Null props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const component = findByDataAttr(wrapper, "headline");
      expect(component.length).toBe(0);
    });
  });
});
