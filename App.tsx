import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./assets/routes/AuthStackNavigator";
import auth from "@react-native-firebase/auth";
import useCachedResources from "./assets/hooks/useCachedResources";
import AppStackNavigator from "./assets/routes/AppStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import { ThemeProvider } from "./assets/theme/ThemeProvider";
import { NativeBaseProvider } from "native-base";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const isLoadingComplete = useCachedResources();

  const onAuthStateChanged = async (user: any) => {
    await setCurrentUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <ToastProvider>
            <ThemeProvider>
              <NavigationContainer>{currentUser ? <AppStackNavigator /> : <AuthStackNavigator />}</NavigationContainer>
            </ThemeProvider>
          </ToastProvider>
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
};

export default App;
