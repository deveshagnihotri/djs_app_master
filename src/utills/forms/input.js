import React, { Component } from "react";
import { Text, StyleSheet, Picker, TextInput, View } from "react-native";

const input = props => {
  let template = null;

  switch (props.type) {
    case "textinput":
      template = (
        <TextInput
          underlineColorAndroid="transparent"
          {...props}
          style={[styles.input, props.overrideStyle]}
        />
      );
      break;
    default:
      return template;
  }
  return template;
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#eaeaea",
    fontSize: 16,
    padding: 5,
    marginTop: 20
  }
});
export default input;
