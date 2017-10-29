import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Posts from '../posts/Posts';
import { header } from '../styles/Header';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: header.container,
    headerTitleStyle: header.title
  }

  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch('http://192.168.25.188:3000/posts')
    .then((resp) => resp.json())
    .then((posts) => {
      this.setState({ posts: posts });
    })
    .catch((e) => {
      console.log(e);
    });
  }

  render() {
    let { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Posts posts={this.state.posts}
          goToCategory={({ category }) => { navigate('Categories', { name: category }) }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecebeb'
  },
});
