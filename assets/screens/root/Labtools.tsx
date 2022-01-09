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
import LabToolsCard from "../../components/cards/LabtoolsCard";

import { useTheme } from "../../theme/ThemeProvider";
interface Props {
	route: any;
	props: any;
}

const Labtools: React.FC<{}> = () => {
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
						marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
						marginHorizontal:21
					}}
				>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<TouchableOpacity>
							<Feather
								name="arrow-left"
								size={24}
								style={{ color: colors.text }}
								onPress={() => navigation.goBack()}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.textGreetingWrapper}>
						<Text
							style={{
								fontFamily: "SFProDisplay-Medium",
								color: Colors.textLight,
								fontSize: 18,
							}}
						>
							Research Laboratory
						</Text>
						<Text
							style={{
								fontFamily: "SFProDisplay-Bold",
								color: colors.text,
								fontSize: 30,
							}}
						>
							Tools & Apparatus
						</Text>
					</View>

					{/*Content 1 */}
					<LabToolsCard/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Labtools;
const styles = StyleSheet.create({
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textTopicIndex: {},
});
