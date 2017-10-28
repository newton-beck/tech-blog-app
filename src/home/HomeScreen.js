import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Posts from '../posts/Posts';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    let posts = [
      {
        key: 1,
        title: 'Otimização de busca em faixas de valores',
        author: '@ftfarias',
        date: '23/10/2017',
        description: 'Explicamos como utilizamos um método de bissecção para otimizar a busca de valores em uma coleção de faixas de CEP, aumentando em mais de 100 vezes a performance do algoritimo.',
        category: 'back-end'
      },
      {
        key: 2,
        title: 'Minimizando código duplicado com React Native no Elo7',
        author: '@aterribili',
        date: '16/10/2017',
        description: 'Neste post explico como aplicamos o uso de React Native no Elo7.',
        category: 'mobile'
      },
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
      },
      {
        key: 5,
        title: 'Terraformando tudo - parte 3',
        author: '@lucasvasconcelos',
        date: '18/09/2017',
        description: 'Terceiro post da série "Terraformando Tudo", que conta a nossa trajetória em busca da codificação da nossa infraestrutura. Neste post mostraremos como "terraformar" uma infra já existente.',
        category: 'devops'
      }
    ];
    let { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Posts posts={posts}
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
  }
});
