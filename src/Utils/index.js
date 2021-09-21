import checkPropsType from "check-prop-types";

export const findByDataAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropsType(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propsError;
};
