import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";

import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet,{
	BottomSheetBackdrop,
	BottomSheetModal,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	FlatList,
	View,
	TouchableOpacity,
	
} from "react-native";
import researchTopics from "../../data/LessonsData";


interface Props {
	route: any;
	props: any;
}

const Lesson: React.FC<Props> = ({ route }) => {
	const navigation = useNavigation<any>();
	const { item } = route.params;
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
	

	// variables
	const snapPoints = useMemo(() => ["20%","40%", "60%"], []);
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
	const renderItem = ({item}:{item:any}) => {
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
	console.log("Lesson Initialized");
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				{/* Header */}
				<View style={styles.contentWrapper}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
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
							<Feather
								name="book"
								size={24}
								color="black"
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.textGreetingWrapper}>
						<Text style={styles.textTitle}>{item.title} </Text>
						<Text style={styles.textTopicIndex}>{item.topicIndex}</Text>
					</View>
				</View>

				{/*Content*/}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: Colors.lightGreen,
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
				<TouchableOpacity>
					<View
						style={{
							backgroundColor: Colors.bluebg,
							position: "absolute",
							paddingHorizontal: 15,
							paddingVertical: 15,
							borderRadius: 15,
							marginTop: -50,
							marginLeft: 285,
						}}
					>
						<Feather name="volume-2" size={20} color="black" />
					</View>
				</TouchableOpacity>

				{/*Content 2*/}

				<Text style={styles.header}>Sample Text</Text>
				<Text style={styles.body}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				<Text style={styles.header}>Sample Text</Text>
				<Text style={styles.body}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				<Text style={styles.header}>Sample Text</Text>
				<Text style={styles.body}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
					voluptates aperiam repellat eius vero itaque. Eligendi minus vitae
					libero optio deserunt, cum quae quaerat maxime rem amet quas?
					Accusantium, dolores.
				</Text>

				{/* Modal */}
				<BottomSheetModalProvider>
					<View style={styles.container}>
						<BottomSheetModal
							ref={bottomSheetModalRef}
							index={1}
							backdropComponent={renderBackdrop}
							snapPoints={snapPoints}
							onChange={handleSheetChanges}
						>
							<View style={styles.bottomSheetContainer}>
								<View style={{ flexDirection: "column",marginTop:10}}>
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
	title: {
		fontFamily: "SFProDisplay-Bold",
		fontSize: 26,
		marginBottom: 16,
	},
	customModal: {
		backgroundColor: "white",
		borderRadius: 15,
	},
	bottomSheetContainer: {
		flex: 1,
		width:"100%",
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
				alignSelf:'stretch'
	},
});
