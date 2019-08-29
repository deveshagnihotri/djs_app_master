import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView
} from "react-native";
import AuthLogo from "./authLogo";
import AuthForm from "./authForm";
import { getTokens, setTokens } from "../../utills/misc";
import { connect } from "react-redux";
import { autoSignIn } from "../../store/actions/user_actions";
import { bindActionCreators } from "redux";

class AuthComponent extends Component {
  state = {
    loading: false
  };

  goNext = () => {
    this.props.navigation.navigate("App");
  };

  componentDidMount() {
    getTokens(value => {
      if (value[0][1] === null) {
        console.log("hey");
        this.setState({ loading: false });
      } else {
        this.props.autoSignIn(value[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({ loading: false });
          } else {
            setTokens(this.props.User.auth, () => {
              this.goNext();
            });
          }
        });
      }
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={[styles.container]}>
          <AuthLogo />
          <AuthForm goNext={this.goNext} />
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    padding: 5
  },
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    User: state.User
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ autoSignIn }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthComponent);
