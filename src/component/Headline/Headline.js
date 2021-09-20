import React, { Component } from "react";

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div className="left-align" data-test="headline">
        <h2 data-test="header">{header}</h2>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}
export default Headline;
