import React, { Component } from "react";
import { Image, View } from "react-native";
import config from "../../config/index";

class authLogo extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 80
        }}
      >
        <Image
          source={config.images.logoIcon}
          resizeMode={"contain"}
          style={{
            width: 170,
            height: 150
          }}
        />
      </View>
    );
  }
}

export default authLogo;
