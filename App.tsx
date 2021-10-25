import { StatusBar } from "expo-status-bar";
import React from "react";
import useCachedResources from "./assets/hooks/useCachedResources";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./assets/screens/root/Home";
import Feedback from "./assets/screens/root/Feedback";
import Faqs from "./assets/screens/root/Faqs";
import About from "./assets/screens/root/About";
import Subtopics from "./assets/screens/root/Subtopics";
import Lesson from "./assets/screens/root/Lesson";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function Root() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Subtopics"
          component={Subtopics}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Root"
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="Home" component={Root} />
        <Drawer.Screen name="Feedback" component={Feedback} />
        <Drawer.Screen name="FAQs" component={Faqs}/>
        <Drawer.Screen name="About" component={About}/>
      </Drawer.Navigator>
    </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
