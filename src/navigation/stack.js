import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from "native-base";
import Home from '../page/home';
import Snap from '../page/snap/Snap';
import SnapDetail from '../page/snapDetail/snapDetail';
import SnapTip from '../page/snapTip/snapTip';
const Stack = createStackNavigator();
const newColorTheme = {
  brand: {
    bg: "#D3F5EC",
    bg2:'#159575',
    bg3:'#D3F5EC'
  },
};
const theme = extendTheme({ colors: newColorTheme });

function StackNav() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="SnapTip" options={{
            headerShown:false
          }} component={SnapTip} />
        <Stack.Screen name="SnapDetail" options={{
            headerShown:false
          }} component={SnapDetail} />
        <Stack.Screen name="Snap" options={{
            headerShown:false
          }} component={Snap} />
          <Stack.Screen name="Home" options={{
            headerShown:false
          }} component={Home} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default StackNav;
