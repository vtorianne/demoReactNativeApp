import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './Styles';
import DemoScreen from './components/DemoScreen';

export default class App extends Component<{}> {
  render() {
    return (
      <DemoScreen/>
    );
  }
}
