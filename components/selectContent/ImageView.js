import React, { Component } from 'react';
import {
  Image,
  View
} from 'react-native';

export default class TextView extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
      <Image
        source={require('../../images/react.png')}
        style={{width: 350, height: 350}}
      />
      </View>
    );
  }
}
