import React from "react";
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

const Stack = createStackNavigator<RootStackParamList>();



const AppStackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="Root"
			screenOptions={() => {
				return {
					gestureEnabled: true,
					cardOverlayEnabled: true,
          headerShown:false
				};
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Lesson" component={Lesson} />
			<Stack.Screen name="Labtools" component={Labtools} />
			<Stack.Screen name="LabtoolsDetail" component={LabtoolsDetail} />
			<Stack.Screen name="Quiz" component={Quiz} />
			<Stack.Screen name="PlayQuiz" component={PlayQuizScreen} />
			<Stack.Screen name="Modal" component={WhatsNewModal} options={{ headerShown: false, presentation: "modal" }}  />
		
		</Stack.Navigator>
	);
};

export default AppStackNavigator;
