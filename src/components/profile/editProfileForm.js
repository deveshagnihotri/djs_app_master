import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    state: {
      username: '';
      stagename: '';
      phoneno: '';
      country: '';
    }
  }
  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{ textAlign: 'center', padding: 10, height: 60 }}>
            Update Profile
          </Text>
        </View>
        <View style={styles.container}>
          <TextInput
            placeholder="User Name"
            style={StyleSheet.textBodyContainer}
          />
        </View>
      </ScrollView>
    );
  }
}

export default EditProfileForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  textBodyContainer: {
    height: 40,
    borderColor: '#E0E0E0'
  }
});
