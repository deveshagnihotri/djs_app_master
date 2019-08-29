import React, { Component } from "react";
import { Image } from "react-native";
import config from "../config";

class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={config.images.logoIcon}
        style={{ width: 60, height: 25 }}
        resizeMode="center"
      />
    );
  }
}

export default LogoTitle;
