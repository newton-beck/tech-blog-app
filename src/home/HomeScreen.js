import React, { Component } from 'react';
import { View } from 'react-native';
import Posts from '../posts/Posts';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Posts
          posts={[
            {key: 'Post 1'},
            {key: 'Post 2'},
            {key: 'Post 3'},
            {key: 'Post 4'},
            {key: 'Post 5'},
            {key: 'Post 6'},
            {key: 'Post 7'},
            {key: 'Post 8'},
            {key: 'Post 9'},
            {key: 'Post 10'},
            {key: 'Post 11'},
            {key: 'Post 12'},
          ]} />
      </View>
    );
  }
}
