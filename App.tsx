import { StatusBar } from "expo-status-bar";
import React from "react";
import useCachedResources from "./assets/hooks/useCachedResources";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./assets/screens/root/Home";
import Feedback from "./assets/screens/root/Feedback";
import Faqs from "./assets/screens/root/Faqs";
import About from "./assets/screens/root/About";
import Subtopics from "./assets/screens/root/Subtopics";
import IntroModal from "./assets/screens/Modal/IntroModal";
import Lesson from "./assets/screens/root/Lesson";
import { Modal, View } from "react-native";
import { RootStackParamList } from "./types";
import { Transition, Transitioning } from "react-native-reanimated";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const RootStack = createNativeStackNavigator<RootStackParamList>();
	const Drawer = createDrawerNavigator();
	const screenOptions = {
		headerShown: false,
	};

	function Root() {
		return (
			<RootStack.Navigator
				initialRouteName="Home"
				screenOptions={({ route }) => {
					return {
						gestureEnabled: true,
						cardOverlayEnabled: true,
						...TransitionPresets.ModalPresentationIOS,
					};
				}}
				mode="modal"
        headerMode="none"
			>
				<RootStack.Screen
					name="Root"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen name="Modal" component={IntroModal} />
				<RootStack.Screen
					name="Subtopics"
					component={Subtopics}
					options={{
						headerShown: false,
					}}
				/>
			</RootStack.Navigator>
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
						<Drawer.Screen name="FAQs" component={Faqs} />
						<Drawer.Screen name="About" component={About} />
					</Drawer.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		);
	}
}
