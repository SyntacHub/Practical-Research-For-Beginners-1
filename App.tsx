import React from "react";
import useCachedResources from "./assets/hooks/useCachedResources";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./assets/screens/root/Home";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import {ThemeProvider} from './assets/theme/ThemeProvider';
import auth from '@react-native-firebase/auth';
import PlayQuizScreen from "./assets/screens/root/PlayQuizScreen";
import About from "./assets/screens/root/About";
import Quiz from "./assets/screens/root/Quiz";
import Lesson from "./assets/screens/root/Lesson";
import Labtools from "./assets/screens/root/Labtools";
import LabtoolsDetail from "./assets/screens/root/LabtoolsDetail";
import Assistant from "./assets/screens/root/Assistant";
import { RootStackParamList } from "./types";


export default function App() {
	const isLoadingComplete = useCachedResources();
	const RootStack = createNativeStackNavigator<RootStackParamList>();
	const Drawer = createDrawerNavigator();
	const scheme = useColorScheme();

	function Root() {
		return (
			<RootStack.Navigator
				initialRouteName="Root"
			>
				
				<RootStack.Screen
					name="Root"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="Labtools"
					component={Labtools}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="LabtoolsDetail"
					component={LabtoolsDetail}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="Lesson"
					component={Lesson}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="Assistant"
					component={Assistant}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="Quiz"
					component={Quiz}
					options={{
						headerShown: false,
					}}
				/>
				<RootStack.Screen
					name="PlayQuiz"
					component={PlayQuizScreen}
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
			<AppearanceProvider>
				<ThemeProvider>
				<SafeAreaProvider>
				<NavigationContainer>
					<Drawer.Navigator
						initialRouteName="Root"
						screenOptions={{ headerShown: false }}
					>
						<Drawer.Screen name="Home" component={Root} />
						<Drawer.Screen name="About" component={About} />
					</Drawer.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
				</ThemeProvider>
				
			</AppearanceProvider>
		
		);
	}
}
