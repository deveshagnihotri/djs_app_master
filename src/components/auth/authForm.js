import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import config from "../../config/index";
import Input from "../../utills/forms/input";
import ValidationRules from "../../utills/forms/validationRules";
import { connect } from "react-redux";
import { signIn, signUp } from "../../store/actions/user_actions";
import { bindActionCreators } from "redux";
import { setTokens } from "../../utills/misc";

class authForm extends Component {
  state = {
    type: "Login",
    action: "Login",
    actionMode: "I want to register",
    hasErrors: false,
    form: {
      email: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          confirmPass: "password"
        }
      }
    }
  };

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View style={styles.errorsContainer}>
        <Text style={styles.errorLabel}>OOps, check your info</Text>
      </View>
    ) : null;

  confirmPassword = () =>
    this.state.type != "Login" ? (
      <Input
        placeholder="Confirm Your Password"
        placeholderTextColor="#fff"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        secureTextEntry
        onChangeText={value => this.updateInput("confirmPassword", value)}
      />
    ) : null;

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });
    let formCopy = this.state.form;
    formCopy[name].value = value;
    //rules
    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);

    // console.log(valid);
    formCopy[name].valid = valid;

    this.setState({
      form: formCopy
    });
  };

  manageAccess = () => {
    if (!this.props.User.auth.uid) {
      this.setState({ hasErrors: true });
    } else {
      setTokens(this.props.User.auth, () => {
        this.setState({ hasErrors: true });
        this.props.goNext();
        alert("login successful");
      });
    }
  };

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for (let key in formCopy) {
      if (this.state.type === "Login") {
        //Login
        if (key !== "confirmPassword") {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        //register
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }
    if (isFormValid) {
      if (this.state.type === "Login") {
        this.props.signIn(formToSubmit).then(() => this.manageAccess());
      } else {
        this.props.signUp(formToSubmit).then(() => this.manageAccess());
      }
      // console.log(formToSubmit);
    } else {
      this.setState({
        hasErrors: true
      });
    }
  };

  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      type: type === "Login" ? "Register" : "Login",
      action: type === "Login" ? "Register" : "Login",
      actionMode: type === "Login" ? "I want to Login" : "I want to Register"
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.formConatiner}>
        <Input
          placeholder="Enter Your Email"
          placeholderTextColor="#F5F5F5"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          autoCapitallize={"none"}
          keyboardType={"email-address"}
          onChangeText={value => this.updateInput("email", value)}
        />

        <Input
          placeholder="Enter Your Password"
          placeholderTextColor="#F5F5F5"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          secureTextEntry
          onChangeText={value => this.updateInput("password", value)}
        />

        {this.confirmPassword()}
        {this.formHasErrors()}

        <View style={{ marginTop: 20 }}>
          <View style={styles.button}>
            <Button title={this.state.action} onPress={this.submitUser} />
          </View>
          <View style={styles.button}>
            <Button
              title={this.state.actionMode}
              onPress={this.changeFormType}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="I'll do it later"
              onPress={() => this.props.goNext()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  formConatiner: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    padding: 40,
    backgroundColor: "#212121",
    marginTop: 50,
    borderRadius: 15,
    borderColor: "#212121"
  },
  errorsContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: "red"
  },
  errorLabel: {
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center"
  },
  button: {
    fontSize: 16,
    ...Platform.select({
      ios: {
        marginBottom: 0
      },
      android: {
        marginBottom: 10,
        marginTop: 10
      }
    })
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    User: state.User
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn, signUp }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(authForm);
