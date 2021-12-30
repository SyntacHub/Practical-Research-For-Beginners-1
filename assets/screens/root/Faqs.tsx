import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/colors";
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
import FaqCard from "../../components/cards/FaqCard";
import QACard from "../../components/cards/QACard";

interface Props {}

const Faqs: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar style="auto" />
				{/* Header */}
				<View
					style={{
						marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
						marginLeft: 25,
						marginRight: 25,
					}}
				>
					<View>
						<Feather
							name="menu"
							size={24}
							color="black"
							onPress={() => navigation.openDrawer()}
						/>
						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>Frequently Asked</Text>
							<Text style={styles.textName}>Questions</Text>
						</View>
						<View style={styles.searchBarWrapper}>
							{/* Content */}
							<FaqCard />
							
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Faqs;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	contentWrapper: {},
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textGreeting: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.textLight,
		fontSize: 24,
	},
	textName: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.text,
		fontSize: 36,
	},
	searchBarWrapper: {
		paddingTop: 15,
	},
});
