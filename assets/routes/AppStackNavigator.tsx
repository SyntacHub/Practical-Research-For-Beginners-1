import React from "react";
import * as Icon from "react-native-feather";
import {
  
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import {
	Home,
	Quiz,
	Tips,
	About,
	Lesson,
	Labtools,
	LabtoolsDetail,
	PlayQuizScreen,
	ComingSoonScreen,
} from "../screens";
import WhatsNewModal from "../components/modals/WhatsNewModal";
import { RootStackParamList } from "../../types";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/Sidebar";

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
			<Stack.Screen name="Labtools" component={Labtools} />
			<Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
			<Stack.Screen name="LabtoolsDetail" component={LabtoolsDetail} />
			<Stack.Screen name="Quiz" component={Quiz} />
			<Stack.Screen name="PlayQuiz" component={PlayQuizScreen} />
			<Stack.Screen
				name="Modal"
				component={WhatsNewModal}
				options={{ headerShown: false, presentation: "modal" }}
			/>
		</Stack.Navigator>
	);
}



export default AppStackNavigator;
