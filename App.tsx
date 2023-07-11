/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import StackNav from './src/navigation/stack';


function App() {

  return <View style={styles.sectionContainer}>
    <StackNav/>
  </View>
}

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: StatusBar.currentHeight|| 0,
    flex:1
  },
 
});

export default App;
