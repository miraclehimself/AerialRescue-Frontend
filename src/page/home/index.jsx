import { View, Text,  StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import calculateResponsiveFontSize from '../../utils/font'
import { useTheme, HStack , Image, Stack, Button} from 'native-base';

const Home = () => {
  const { colors } = useTheme();
   
  return (
    <View style={{flex:1, backgroundColor: colors.brand.bg5}}>
        <StatusBar backgroundColor={colors.brand.bg5} barStyle="dark-content" />
      <Stack mt="10" mx="5" mb="10">
      <HStack space="3" alignItems="center">
      <TouchableOpacity>
    <Image
          source={require('../../images/back.png')}
          alt="Alternate Text"
        />
    </TouchableOpacity>
    <Text style={[styles.textHead, { fontSize: calculateResponsiveFontSize(5) }]}>Aerial Data</Text>

      </HStack>

</Stack>
<HStack space="3"  mx="5" mt="10">
<Stack borderRadius="2" h={calculateResponsiveFontSize(90)} w="49%" p="3" bg={colors.brand.bg5} style={styles.shadow}>
<Image
        w="100%"
        h="60%"
        source={require('../../images/map.jpeg')}
          alt="Alternate Text"
        />
    
        <Stack pt="2">
        <Text  fontSize={calculateResponsiveFontSize(2)} style={styles.heading}>Object to analyze: 
          <Text  style={{fontWeight:'400'}}> car, Building</Text>

          </Text>
          <Text  fontSize={calculateResponsiveFontSize(2)} style={styles.heading}>Date & Time: 
          <Text  style={{fontWeight:'400'}}> 22/04/2023 12:30am</Text>

          </Text>
        </Stack>
</Stack>
<Stack borderRadius="2" h={calculateResponsiveFontSize(90)} w="49%" p="3" bg={colors.brand.bg5} style={styles.shadow}>
<Image
        w="100%"
        h="60%"
        source={require('../../images/map.jpeg')}
          alt="Alternate Text"
        />

<Stack pt="2">
        <Text  fontSize={calculateResponsiveFontSize(2)} style={styles.heading}>Object to analyze: 
          <Text  style={{fontWeight:'400'}}> car, Building</Text>

          </Text>
          <Text  fontSize={calculateResponsiveFontSize(2)} style={styles.heading}>Date & Time: 
          <Text  style={{fontWeight:'400'}}> 22/04/2023 12:30am</Text>

          </Text>
        </Stack>
</Stack>
</HStack>
    </View>
  )
}

export default Home



const styles = StyleSheet.create({
    text: {
      marginVertical: 20,
    },
    shadow:{
      shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 1,
},
shadowOpacity:  0.15,
shadowRadius: 1.00,
elevation: 1
    },
    heading:{
      color:"#000",
      fontWeight:'700'
    },
    textHead: {
      color:"#000",
      fontWeight:"500"
      },
  });