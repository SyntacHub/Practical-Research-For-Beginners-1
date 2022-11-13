import React from "react";
import {
  
	createStackNavigator,
} from "@react-navigation/stack";
import {
	Home,
	About,
	Lesson,
} from "../screens";
import { RootStackParamList } from "../../types";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function AppStackNavigator() {
	return (
		<Stack.Navigator
			initialRouteName="Root"
			screenOptions={() => {
				return {
					gestureEnabled: true,
					cardOverlayEnabled: true,
					headerShown: false,
				};
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
}



export default AppStackNavigator;
