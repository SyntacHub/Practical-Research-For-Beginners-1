import { Feather} from "@expo/vector-icons";
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


const Home: React.FC<{}> = () => {
	const navigation = useNavigation<any>();
	const [refreshing, setRefreshing] = useState(false);
	const { colors, isDark } = useTheme();
	const renderItem = ({ item }: { item: any }) => {
		return (
			<TouchableOpacity
				key={item.id}
				onPress={() =>
					navigation.navigate("Lesson", {
						item: item,
					})
				}
			>
				<View
					style={{
						flex: 1,
						paddingHorizontal: 20,
						paddingVertical: 15,
						justifyContent:'center',
						backgroundColor: colors.elevated,
						borderRadius: 11,
						marginVertical: 8,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View style={{ flexDirection: "row",justifyContent:'center' }}>
							<View
								style={{
									backgroundColor: colors.primarygreen + "20",
									borderRadius: 10,
									paddingHorizontal: 10,
									justifyContent: "center",
									alignItems: "center",
									marginVertical: 7,
								}}
							>
								<Feather
									style={{
										color: colors.primarygreen,
									}}
									name="book"
									size={24}
								/>
							</View>

							<View style={{ flexDirection: "column", marginLeft: 15 }}>
								<Text
									style={{
										fontFamily: "SFProDisplay-Bold",
										fontSize: 20,
										color: colors.text,
									}}
								>
									{item.title}
								</Text>
								<Text
									style={{
										marginTop: 5,
										fontFamily: "SFProDisplay-Medium",
										fontSize: 13,
										color: colors.heading5,
										marginRight: 20,
									}}
								>
									{item.courseDesc}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

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
							<Text style={styles.textGreeting}>Practical Research Grade 7</Text>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: colors.text,
									fontSize: 35,
								}}
							>
								Lesson Dashboard
							</Text>
						</View>
						<View style={styles.searchBarWrapper}>
							{/* Content */}

							<HomeCard />
							<View
								style={{
									flexWrap:'nowrap',
									height: 180,
									flex:1,
									paddingHorizontal: 15,
									justifyContent: "center",
									flexDirection: "row",
									
								}}
							>
								<ResearchAssistantCard />
								<LabtoolsCard />
							</View>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									fontSize: 18,
									marginTop: 30,
									color: colors.text,
								}}
							>
								All Research 1 Lessons
							</Text>

							<FlatList
								data={researchTopics}
								renderItem={renderItem}
								refreshing={refreshing}
								keyExtractor={(item) => item.id}
							/>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textGreeting: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.textLight,
		fontSize: 23,
	},
	searchBarWrapper: {
		paddingTop: 15,
	},


});
