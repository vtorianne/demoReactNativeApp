import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class TextView extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, borderWidth: 1, padding: 10}}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </View>
    );
  }
}
