import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
	NativeModules,
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Colors from "../../constants/Colors";
import FeedbackCard from "../../components/cards/FeedbackCard";
import * as Linking from 'expo-linking';

interface Props {}

const Feedback: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar style="auto" />
				{/* Header */}
				<View style={{marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
		marginLeft: 25,
		marginRight: 25,}}>
					<View>
						<Feather
							name="menu"
							size={24}
							color="black"
							onPress={() => navigation.openDrawer()}
						/>
						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>Reporting a</Text>
							<Text style={styles.textName}>Feedback</Text>
						</View>

						{/* Content */}
						<FeedbackCard />
						<Text style={styles.feedbackdesc}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Obcaecati, blanditiis! Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Dolorum, saepe!
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);

	
};

export default Feedback;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	contentWrapper: {
		
	},
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textGreeting: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.textLight,
		fontSize: 30,
	},
	textName: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.text,
		fontSize: 40,
	},

	textQuarterlyLessons: {
		fontFamily: "SFProDisplay-Bold",
		fontSize: 18,
		marginTop: 15,
	},
	feedbackdesc: {
		marginTop: 10,
		fontFamily: "SFProDisplay-Medium",
		fontSize: 15,
		paddingHorizontal: 10,
		lineHeight: 20,
	},
});
