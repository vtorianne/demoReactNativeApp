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
      data: [{key: 'list item 1'}, {key: 'list item 2'}, {key: 'list item 3'}]
    }
  }


  renderItem({item}){
    return (
      <View style={{margin: 5, padding: 10, borderRadius: 5, backgroundColor: '#1e90ff'}}>
        <Text style={{color: 'white'}}>{item.key}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1, margin: 10}}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
          />
      </View>
    );
  }
}
