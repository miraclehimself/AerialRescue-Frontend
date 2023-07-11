import { View, Text } from 'react-native'
import React from 'react'
import calculateResponsiveFontSize from '../utils/font'
import { Button, useTheme} from 'native-base';

const ButtonComponent = ({width, text}) => {
    const { colors } = useTheme();
    const bgColor2 = colors.brand.bg2;
  const bgColor3 = colors.brand.bg3;

  return (
    <Button bg={bgColor2} px="4" w={width}>
    <Text style={[{fontSize:calculateResponsiveFontSize(7), color:bgColor3, fontWeight:'500'}]}>{text}</Text>
  </Button>
  )
}

export default ButtonComponent