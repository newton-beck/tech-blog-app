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

  render() {
    let posts = [
      {
        key: 3,
        title: 'Técnicas para codificar um e-mail',
        author: '@erikatakahara',
        date: '09/10/2017',
        description: 'Todo desenvolvedor front-end já passou por problemas ao codificar um e-mail, principalmente quando se trata de compatibilidade com todos os clientes, como o Yahoo, Gmail, Outlook, etc. Neste post, iremos abordar algumas técnicas e quais são os principais pontos de atenção ao desenvolver esse tipo de layout.',
        category: 'front-end'
      },
      {
        key: 4,
        title: 'Customizando campos de formulário com o mask-amd',
        author: '@rapahaeru',
        date: '25/09/2017',
        description: 'Que tal otimizar seu tempo e seu HTML com uma biblioteca focada diretamente no que é preciso? Direto ao ponto, a mask-amd tem um único objetivo: formatar os campos do seu formulário.',
        category: 'front-end'
      }
    ];
    return (
      <View style={styles.container}>
        <Posts posts={posts} />
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
