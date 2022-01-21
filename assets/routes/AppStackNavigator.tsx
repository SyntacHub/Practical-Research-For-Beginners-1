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
} from "../screens";
import WhatsNewModal from "../components/modals/WhatsNewModal";
import { RootStackParamList } from "../../types";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/Sidebar";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function Root() {
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
			<Stack.Screen name="Labtools" component={Labtools} />
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

const AppStackNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Root"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
		
		>
			<Drawer.Screen
				name="Home"
				component={Root}
        options={{
         
        }}
				
			/>

			<Drawer.Screen
				name="Tips"
				component={Tips}
				
			/>

			<Drawer.Screen
				name="About"
				component={About}
				
			/>
		</Drawer.Navigator>
	);
};

export default AppStackNavigator;
