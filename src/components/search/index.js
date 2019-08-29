import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
const { width } = Dimensions.get("window");
import CardContainer from "./cardContainer";

class SearchScreen extends Component {
  render() {
    const params = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={{ height: 230 }}>
          <CardContainer style={styles.CardContainer} />
        </View>
        <ScrollView>
          <View
            style={{
              height: 40,
              backgroundColor: "#fff",
              borderTopWidth: 0.8,
              borderBottomWidth: 0.8,
              borderColor: "#212121",
              paddingTop: 10
            }}
          >
            <Text>{this.props.name}</Text>
          </View>
          <View>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
            <Text>Hello from contaiber</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
    flexDirection: "column"
  },
  CardContainer: {
    height: 350,
    alignSelf: "auto"
  }
});

export default SearchScreen;
