import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

// import Video from "react-native-video";
import YouTube from "./youTubeplayer";

class AboutArtist extends Component {
  render() {
    const params = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>{params.name}</Text>
        <YouTube />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 100 + "%",
    height: 250
  }
});

export default AboutArtist;
