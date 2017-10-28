import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <View style={styles.metadata}>
        <Text style={styles.author}>{post.author}</Text>
        <Text style={styles.date}>{post.date}</Text>
      </View>
      <Text style={styles.description}>{post.description}</Text>
      <View style={styles.actions}>
        <TouchableHighlight>
          <Text style={styles.category}>{post.category}</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.details}>Continue lendo</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 16
  },
  title: {
    color: '#444',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  metadata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  author: {
    color: '#888',
  },
  date: {
    color: '#888',
  },
  description: {
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    backgroundColor: '#73bebe',
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
  },
  details: {
    borderColor: '#fba702',
    borderRadius: 4,
    borderWidth: 1,
    color: '#fba702',
    fontWeight: 'bold',
    padding: 10,
  }
});

export default Post;
