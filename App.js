import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/components/loginscreen';
import LogoutScreen from './screens/components/logoutscreen';
import RegistrationScreen from './screens/components/registrationscreen';
import HomeScreen from './screens/components/homescreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="LogoutScreen" component={LogoutScreen} options={{ title: 'Logout' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
