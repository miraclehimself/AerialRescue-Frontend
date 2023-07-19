import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from "native-base";
import Snap from '../page/snap/Snap';
import SnapDetail from '../page/snapDetail/snapDetail';
import SnapTip from '../page/snapTip/snapTip';
import LoginScreen from '../page/login/Login';
import RegisterScreen from '../page/register/Register';
import ForgotScreen from '../page/forgotpassword/forgotpassword';
import OtpScreen from '../page/otp/otpscreen';
import CreateNewPasswordScreen from '../page/createnewpassword/createnewpassword';
import BottomStack from './bottomStack';
import EditProfile from '../page/editProfile/editProfile';
import ChangePassword from '../page/changePassword/changePassword';
const Stack = createStackNavigator();
const newColorTheme = {
  brand: {
    bg: "#D3F5EC",
    bg2:'#159575',
    bg3:'#D3F5EC',
    bg4:'#23CCA2',
    bg5:'#E3FFF8',
    bg6:' rgba(35, 204, 162, 0.1)'
  },
};
const theme = extendTheme({ colors: newColorTheme });

function StackNav() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" options={{
            headerShown:false
          }} component={LoginScreen} />
        <Stack.Screen name="ChangePassword" options={{
            headerShown:false
          }} component={ChangePassword} />
        <Stack.Screen name="Editprofile" options={{
            headerShown:false
          }} component={EditProfile} />
        <Stack.Screen name="HomeStack" options={{
            headerShown:false
          }} component={BottomStack} />
       
        <Stack.Screen name="SnapTip" options={{
            headerShown:false
          }} component={SnapTip} />
        <Stack.Screen name="CreatePassword" options={{
            headerShown:false
          }} component={CreateNewPasswordScreen} />
        <Stack.Screen name="Otp" options={{
            headerShown:false
          }} component={OtpScreen} />
        <Stack.Screen name="Forgot" options={{
            headerShown:false
          }} component={ForgotScreen} />
        <Stack.Screen name="Register" options={{
            headerShown:false
          }} component={RegisterScreen} />
        
    
        <Stack.Screen name="SnapDetail" options={{
            headerShown:false
          }} component={SnapDetail} />
        <Stack.Screen name="Snap" options={{
            headerShown:false
          }} component={Snap} />
        
        
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default StackNav;
