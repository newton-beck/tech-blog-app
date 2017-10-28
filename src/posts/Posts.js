import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export default class Posts extends Component {

  render() {
    return (
      <View>
        <FlatList
          data={this.props.posts}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20
  }
});
