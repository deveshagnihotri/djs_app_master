import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RootNavigator } from "./src/routes";

class App extends Component {
  render() {
    const Nav = RootNavigator();
    return (
      <View style={styles.container}>
        <Nav />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121"
  }
});

export default App;
