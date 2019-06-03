// screens/auth/login.js

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      helloWord: 'Login Template',
      token: null,
    }
  }

  render () {
    return (
      <View>
        <Text style = { styles.appName }>
          { this.state.helloWord }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appName: {
    color: '#222222'
  }
});