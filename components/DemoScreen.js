import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Dimensions
} from 'react-native';
import Header from './Header';
import ItemListView from './selectContent/ItemListView';
import ImageView from './selectContent/ImageView';
import TextView from './selectContent/TextView';
const { width, height } = Dimensions.get('window');

export default class DemoScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      selected: 'List'
    }
  }

  renderView(){
    if(this.state.selected == 'List'){
      return (<ItemListView/>);
    }
    else if(this.state.selected == 'Image'){
      return (<ImageView/>);
    }
    else if(this.state.selected == 'Text'){
      return (<TextView/>);
    }
    else {
      return (null);
    }
  }

  render() {
    var SelectedView = this.renderView();
    return (
      <View style={styles.container}>
        <View style={{flex: 1, marginTop: 23, backgroundColor: '#1e90ff', width: width,  height: height*0.1}}>
          <Header headerText={"Hello World! :)"}/>
        </View>
        <View style={{flex: 6, margin: 20}}>
          {SelectedView}
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{margin: 10}}>
            <Button onPress={()=>this.setState({selected: 'List'})} title="List"/>
          </View>
          <View style={{margin: 10}}>
            <Button onPress={()=>this.setState({selected: 'Image'})} title="Image"/>
          </View>
          <View style={{margin: 10}}>
            <Button onPress={()=>this.setState({selected: 'Text'})} title="Text"/>
          </View>
        </View>
      </View>
    );
  }
}
