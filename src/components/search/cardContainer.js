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
import config from "../../config/index";
const { width, height } = Dimensions.get("window");
import { connect } from "react-redux";
import { getLabel } from "../../store/actions/labels_action";

class cardContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getLabel());
  }

  renderLabel = label =>
    label.labels
      ? label.labels.map((items, i) => (
          <TouchableOpacity
            // onPress={() =>
            //   this.props.navigation.navigate("AboutArtist", {
            // ...items
            //   })
            // }
            key={i}
          >
            <View style={styles.cartContainer}>
              <View style={[styles.card, { borderColor: "#CCC" }]}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: `${items.logo}` }}
                  resizeMode="cover"
                />
                <Text style={styles.leftText}>{items.name}</Text>
                <Text style={styles.rightText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      : null;

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
          horizontal={true}
        >
          {this.renderLabel(this.props.Label)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cartContainer: {
    height: 2000,
    width: 100 + "%",
    padding: 2,
    marginTop: 5,
    marginLeft: 5
  },
  card: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#000",
    height: 200,
    padding: 10
  },
  cardImage: {
    height: 140,
    width: width - 50,
    justifyContent: "space-around"
  },
  cardDetailConatiner: {
    height: 40,
    width: 100 + "%",
    backgroundColor: "#424242"
  },
  textLeft: {
    position: "relative",
    left: 0,
    top: 0
  },
  textRight: {
    position: "relative",
    right: 0,
    top: 0
  }
});

const mapStateToProps = state => {
  return {
    Label: state.Label
  };
};

export default connect(mapStateToProps)(cardContainer);
