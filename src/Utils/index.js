import checkPropsType from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "../reducers/index";
import { middlewares } from "../store";

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

export const testStore = (intialState) => {
  const createStoreMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreMiddleware(RootReducer, intialState);
};
