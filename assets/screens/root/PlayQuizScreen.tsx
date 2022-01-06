import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	FlatList,
	Image,
	TouchableOpacity,
	Platform,
	NativeModules,
	Alert,
} from "react-native";
import Colors from "../../constants/colors";
import { getQuestionsByQuizId, getQuizById } from "../../utils/database";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FormButton from "../../components/buttons/FormButton";
import ResultModal from "../../components/modals/ResultModal";
import { useTheme } from "../../theme/ThemeProvider";
import { color } from "react-native-reanimated";

const PlayQuizScreen = ({ navigation, route }) => {
	const [currentQuizId, setCurrentQuizId] = useState(route.params.quizId);
	const [title, setTitle] = useState("");
	const [questions, setQuestions] = useState([]);
	const [attempted, setAttempted] = useState([]);
	const { colors, isDark } = useTheme();

	const [correctCount, setCorrectCount] = useState(0);
	const [incorrectCount, setIncorrectCount] = useState(0);
	const [isResultModalVisible, setIsResultModalVisible] = useState(false);

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			// Generate random number
			let j = Math.floor(Math.random() * (i + 1));

			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	};

	const getQuizAndQuestionDetails = async () => {
		// Get Quiz
		let currentQuiz = await getQuizById(currentQuizId);
		currentQuiz = currentQuiz.data();
		setTitle(currentQuiz.title);

		// Get Questions for current quiz
		const questions = await getQuestionsByQuizId(currentQuizId);

		// Transform and shuffle options
		let tempQuestions = [];
		await questions.docs.forEach(async (res) => {
			let question = res.data();

			// Create Single array of all options and shuffle it

			question.allOptions = shuffleArray([
				...question.incorrect_answers,
				question.correct_answer,
			]);
			await tempQuestions.push(question);
		});

		setQuestions([...tempQuestions]);
	};

	useEffect(() => {
		getQuizAndQuestionDetails();
	}, []);

	const getOptionBgColor = (currentQuestion: any, currentOption: any) => {
		if (currentQuestion.selectedOption) {
			if (currentOption == currentQuestion.selectedOption) {
				if (currentOption == currentQuestion.correct_answer) {
					return Colors.success;
				} else {
					return Colors.error;
				}
			} else {
				return Colors.white;
			}
		} else {
			return Colors.white;
		}
	};

	const getOptionTextColor = (currentQuestion, currentOption) => {
		if (currentQuestion.selectedOption) {
			if (currentOption == currentQuestion.selectedOption) {
				return Colors.white;
			} else {
				return Colors.black;
			}
		} else {
			return Colors.black;
		}
	};

	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
	const exitPrompt = () =>
		Alert.alert(
			"Confirmation",
			"Do you want to exit the current exam? You will loose 1 Attempt ",
			[
				{
					text: "No",
					onPress: () => console.log("Cancel Pressed"),
					style: "cancel",
				},
				{ text: "Yes", onPress: () => navigation.goBack() },
			]
		);

	return (
		<SafeAreaView
			style={{
				flex: 1,
				position: "relative",
        backgroundColor:colors.background
			}}
		>
			<StatusBar backgroundColor={Colors.white} barStyle={"dark-content"} />
			{/* Top Bar */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					marginLeft: 25,
					marginRight: 25,
          marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
				
					elevation: 4,
				}}
			>
				{/* Back Icon */}
				<MaterialIcons name="arrow-back" size={24} style={{color:colors.text}} onPress={exitPrompt} />

				{/* Correct and incorrect count */}
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{/* Correct */}
					<View
						style={{
							backgroundColor: Colors.success,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							paddingHorizontal: 10,
							paddingVertical: 4,
							borderTopLeftRadius: 10,
							borderBottomLeftRadius: 10,
						}}
					>
						<MaterialIcons
							name="check"
							size={14}
							style={{ color: Colors.white }}
						/>
						<Text
							style={{
								color: Colors.white,
								marginLeft: 6,
								fontFamily: "SFProDisplay-Medium",
							}}
						>
							{correctCount}
						</Text>
					</View>

					{/* Incorrect */}
					<View
						style={{
							backgroundColor: Colors.error,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							paddingHorizontal: 10,
							paddingVertical: 4,
							borderTopRightRadius: 10,
							borderBottomRightRadius: 10,
						}}
					>
						<MaterialIcons
							name="close"
							size={14}
							style={{ color: Colors.white }}
						/>
						<Text
							style={{
								color: Colors.white,
								marginLeft: 6,
								fontFamily: "SFProDisplay-Medium",
							}}
						>
							{incorrectCount}
						</Text>
					</View>
				</View>
			</View>

			{/* Header */}
      <View style={{marginHorizontal:25,marginTop:20,marginBottom:15}}>
      <Text
				style={{
					fontSize: 30,
					fontFamily: "SFProDisplay-Bold",
					color:colors.text
          
				}}
			>
				{title}
			</Text>
			<Text
				style={{
					fontFamily: "SFProDisplay-Medium",
					color: Colors.textLight,
					fontSize: 18,
				}}
			>
				Remaining Attempts : 2 Remaining
			</Text>
      </View>
			

			{/* Questions and Options list */}
			<FlatList
				data={questions}
				style={{
					flex: 1,
					marginLeft: 25,
					marginRight: 25,
				}}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.question}
				renderItem={({ item, index }) => (
					<View
						style={{
							marginTop: 14,
							marginHorizontal: 10,
							backgroundColor: colors.elevated,
							elevation: 2,
							borderRadius: 20,
						}}
					>
						<View style={{ padding: 20 }}>
							<Text style={{ fontSize: 16, fontFamily: "SFProDisplay-Bold",color:colors.text }}>
								{index + 1}. {item.question}
							</Text>
							{item.imageUrl != "" ? (
								<Image
									source={{
										uri: item.imageUrl,
									}}
									resizeMode={"contain"}
									style={{
										width: "80%",
										height: 150,
										marginTop: 20,
										marginLeft: "10%",
										borderRadius: 1,
									}}
								/>
							) : null}
						</View>
						{/* Options */}
						{item.allOptions.map((option, optionIndex) => {
							return (
								<TouchableOpacity
									key={optionIndex}
									style={{
										paddingVertical: 14,
										paddingHorizontal: 20,
										borderTopWidth: 1,
										borderColor: Colors.border,
										backgroundColor: getOptionBgColor(item, option),
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "flex-start",
									}}
									onPress={() => {
										if (item.selectedOption) {
											return null;
										}
										// Increase correct/incorrect count
										if (option == item.correct_answer) {
											setCorrectCount(correctCount + 1);
										} else {
											setIncorrectCount(incorrectCount + 1);
										}

										let tempQuestions = [...questions];
										tempQuestions[index].selectedOption = option;
										setQuestions([...tempQuestions]);
									}}
								>
									<Text
										style={{
											width: 25,
											height: 25,
											padding: 2,
											borderWidth: 1,
											borderColor: Colors.border,
											textAlign: "center",
											marginRight: 16,
											borderRadius: 25,
											color: getOptionTextColor(item, option),
											fontFamily: "SFProDisplay-Medium",
										}}
									>
										{optionIndex + 1}
									</Text>
									<Text
										style={{
											color: getOptionTextColor(item, option),
											fontFamily: "SFProDisplay-Medium",
										}}
									>
										{option}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				)}
				ListFooterComponent={() => (
					<FormButton
						labelText="Submit"
						style={{ margin: 10 }}
						handleOnPress={() => {
							// Show Result modal
							setIsResultModalVisible(true);
						}}
					/>
				)}
			/>

			{/* Result Modal */}
			<ResultModal
				isModalVisible={isResultModalVisible}
				correctCount={correctCount}
				incorrectCount={incorrectCount}
				totalCount={questions.length}
				handleOnClose={() => {
					setIsResultModalVisible(false);
				}}
				handleRetry={() => {
					setCorrectCount(0);
					setIncorrectCount(0);
					getQuizAndQuestionDetails();
					setIsResultModalVisible(false);
				}}
				handleHome={() => {
					navigation.goBack();
					setIsResultModalVisible(false);
				}}
			/>
		</SafeAreaView>
	);
};

export default PlayQuizScreen;
