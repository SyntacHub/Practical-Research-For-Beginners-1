import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";

import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetModal,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	StatusBar,
	Text,
	Image,
	FlatList,
	View,
	TouchableOpacity,
	NativeModules,
} from "react-native";
import researchTopics from "../../data/LessonsData";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {
	route: any;
	props: any;
}

const Lesson: React.FC<Props> = ({ route }) => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	const { item } = route.params;
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	// variables
	const snapPoints = useMemo(() => ["20%", "40%", "60%"], []);
	const sheetRef = useRef<BottomSheet>(null);

	//render
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
	const renderItem = ({ item }: { item: any }) => {
		return (
			<View style={styles.modalmenu}>
				<Text>{item.source}</Text>
			</View>
		);
	};

	// callbacks
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	console.log(item);

	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
	return (
		<SafeAreaView>
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
						marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
						marginLeft: 25,
						marginRight: 25,
					}}
				>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
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
							<Feather name="book" size={24} style={{color:colors.text}} />
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
							{item.title}
						</Text>
						<Text style={styles.textTopicIndex}>{item.topicIndex}</Text>
					</View>
				</View>

				{/*Content*/}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: colors.primaryteal,
						marginHorizontal: 20,
						marginVertical: 20,
						borderRadius: 15,
					}}
				>
					<Image
						source={item.topicImage}
						style={{ resizeMode: "contain", width: "75%" }}
					/>
				</View>

				{/*Content 2*/}

				<Text
					style={{
						marginTop: 15,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Bold",
						fontSize: 20,
						color: colors.text,
					}}
				>
					Sample Text
				</Text>
				<Text
					style={{
						marginTop: 10,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Regular",
						fontSize: 15,
						color: colors.text,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				<Text
					style={{
						marginTop: 15,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Bold",
						fontSize: 20,
						color: colors.text,
					}}
				>
					Sample Text
				</Text>
				<Text
					style={{
						marginTop: 10,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Regular",
						fontSize: 15,
						color: colors.text,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				<Text
					style={{
						marginTop: 15,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Bold",
						fontSize: 20,
						color: colors.text,
					}}
				>
					Sample Text
				</Text>
				<Text
					style={{
						marginTop: 10,
						paddingHorizontal: 20,
						fontFamily: "SFProDisplay-Regular",
						fontSize: 15,
						color: colors.text,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				{/* Modal */}
				<BottomSheetModalProvider>
					<View >
						<BottomSheetModal
							ref={bottomSheetModalRef}
							index={1}
							backdropComponent={renderBackdrop}
							snapPoints={snapPoints}
							onChange={handleSheetChanges}
						>
							<View style={styles.bottomSheetContainer}>
								<View style={{ flexDirection: "column", marginTop: 10 }}>
									<Text
										style={{ fontFamily: "SFProDisplay-Bold", fontSize: 35 }}
									>
										References
									</Text>
									<FlatList
										data={researchTopics}
										renderItem={renderItem}
										keyExtractor={(item) => item.id}
									/>
								</View>
							</View>
						</BottomSheetModal>
					</View>
				</BottomSheetModalProvider>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Lesson;

const styles = StyleSheet.create({
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textTopicIndex: {
		fontFamily: "SFProDisplay-Medium",
		color: Colors.textLight,
		fontSize: 18,
	},
	topicImage: {
		alignSelf: "center",
	},
	
	title: {
		fontFamily: "SFProDisplay-Bold",
		fontSize: 26,
		marginBottom: 16,
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
});
