import { View, Text , StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import { useTheme, HStack , Image, Stack, Button} from 'native-base';
import calculateResponsiveFontSize from '../../utils/font';
import ButtonComponent from '../../component/ButtonComponent';
const Snap = () => {
    const { colors } = useTheme();
  
  // Access the color from the theme
  const bgColor = colors.brand.bg;
  const bgColor2 = colors.brand.bg2;
  const bgColor3 = colors.brand.bg3;


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={bgColor} barStyle="dark-content" />
      <HStack mb="3" space="3" alignItems="center" justifyContent="space-between" style={styles.header}>
      <HStack space="3" alignItems="center">
      <Image
          source={require('../../images/back.png')}
          alt="Alternate Text"
        />
        <Text style={[styles.text, { fontSize: calculateResponsiveFontSize(8) }]}>Aerial Data</Text>
      </HStack>
        <Image
          source={require('../../images/question.png')}
          alt="Alternate Text"
        />
      </HStack>
      <View style={styles.content}>
        <Image
          source={require('../../images/map.jpeg')}
          alt="map"
          style={styles.image}
        />
         <Image
          source={require('../../images/cancel.png')}
          alt="map"
          style={styles.imageCancel}
        />
      </View>
      <View style={styles.bottomContainer}>
   <Text style={[styles.head, {fontSize:calculateResponsiveFontSize(9)}]}> Select Object to analyze</Text>
   <HStack flexWrap="wrap" my="4" space="2">
   <Button bg={bgColor2} px="4">
  <Text style={[{fontSize:calculateResponsiveFontSize(5), color:bgColor3}]}>Default Small</Text>
</Button>

<Button bg="#fff" px="4">
  <Text style={[{fontSize:calculateResponsiveFontSize(5), color:"#000"}]}>Default Small</Text>
</Button>
<Button bg="#fff" px="4">
  <Text style={[{fontSize:calculateResponsiveFontSize(5), color:"#000"}]}>Default Small</Text>
</Button>
<Button bg="#fff" px="4" my="2">
  <Text style={[{fontSize:calculateResponsiveFontSize(5), color:"#000"}]}>Default Small</Text>
</Button>
   </HStack>
   <Stack justifyContent="center" alignItems="center" w="100%">
  <ButtonComponent width="80%" text="Analyze" />
   </Stack>
      </View>
    </View>
  )
}

export default Snap


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: '#D3F5EC',
      },
      header: {
        paddingHorizontal: 10,
        paddingTop: 2,
      },
      text: {
      color:"#000",
      fontWeight:"800"
      },
      content: {
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: '80%',
        height: '90%',
        resizeMode: 'contain',
        borderRadius:20
      },
      bottomContainer: {
        flex: 1,
        paddingHorizontal: 10,
            paddingTop:20
      },
      head:{
        color:'#000',
        fontWeight:'600'
      },
      buttonText:{
        fontWeight:"400"
      },
      imageCancel:{
        position:'absolute',
        top:10,
        right:30,
        resizeMode: 'contain',

      }
   
  });