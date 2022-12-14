import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import ForgotPassword from './pages/forgotPassword'

console.disableYellowBox = true;
LogBox.ignoreAllLogs();

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
           <Stack.Screen
          name="forgot"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="About"
          component={About}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
