import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from './Header';

export default class Header extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      selected: 1
    }
  }

  renderView(){
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"Hello World! :)"}/>
      </View>
    );
  }
}
