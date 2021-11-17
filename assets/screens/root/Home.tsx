import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
	Image,
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Colors from "../../constants/Colors";
import SearchBarInput from "../../components/inputs/SearchBarInput";
import HomeCard from "../../components/cards/HomeCard";
import researchTopics from "../../data/LessonsData";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

interface Props {}

const Home: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
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
				<View style={styles.menu}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View style={{ flexDirection: "row" }}>
							<Feather
								style={{ marginTop: 10 }}
								name="book"
								size={24}
								color="black"
							/>

							<View style={{ flexDirection: "column", marginLeft: 15 }}>
								<Text
									style={{
										fontFamily: "SFProDisplay-Bold",
										fontSize: 18,
										color: Colors.secondaryGreen,
									}}
								>
									{item.title}
								</Text>
								<Text
									style={{
										marginTop: 5,
										fontFamily: "SFProDisplay-Medium",
										fontSize: 15,
										color: Colors.text,
									}}
								>
									{item.topicDuration}
								</Text>
							</View>
						</View>

						<Feather
							name="arrow-right"
							size={24}
							color={Colors.secondaryGreen}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	console.log("HomeView Initialized");
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar style="auto" />
				{/* Header */}
				<View style={styles.contentWrapper}>
					<View>
						<Feather
							name="menu"
							size={24}
							color="black"
							onPress={() => navigation.openDrawer()}
						/>
						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>Good Morning</Text>
							<Text style={styles.textName}>Tristan Listanco</Text>
						</View>
						<View style={styles.searchBarWrapper}>
							<SearchBarInput />

							{/* Content */}
							<HomeCard />
							<Text style={styles.textQuarterlyLessons}>Quarterly Lessons</Text>
							<TouchableOpacity>
								<FlatList
									data={researchTopics}
									renderItem={renderItem}
									keyExtractor={(item) => item.id}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	contentWrapper: {
		marginTop: Platform.OS === "ios" ? 15 : 50,
		marginLeft: 25,
		marginRight: 25,
	},
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textGreeting: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.textLight,
		fontSize: 25,
	},
	textName: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.text,
		fontSize: 35,
	},
	searchBarWrapper: {
		paddingTop: 15,
	},

	textQuarterlyLessons: {
		fontFamily: "SFProDisplay-Bold",
		fontSize: 18,
		marginTop: 15,
	},
	menu: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: Colors.lightGreen,
		borderRadius: 11,
		marginVertical: 8,
	},
});
