import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import { getArtist } from "../../store/actions/artist_action";
import { BottomTabBar } from "react-navigation";
import config from "../../config/index";

class ArtistComponent extends Component {
  componentDidMount() {
    this.props.dispatch(getArtist());
  }

  renderArtist = artist =>
    artist.artists
      ? artist.artists.map((items, i) => (
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("AboutArtist", {
                ...items
              })
            }
            key={i}
          >
            <View>
              <View style={styles.cardContainer}>
                <Image
                  style={{
                    height: 150,
                    justifyContent: "space-around",
                    flexGrow: 1
                  }}
                  source={{ uri: `${items.images}` }}
                  resizeMode="cover"
                />

                <View style={styles.bottomCardContainer}>
                  <Text style={styles.textContainer}>{items.name}</Text>
                  <Image
                    style={styles.countryImageContainer}
                    source={{ uri: `${items.country}` }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      : null;

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* console.log(this.state.Artist); */}
        {this.renderArtist(this.props.Artist)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    shadowColor: "#dddddd",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    borderRadius: 2,
    position: "relative"
  },
  contentCard: {
    borderWidth: 1,
    borderColor: "#dddddd",
    position: "absolute",
    height: 20,
    textAlign: "right"
  },
  bottomCardContainer: {
    flex: 1,
    height: 30,
    backgroundColor: "#E0E0E0",
    borderBottomEndRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between"
    // position: "relative"
  },
  countryImageContainer: {
    flex: 1,
    height: 30,
    flexDirection: "row-reverse",
    resizeMode: "contain",
    marginTop: 1
  },
  textContainer: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "left",
    paddingLeft: 10,
    marginTop: 5,
    color: "#212121"
    // justifyContent: "center",
    // alignItems: "center",
    // flex: 1
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    Artist: state.Artist
  };
}

export default connect(mapStateToProps)(ArtistComponent);
