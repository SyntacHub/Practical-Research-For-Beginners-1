import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeScreen,SignInScreen} from '../screens';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
     
      
      
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;