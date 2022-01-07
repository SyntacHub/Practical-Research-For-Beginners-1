import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
	NativeModules,
	Platform,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Colors from "../../constants/colors";
import FeedbackCard from "../../components/cards/FeedbackCard";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {}

const Feedback: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar
					animated
					barStyle={isDark ? "light-content" : "dark-content"}
				/>
				{/* Header */}
				<View
					style={{
						marginTop:15,
						marginLeft: 25,
						marginRight: 25,
					}}
				>
					<View>
						<Feather
							name="menu"
							size={24}
							style={{color:colors.text}}
							onPress={() => navigation.openDrawer()}
						/>
						<View style={styles.textGreetingWrapper}>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: Colors.textLight,
									fontSize: 30,
								}}
							>
								Reporting a
							</Text>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: colors.text,
									fontSize: 40,
								}}
							>
								Feedback
							</Text>
						</View>

						{/* Content */}
						<FeedbackCard />
						<Text style={{marginTop: 10,
		fontFamily: "SFProDisplay-Medium",
		fontSize: 15,
		paddingHorizontal: 10,
		lineHeight: 20,
		color:colors.heading5}}>
							Your Feedback means important to our apps and to our other users.
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Feedback;

const styles = StyleSheet.create({
	container: {},
	contentWrapper: {},
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textGreeting: {},
	textName: {},

	textQuarterlyLessons: {
		fontFamily: "SFProDisplay-Bold",
		fontSize: 18,
		marginTop: 15,
	},
	feedbackdesc: {
		
	},
});
