import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import Header from './Header';

export default class DemoScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      selected: 1
    }
  }

  renderView(){
    if(this.state.selected == 1){
      return (<Text>a</Text>);
    }
    else if(this.state.selected == 2){
      return (<Text>b</Text>);
    }
    else if(this.state.selected == 3){
      return (<Text>c</Text>);
    }
    else {
      return (null);
    }
  }

  render() {
    var SelectedView = this.renderView();
    return (
      <View style={styles.container}>
        <Header headerText={"Hello World! :)"}/>
        {SelectedView}
        <Button onPress={()=>this.setState({selected: 1})} title="1"/>
        <Button onPress={()=>this.setState({selected: 2})} title="2"/>
        <Button onPress={()=>this.setState({selected: 3})} title="3"/>
      </View>
    );
  }
}
