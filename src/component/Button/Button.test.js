import React from "react";
import { findByDataAttr, checkProps } from "../../Utils/index";
import { shallow } from "enzyme";
import Button from "../Button/Button";

describe("Shared button component", () => {
  describe("Checking props types", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        buttonText: "Example button text",
        emitEvent: () => {},
      };
      const propsErrors = checkProps(Button, expectedProps);
      expect(propsErrors).toBeUndefined();
    });
  });

  describe("Renders without error", () => {
    let wrapper;
    let mockFunc;

    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "Ramesh",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<Button {...props} />);
    });
    it("Should render a button", () => {
      const button = findByDataAttr(wrapper, "button");
      expect(button.length).toBe(1);
    });

    it("should emit callback on click events", () => {
      const button = findByDataAttr(wrapper, "button");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
