import { View, Text } from 'react-native'
import React from 'react'
import calculateResponsiveFontSize from '../utils/font'
import { Button, useTheme} from 'native-base';

const ButtonComponent = ({width, text, onClick}) => {
    const { colors } = useTheme();
    const bgColor2 = colors.brand.bg2;
  const bgColor3 = colors.brand.bg3;

  return (
    <Button bg={bgColor2} _hover={{
      backgroundColor:bgColor2
    }} px="4" py={4} w={width} onPress={onClick}>
    <Text style={[{fontSize:calculateResponsiveFontSize(7), color:bgColor3, fontWeight:'500'}]}>{text}</Text>
  </Button>
  )
}

export default ButtonComponent