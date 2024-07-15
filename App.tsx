import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import useCachedResources from "./assets/hooks/useCachedResources";
import AppStackNavigator from "./assets/routes/AppStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useFonts } from "expo-font";
import { Feather } from "@expo/vector-icons";

const App = () => {
	const [loaded] = useFonts({
		Feather: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Feather.ttf"),
	});

	if (!loaded) {
		return null;
	}

	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const isLoadingComplete = useCachedResources();

	const onAuthStateChanged = async (user: any) => {
		await setCurrentUser(user);
		setIsLoading(false);
	};

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<GluestackUIProvider config={config}>
					<ToastProvider>
						<NavigationContainer>
							<AppStackNavigator />
						</NavigationContainer>
					</ToastProvider>
				</GluestackUIProvider>
			</SafeAreaProvider>
		);
	}
};

export default App;
