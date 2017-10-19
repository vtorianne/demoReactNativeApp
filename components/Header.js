import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class Header extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          {this.props.headerText}
        </Text>
      </View>
    );
  }
}
