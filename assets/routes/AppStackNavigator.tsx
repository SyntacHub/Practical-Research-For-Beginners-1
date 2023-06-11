import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from "../../types";
import Home from "../screens/Home";
import About from "../screens/About";
import Lesson from "../screens/Lesson";

const Stack = createStackNavigator<RootStackParamList>();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Lesson" component={Lesson} />
      <Stack.Screen name="About" component={About} />
      {/* <Stack.Screen
        name="Modal"
        component={WhatsNewModal}
        options={{ headerShown: false, presentation: "modal" }}
      /> */}
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
