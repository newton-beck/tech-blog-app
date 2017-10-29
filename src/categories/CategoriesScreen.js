import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Posts from '../posts/Posts';
import { header } from '../styles/Header';

export default class CategoriesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    headerStyle: header.container,
    headerTitleStyle: header.title,
    headerBackTitleStyle: header.back,
    headerTintColor: '#fff'
  });

  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    let { params } = this.props.navigation.state;
    fetch('http://192.168.25.188:3000/posts/' + params.name)
    .then((resp) => resp.json())
    .then((posts) => {
      this.setState({ posts: posts });
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Posts posts={this.state.posts} goToCategory={({ category }) => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecebeb'
  }
});
