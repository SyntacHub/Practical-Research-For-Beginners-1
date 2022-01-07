import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React,{useState} from "react";
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
import { useTheme } from "../../theme/ThemeProvider";
import { Switch } from "../../components/buttons/ThemeSwitch";

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
						paddingVertical: 16,
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
						<View style={{ flexDirection: "row" }}>
							<View style={{backgroundColor:colors.primarygreen+"20",borderRadius:10,paddingHorizontal:10,marginVertical:7}}>
							<Feather
								style={{ marginTop:12,color:colors.primarygreen,alignItems:'center' }}
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
						marginLeft: 25,
						marginRight: 25,
						marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
					}}
				>
					<View>
						<View style={{flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",}}>
						<Feather
							name="menu"
							size={24}
							style={{ color: colors.text }}
							onPress={() => navigation.openDrawer()}
						/>
						<Switch/>
						</View>
						
						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>Good Morning</Text>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: colors.text,
									fontSize: 35,
								}}
							>
								Tristan Listanco
							</Text>
						</View>
						<View style={styles.searchBarWrapper}>
							{/* Content */}

							<HomeCard />

							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									fontSize: 18,
									marginTop: 15,
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
		fontSize: 25,
	},
	textName: {},
	searchBarWrapper: {
		paddingTop: 15,
	},

	textQuarterlyLessons: {},
	menu: {},
});
