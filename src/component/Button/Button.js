import React from "react";
import propTypes from "prop-types";

function Button(props) {
  const { buttonText, emitEvent } = props;

  return (
    <div>
      <button onClick={() => emitEvent()} data-test="button">
        {buttonText}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonText: propTypes.string,
  emitEvent: propTypes.func,
};
export default Button;
