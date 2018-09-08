/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
/* eslint-disable eol-last */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
const instructions = Platform.select({
  ios:  
  ' Hi, My Name is Akshat Alpesh Shah.\n' + 'I am the App Developer.\n'+'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <View style={styles.viewStyle}>

        <Header HeaderText={'Albums'}/>
         
      
      </View>

            <AlbumList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#404345',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {height: 3},
    shadowOpacity: 0.3


  }
});
