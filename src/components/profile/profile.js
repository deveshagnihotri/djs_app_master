import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import config from "../../config/index";

export default class ProfileScreen extends Component {
  goto_Profile = () => {
    alert("go to profile");
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.firstContainer}>
            <View style={styles.itemContainer}>
              <Image
                style={styles.imageContainer}
                source={config.images.martinGarrix}
              />
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.textContainer1}>Martin Garrix {"\n"}</Text>
                <Text style={styles.textCountry}>Amsterdam,Netherland</Text>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate("EditProfile")}
                >
                  <View style={styles.button}>
                    <Text style={styles.textProfile}>View Profile</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>

          <View style={styles.secondContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("Artist")}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Artists</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Record Labels</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Radio & Podcasts</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Clubs</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.thirdContainer}>
            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Activity</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Record</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Setting</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Open Player</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.fourthContainer}>
            <TouchableHighlight
              onPress={this.goto_Profile}
              style={{
                borderBottomColor: "#BDBDBD",
                borderBottomWidth: 0.5
              }}
            >
              <View style={styles.item1}>
                <Text style={styles.textitem}>Help & Support</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.fifthContainer}>
            <Text
              style={{
                textAlign: "center",
                marginLeft: 5,
                fontSize: 16
              }}
            >
              Sign Out!
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0"
  },
  firstContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    height: 160,
    justifyContent: "center"
  },
  secondContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    height: 160
  },
  thirdContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    height: 160
  },
  fourthContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    height: 40,
    marginBottom: 5
    // alignItems: "center",
    // justifyContent: "center"
  },
  fifthContainer: {
    height: 40,
    marginBottom: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  item: {
    padding: 10,
    fontSize: 18
    // height: 44
  },
  itemContainer: {
    flexDirection: "row"
  },
  imageContainer: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    marginTop: 5,
    marginLeft: 5,
    borderColor: "#757575",
    borderWidth: 3
  },
  textContainer1: {
    // textAlign: "center",
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 30,
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 15
  },
  textCountry: {
    // justifyContent: "center",
    flex: 2,
    marginTop: 5,
    fontSize: 14,
    color: "#BDBDBD",
    // fontWeight: "bold",
    paddingHorizontal: 15
  },
  button: {
    position: "relative",
    backgroundColor: "#BDBDBD",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  textitem: {
    fontSize: 18,
    marginLeft: 10,
    flex: 1,
    marginTop: 8
  },
  item1: {
    height: 40
  }
});
