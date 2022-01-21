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
import { getQuizzes } from "../utils/database";
import AssesmentCard from "../components/cards/AssesmentCard";
import { useTheme } from "../theme/ThemeProvider";
interface Props{
	navigation:any
}
const Quiz:React.FC<Props> = ({ navigation }) => {
	const [allQuizzes, setAllQuizzes] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const { colors, isDark } = useTheme();

	

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
