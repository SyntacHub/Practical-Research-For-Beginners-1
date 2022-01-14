import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	FlatList,
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	Text,
	View,
	NativeModules,
} from "react-native";
import Colors from "../../constants/colors";

import HomeCard from "../../components/cards/HomeCard";
import researchTopics from "../../data/LessonsData";
import ResearchAssistantCard from "../../components/cards/AssistantCardMenu";
import LabtoolsCard from "../../components/cards/LabtoolsCardMenu";
import { useTheme } from "../../theme/ThemeProvider";

const Tips: React.FC<{}> = () => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
	return (
		<SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
				style={{ backgroundColor: colors.background }}
			>
				<StatusBar
					animated
					barStyle={isDark ? "light-content" : "dark-content"}
				/>
				{/* Header */}
				<View
					style={{
						paddingHorizontal: 21,
						marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
					}}
				>
					<View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Feather
								name="menu"
								size={24}
								style={{ color: colors.text }}
								onPress={() => navigation.openDrawer()}
							/>
						</View>

						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>Practical Research 7</Text>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: colors.text,
									fontSize: 35,
								}}
							>
								Research Tips 
							</Text>
              {/*Content*/}
              
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Tips;
const styles = StyleSheet.create({
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textGreeting: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.textLight,
		fontSize: 25,
	},
	searchBarWrapper: {
		paddingTop: 15,
	},
});
