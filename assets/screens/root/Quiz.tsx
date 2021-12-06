import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import researchTopics from "../../data/LessonsData";
import Colors from "../../constants/Colors";

import {
	Platform,
	SafeAreaView,
	Alert,
	RefreshControl,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	FlatList,
	View,
	TouchableOpacity,
} from "react-native";

interface Props {
	route: any;
}

const Quiz: React.FC<Props> = ({ route }) => {
	const wait = (timeout: any) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};

	const navigation = useNavigation<any>();
	const [refreshing, setRefreshing] = React.useState(false);
	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		wait(1400).then(() => setRefreshing(false));
	}, []);
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
										fontSize: 22,
										color: Colors.secondaryGreen,
									}}
								>
									{item.title}
								</Text>
								<Text
									style={{
										marginTop: 5,
										fontFamily: "SFProDisplay-Medium",
										fontSize: 14,
										color: Colors.text,
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

	return (
		<SafeAreaView style={styles.contentWrapper}>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 10,
						}}
					>
						<TouchableOpacity>
							<Feather
								name="arrow-left"
								size={24}
								color="black"
								onPress={() => navigation.goBack()}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<Feather name="info" size={25} color="black" onPress={()=> Alert.alert("Hump me fuck me daddy better make me chokee")}
							 />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.textGreetingWrapper}>
					<Text style={styles.textTitle}>Research Quizzes</Text>
					<Text style={styles.textTopicIndex}>Updated Recently</Text>
				</View>

				<View style={{marginTop:40}}>
					<TouchableOpacity>
						<FlatList
							data={researchTopics}
							renderItem={renderItem}
							keyExtractor={(item) => item.id}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Quiz;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	contentWrapper: {
		marginTop: Platform.OS === "ios" ? 15 : 50,
		marginLeft: 25,
		marginRight: 25,
	},
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textTopicIndex: {
		fontFamily: "SFProDisplay-Medium",
		color: Colors.textLight,
		fontSize: 18,
	},
	textTitle: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.text,
		fontSize: 30,
	},
	topicImage: {
		alignSelf: "center",
	},
	header: {
		marginTop: 15,
		paddingHorizontal: 20,
		fontFamily: "SFProDisplay-Bold",
		fontSize: 20,
	},
	body: {
		marginTop: 10,
		paddingHorizontal: 20,
		fontFamily: "SFProDisplay-Regular",
		fontSize: 15,
	},

	customModal: {
		backgroundColor: "white",
		borderRadius: 15,
	},
	bottomSheetContainer: {
		flex: 1,
		width: "100%",
		alignItems: "flex-start",
		paddingHorizontal: 20,
	},
	modalmenu: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: Colors.lightGreen,
		borderRadius: 11,
		marginVertical: 8,
		alignSelf: "stretch",
	},
	menu: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: Colors.lightGreen,
		borderRadius: 11,
		marginVertical: 8,
	},
	textQuarterlyLessons: {
		fontFamily: "SFProDisplay-Bold",
		fontSize: 18,
		marginTop: 15,
	},
});
