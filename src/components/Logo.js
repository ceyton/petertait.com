import React, { Component, PropTypes } from "react";
import { IndexLink } from "react-router";
import Radium from "radium";
import Isvg from "react-inlinesvg";

class Logo extends Component {
  render() {
    return (
      <IndexLink style={styles.logo} to="/">
        <Isvg src="../images/logo_02.svg" />
      </IndexLink>
    );
  }
}

const styles = {
  logo: {
    border: "none",
  },
};

export default Logo;
