import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Error = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/error.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',

  },
});

export default Error;
