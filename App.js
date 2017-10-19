import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './Styles';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
