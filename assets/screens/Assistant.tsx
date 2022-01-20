import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	NativeModules,
} from "react-native";
import Colors from "../constants/colors";
import { useTheme } from "../theme/ThemeProvider";

const Assistant: React.FC<{}> = () => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
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
								name="arrow-left"
								size={24}
								style={{ color: colors.text }}
								onPress={() => navigation.goBack()}
							/>
						</View>

						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>Research Assistant </Text>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: colors.text,
									fontSize: 35,
								}}
							>
								
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Assistant;

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
