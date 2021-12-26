import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	FlatList,
	TouchableOpacity,
	Platform,
	NativeModules,
	Alert,
	StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { getQuizzes } from "../../utils/database";
import AssesmentCard from "../../components/cards/AssesmentCard";

const Quiz = ({ navigation }) => {
	const [allQuizzes, setAllQuizzes] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	const getAllQuizzes = async () => {
		setRefreshing(true);
		const quizzes = await getQuizzes();

		// Transform quiz data
		let tempQuizzes = [];
		await quizzes.docs.forEach(async (quiz) => {
			await tempQuizzes.push({ id: quiz.id, ...quiz.data() });
		});
		await setAllQuizzes([...tempQuizzes]);

		setRefreshing(false);
	};

	useEffect(() => {
		getAllQuizzes();
	}, []);
	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

	const exitPrompt = () =>
		Alert.alert(
			"Confirmation",
			"Do you want to exit the exam? Your Progress will not be saved",
			[
				{
					text: "Cancel",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{ text: "OK", onPress: () => navigation.goBack() },
			]
		);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
				marginLeft: 25,
				marginRight: 25,
			}}
		>
			<StatusBar
				backgroundColor={Colors.background}
				barStyle={"dark-content"}
				hidden={false}
			/>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<TouchableOpacity>
					<Feather
						name="arrow-left"
						size={24}
						color="black"
						onPress={() => navigation.goBack()}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Feather name="rotate-cw" size={24} color="black" />
				</TouchableOpacity>
			</View>

			<View style={styles.textGreetingWrapper}>
				<Text style={styles.textTitle}>Research Assesments </Text>
				<Text style={styles.textTopicIndex}>Updated on December 23, 2021</Text>
			</View>
			<AssesmentCard />
			<Text
				style={{ fontFamily: "SFProDisplay-Bold", fontSize: 18, marginTop: 15 }}
			>
				All Research Assesments
			</Text>

			{/* Quiz list */}
			<FlatList
				data={allQuizzes}
				onRefresh={getAllQuizzes}
				refreshing={refreshing}
				showsVerticalScrollIndicator={false}
				style={{
					paddingVertical: 10,
				}}
				renderItem={({ item: quiz }) => (
					<View
						style={{
							padding: 20,
							borderRadius: 5,
							marginVertical: 5,
							
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							backgroundColor: Colors.white,
							elevation: 2,
						}}
					>
						<View style={{ flex: 1, paddingRight: 10 }}>
							<Text style={{ fontSize: 18, color: Colors.black ,fontFamily:"SFProDisplay-Bold" }}>
								{quiz.title}
							</Text>
							{quiz.description != "" ? (
								<Text style={{ opacity: 0.5,fontFamily:"SFProDisplay-Medium"}}>{quiz.description}</Text>
							) : null}
						</View>
						<TouchableOpacity
							style={{
								paddingVertical: 10,
								paddingHorizontal: 30,
								borderRadius: 50,
								backgroundColor: Colors.primary + "20",
							}}
							onPress={() => {
								navigation.navigate("PlayQuiz", {
									quizId: quiz.id,
								});
							}}
						>
							<Text style={{ color: Colors.primary , fontFamily:"SFProDisplay-Black" }}>Play</Text>
						</TouchableOpacity>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
});

export default Quiz;
