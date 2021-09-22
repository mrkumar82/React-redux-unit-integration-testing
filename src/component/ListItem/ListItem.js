import React from "react";
import propTypes from "prop-types";

function ListItem(props) {
  const { title, desc } = props;

  if (!title) {
    return null;
  }
  return (
    <div data-test="listItem">
      <h2 data-test="title"> {title}</h2>
      <p data-test="desc"> {desc}</p>
    </div>
  );
}

ListItem.propTypes = {
  title: propTypes.string,
  desc: propTypes.string,
};

export default ListItem;
