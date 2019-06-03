// screens/auth/splash.js

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Splash extends Component {
  constructor (props) {
    super(props);

    // eslint-disable-next-line react/prop-types
    this.navigation = this.props.navigation;

    this.state = {
      helloWord: 'App Template',
      token: null,
    }

    setTimeout(() => {
      this.navigation.navigate('auth');
    }, 40000);
  }

  render () {
    return (
      <View style = {
          [ styles.container, {
              justifyContent: 'space-between'
            } ] }>
        <View style = {{ flex: 1, alignContent: 'center', alignItems: 'center' }}>
          <Text style = { [styles.appName, { backgroundColor: 'pink' } ] }>
            { this.state.helloWord }
          </Text>
        </View>
        <View>
            
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  appName: {
    color: '#222222'
  }
});