import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import Moment from "moment";

class Articles extends Component {
  render() {
    const params = this.props.navigation.state.params;

    return (
      <ScrollView>
        <View style={{ backgroundColor: "#F5F5F5", height: 250, marginTop: 5 }}>
          <Image
            style={{ height: 350 }}
            source={{ uri: params.image }}
            resizeMode="cover"
          />
          <View style={styles.articleContainer}>
            <View>
              <Text style={styles.articleTitle}>{params.title}</Text>
              <Text style={styles.articleData}>
                {params.team} -Posted At {Moment(params.date).format("d MMMM")}
              </Text>
            </View>
            <View style={styles.articleContent}>
              <Text style={styles.articleText}>{params.content}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  articleContainer: {
    padding: 5,
    backgroundColor: "#F5F5F5"
  },
  articleTitle: {
    fontSize: 22,
    color: "#323232",
    fontStyle: "italic",
    fontWeight: "bold"
  },
  articleData: {
    fontSize: 16,
    color: "#B2B2B2",
    fontStyle: "italic"
  },
  articleContent: {
    marginTop: 30,
    borderTopWidth: 0.5,
    borderTopColor: "grey"
  },
  articleText: {
    fontSize: 14,
    lineHeight: 20
  }
});

export default Articles;
