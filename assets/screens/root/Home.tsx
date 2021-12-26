import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
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
import Colors from "../../constants/Colors";
import HomeCard from "../../components/cards/HomeCard";
import researchTopics from "../../data/LessonsData";


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
										marginRight:20,
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
	const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;


	return (
		<SafeAreaView style={styles.container} >
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
				style={{backgroundColor: Colors.background}}
			>
				 <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
				{/* Header */}
				<View style={{marginLeft: 25, marginRight: 25,marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT}}>
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
