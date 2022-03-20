import { Feather } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Feather.font,
          "SFProDisplay-Regular": require("../fonts/SFProDisplay-Regular.ttf"),
          "SFProDisplay-Bold": require("../fonts/SFProDisplay-Bold.ttf"),
          "SFProDisplay-Medium": require("../fonts/SFProDisplay-Medium.ttf"),
          "SFProDisplay-Black": require("../fonts/SFProDisplay-Black.ttf"),
          "Poppins-Light": require("../fonts/Poppins-Light.ttf"),
          "Poppins-SemiBold": require("../fonts/Poppins-SemiBold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
