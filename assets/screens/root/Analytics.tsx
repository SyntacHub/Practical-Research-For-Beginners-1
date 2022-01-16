import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	VictoryBar,
	VictoryChart,
	VictoryTheme,
	VictoryLine,
} from "victory-native";
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
	Dimensions,
} from "react-native";
import Colors from "../../constants/colors";

import HomeCard from "../../components/cards/HomeCard";
import researchTopics from "../../data/LessonsData";
import ResearchAssistantCard from "../../components/cards/AssistantCardMenu";
import LabtoolsCard from "../../components/cards/LabtoolsCardMenu";
import { useTheme } from "../../theme/ThemeProvider";

const Analytics: React.FC<{}> = () => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	const screenWidth = Dimensions.get("window").width;
	const data = [
		{ quarter: 1, earnings: 13000 },
		{ quarter: 2, earnings: 16500 },
		{ quarter: 3, earnings: 14250 },
		{ quarter: 4, earnings: 19000 },
	];

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
							<Text style={styles.textGreeting}>Tristan Listanco's</Text>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: colors.text,
									fontSize: 35,
								}}
							>
								Stats & Analytics
							</Text>
							{/*Content*/}
							<View
								style={{
									backgroundColor: colors.accentgreen,
									paddingHorizontal: 10,
								}}
							>
								<VictoryChart
									width={350}
									theme={VictoryTheme.material}
									animate={{
										duration: 2000,
                    onLoad: { duration: 1000 },
									}}
									height={250}
								>
									<VictoryBar data={data} x="quarter" y="earnings" />
								</VictoryChart>
                </View>


                <View style={{width:screenWidth/2 , backgroundColor:'red'}}>
                <VictoryChart theme={VictoryTheme.material}>
									<VictoryLine
										style={{
											data: { stroke: "#c43a31" },
											parent: { border: "1px solid #ccc" },
										}}
										data={[
											{ x: 1, y: 2 },
											{ x: 2, y: 3 },
											{ x: 3, y: 5 },
											{ x: 4, y: 4 },
											{ x: 5, y: 7 },
										]}
                    animate={{
                      duration: 2000,
                      onLoad: { duration: 1000 },
                    }}
                    interpolation="natural"
                    
                    
									/>
								</VictoryChart>
                </View>
								
							
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Analytics;
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
		paddingHorizontal: 100,
	},
});
