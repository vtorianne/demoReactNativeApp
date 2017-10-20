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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.headerText}>
          {this.props.headerText}
        </Text>
      </View>
    );
  }
}
