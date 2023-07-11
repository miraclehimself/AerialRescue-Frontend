import { View, Text,  StyleSheet } from 'react-native'
import React from 'react'
import calculateResponsiveFontSize from '../../utils/font'
const Home = () => {
   
  return (
    <View style={{flex:1}}>
      <Text style={[styles.text, { fontSize: 
calculateResponsiveFontSize(20)

    }]}>Home</Text>
    </View>
  )
}

export default Home



const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      marginVertical: 20,
    },
  });