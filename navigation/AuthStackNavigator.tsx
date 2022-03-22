import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen, SignInScreen } from "../screens";
import EULAModal from "../components/modals/EULAModal";

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="EULAModal" component={EULAModal} options={{ headerShown: false, presentation: "modal" }} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
