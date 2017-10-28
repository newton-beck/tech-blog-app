import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Post from '../post/Post';

const Posts = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item}/>} />
  );
};

export default Posts;
