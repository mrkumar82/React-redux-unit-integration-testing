import React from "react";
import { findByDataAttr, checkProps } from "../../Utils/index";
import { shallow } from "enzyme";
import ListItem from "../ListItem/ListItem";

describe("List item component", () => {
  describe("checking prop types", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        title: "Example title",
        desc: "example desc",
      };

      const propsErros = checkProps(ListItem, expectedProps);
      expect(propsErros).toBeUndefined();
    });
  });

  describe("Component renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example title",
        desc: "example desc",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("should render list component", () => {
      const listitem = findByDataAttr(wrapper, "listItem");
      expect(listitem.length).toBe(1);
    });

    it("should render title", () => {
      const title = findByDataAttr(wrapper, "title");
      expect(title.length).toBe(1);
    });
    it("should render desc", () => {
      const desc = findByDataAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "example desc",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendering", () => {
      const listitem = findByDataAttr(wrapper, "listItem");
      expect(listitem.length).toBe(0);
    });
  });
});
