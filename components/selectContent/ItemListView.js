import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';

export default class ItemListView extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      data: [{key: 'a'}, {key: 'b'}]
    }
  }

  componentDidMount(){

  }

  renderItem({item}){
    return (
      <Text>{item.key}</Text>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={this.renderItem.bind(this)}
          />
      </View>
    );
  }
}
