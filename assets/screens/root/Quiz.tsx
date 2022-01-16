import React, {
	useState,
	useEffect,
	useCallback,
	useMemo,
	useRef,
} from "react";
import {
	View,
	Text,
	SafeAreaView,
	StatusBar,
	FlatList,
	Modal,
	Alert,
	TouchableOpacity,
	ScrollView,
	Platform,
	Image,
	NativeModules,
	StyleSheet,
} from "react-native";
import BottomSheet, {
	BottomSheetModal,
	BottomSheetBackdrop,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import TouchID from 'react-native-touch-id';
import Animated, {
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { getQuizzes } from "../../utils/database";
import AssesmentCard from "../../components/cards/AssesmentCard";
import { useTheme } from "../../theme/ThemeProvider";

const Quiz = ({ navigation }) => {
	const [allQuizzes, setAllQuizzes] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [isResultModalVisible, setIsResultModalVisible] = useState(false);
	const { colors, isDark } = useTheme();

	// ref
	const bottomSheetRef = useRef<BottomSheetModal>(null);

	// variables
	const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

	// callbacks
	const handlePresentModalPress = useCallback(() => {
		bottomSheetRef.current?.present();
	}, []);
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);
	// renders
	const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={1}
				appearsOnIndex={2}
			/>
		),
		[]
	);

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

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: colors.background,
			}}
		>
			<StatusBar
				animated
				barStyle={isDark ? "light-content" : "dark-content"}
			/>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
				style={{ marginLeft: 25, marginRight: 25 }}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 15,
					}}
				>
					<TouchableOpacity>
						<Feather
							name="arrow-left"
							size={24}
							style={{ color: colors.text }}
							onPress={() => navigation.goBack()}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Feather
							name="info"
							size={24}
							style={{ color: colors.text }}
							// Show Result modal
							onPress={handlePresentModalPress}
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.textGreetingWrapper}>
					<Text
						style={{
							fontFamily: "SFProDisplay-Bold",
							color: colors.text,
							fontSize: 30,
						}}
					>
						Research Assesments{" "}
					</Text>
					<Text
						style={{
							fontFamily: "SFProDisplay-Medium",
							fontSize: 18,
							color: colors.text,
						}}
					>
						Updated on December 23, 2021
					</Text>
				</View>
				<AssesmentCard />
				<Text
					style={{
						fontFamily: "SFProDisplay-Bold",
						fontSize: 18,
						marginTop: 15,
						color: colors.text,
					}}
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
								backgroundColor: colors.elevated,
								elevation: 2,
							}}
						>
							<View style={{ flex: 1, paddingRight: 10 }}>
								<Text
									style={{
										fontSize: 18,
										color: colors.text,
										fontFamily: "SFProDisplay-Bold",
									}}
								>
									{quiz.title}
								</Text>
								{quiz.description != "" ? (
									<Text
										style={{
											opacity: 0.8,
											marginTop: 5,
											fontFamily: "SFProDisplay-Medium",
											color: colors.heading5,
										}}
									>
										{quiz.description}
									</Text>
								) : null}
							</View>
							<TouchableOpacity
								style={{
									paddingVertical: 10,
									paddingHorizontal: 30,
									borderRadius: 50,
									backgroundColor: colors.primarygreen + "20",
								}}
								onPress={() => {
									navigation.navigate("PlayQuiz", {
										quizId: quiz.id,
									});
								}}
							>
								<Text
									style={{
										color: colors.primarygreen,
										fontFamily: "SFProDisplay-Black",
									}}
								>
									Play
								</Text>
							</TouchableOpacity>
						</View>
					)}
				/>
			</ScrollView>
			<BottomSheetModalProvider>
				<View style={{ backgroundColor: colors.elevated }}>
					<BottomSheetModal
						ref={bottomSheetRef}
						index={1}
						backdropComponent={renderBackdrop}
						snapPoints={snapPoints}
						onChange={handleSheetChanges}
					>
						<View
							style={{
								flex: 1,
								alignItems: "center",
								marginLeft: 25,
								marginRight: 25,
								backgroundColor: colors.elevated,
							}}
						>
							<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 20,color:colors.text}}>
								Research Assesments 🎉
							</Text>
							<Text style={{ fontFamily: "SFProDisplay-Medium",color:colors.text }}>
								Version 1.0.0
							</Text>
							<Image
								source={require("../../images/ic_school.png")}
								style={{ resizeMode: "contain", width: "60%" }}
							/>
							<Text style={{ fontFamily: "SFProDisplay-Medium",color:colors.text }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Repudiandae illo rerum eaque cum possimus excepturi dolore alias
								dolorum commodi nesciunt delectus neque doloremque dolores,
								vitae quas et quam quibusdam ut facilis assumenda quia. Odio,
								amet?
							</Text>
						</View>
					</BottomSheetModal>
				</View>
			</BottomSheetModalProvider>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({

	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	
	modalContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		backgroundColor: "grey",
	},
});

export default Quiz;
