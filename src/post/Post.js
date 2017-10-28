import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = ({ post }) => {
  return (
    <View>
      <Text>{post.key}</Text>
    </View>
  );
};

export default Post;
