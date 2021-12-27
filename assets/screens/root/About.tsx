import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/colors";
import * as React from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	FlatList,
	TouchableOpacity,
	View,
	NativeModules,
} from "react-native";
import AboutCard from "../../components/cards/AboutCard";
import Acknowledgements from "../../data/AcknowledgementsData";
import Others from "../../data/OthersData";

interface Props {}

const About: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
	const renderItem = ({ item }: { item: any }) => {
		return (
			<TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
						overflow: "hidden",
					}}
				>
					<View style={{ flexDirection: "column", marginTop: 5 }}>
						<View
							style={{ flexDirection: "row", marginLeft: 5, marginTop: 15 }}
						>
							<Feather
								name="user"
								size={24}
								color="black"
								style={{ marginTop: 7 }}
							/>
							<View style={{ flexDirection: "column", marginLeft: 15 }}>
								<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 18 }}>
									{item.person}
								</Text>
								<Text
									style={{
										fontFamily: "SFProDisplay-Medium",
										marginTop: 5,
										color: Colors.textLighterGray,
									}}
									numberOfLines={2}
									ellipsizeMode="tail"
								>
									{item.contrib}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	const renderOthersItem = ({ item }: { item: any }) => {
		return (
			<TouchableOpacity>
				<View
					style={{
						flexDirection: "row",
						overflow: "hidden",
					}}
				>
					<View style={{ flexDirection: "column", marginTop: 5 }}>
						<View
							style={{ flexDirection: "row", marginLeft: 5, marginTop: 15 }}
						>
							<Feather
								name="book"
								size={24}
								color="black"
								style={{ marginTop: 7 }}
							/>
							<View style={{ flexDirection: "column", marginLeft: 15 }}>
								<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 18 }}>
									{item.title}
								</Text>
								<Text
									style={{
										fontFamily: "SFProDisplay-Medium",
										marginTop: 5,
										color: Colors.textLighterGray,
									}}
									numberOfLines={2}
									ellipsizeMode="tail"
								>
									{item.desc}
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
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar style="auto" />
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
							<Text style={styles.textGreeting}>Acknowledgements &</Text>
							<Text style={styles.textName}>About</Text>
						</View>
						<View style={styles.searchBarWrapper}>
							{/* Content */}

							<AboutCard />
							<View
								style={{
									backgroundColor: "#f1f1f1",
									paddingVertical: 20,
									paddingHorizontal: 10,
									borderRadius: 15,
									marginTop: 10,
								}}
							>
								<Text
									style={{
										paddingHorizontal: 10,
										fontFamily: "SFProDisplay-Bold",
										fontSize: 20,
									}}
								>
									PAPI SMACK MY ASS
								</Text>
								<FlatList
									data={Acknowledgements}
									renderItem={renderItem}
									keyExtractor={(item) => item.id}
								/>
							</View>

							<View
								style={{
									backgroundColor: "#f1f1f1",
									paddingVertical: 20,
									paddingHorizontal: 10,
									borderRadius: 15,
									marginTop: 15,
								}}
							>
								<Text
									style={{
										paddingHorizontal: 10,
										fontFamily: "SFProDisplay-Bold",
										fontSize: 20,
									}}
								>
									HUMP ME FUCK ME
								</Text>
								<FlatList
									data={Others}
									renderItem={renderOthersItem}
									keyExtractor={(item) => item.id}
								/>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default About;

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

	aboutContent: {
		backgroundColor: "#F1F1F1",
		marginTop: 15,
		height: 100,
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: 11,
	},
});
