import React from "react";
import useCachedResources from "./assets/hooks/useCachedResources";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TransitionPresets } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./assets/screens/root/Home";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { ThemeProvider } from "./assets/theme/ThemeProvider";
import auth from "@react-native-firebase/auth";
import PlayQuizScreen from "./assets/screens/root/PlayQuizScreen";
import About from "./assets/screens/root/About";
import Quiz from "./assets/screens/root/Quiz";
import Lesson from "./assets/screens/root/Lesson";
import CustomDrawer from "./assets/components/Sidebar";
import Labtools from "./assets/screens/root/Labtools";
import LabtoolsDetail from "./assets/screens/root/LabtoolsDetail";
import Assistant from "./assets/screens/root/Assistant";
import { RootStackParamList } from "./types";
import { useTheme } from "./assets/theme/ThemeProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import WhatsNewModal from "./assets/components/modals/WhatsNewModal";


export default function App() {
	const isLoadingComplete = useCachedResources();
	const RootStack = createNativeStackNavigator<RootStackParamList>();

	const Drawer = createDrawerNavigator();
	const scheme = useColorScheme();
	const { colors, isDark } = useTheme();

	function Root() {
		return (
			<RootStack.Navigator
				initialRouteName="Root"
				screenOptions={() => {
					return {
						gestureEnabled: true,
						cardOverlayEnabled: true,
						...TransitionPresets.ModalPresentationIOS,
						

					};
				}}
				
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
				<RootStack.Screen
					name="Modal"
					options={{ headerShown: false, presentation: "modal" }}
					component={WhatsNewModal}
					
					
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
							
								drawerContent={(props) => <CustomDrawer {...props} />}
							>
								<Drawer.Screen
									name="Home"
									component={Root}
									options={{
										drawerIcon: () => (
											<Ionicons
												name="home"
												size={25}
												color={colors.primarygreen}
											/>
										),
									}}
								/>
								<Drawer.Screen
									name="About"
									component={About}
									options={{
										drawerIcon: () => (
											<Ionicons
												name="information"
												size={25}
												color={colors.primarypurple}
											/>
										),
									}}
								/>
							</Drawer.Navigator>
						</NavigationContainer>
					</SafeAreaProvider>
				</ThemeProvider>
			</AppearanceProvider>
		);
	}
}
