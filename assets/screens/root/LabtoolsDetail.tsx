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
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import ProgressCircle from 'react-native-progress-circle';
import researchTopics from "../../data/LessonsData";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {
	route: any;
	props: any;
}

const LabtoolsDetail: React.FC<Props> = ({ route }) => {
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



	const { StatusBarManager } = NativeModules;
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
	
	return (
		<SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
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
						paddingHorizontal:21,
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
							{item.labtool_name}
						</Text>
						<Text style={styles.textTopicIndex}>{item.labtool_categ}</Text>
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
        <TouchableOpacity
        onPress={() => {
          const url = 'https://developer.apple.com/augmented-reality/quick-look/models/cupandsaucer/cup_saucer_set.usdz';
          const localFile = `${RNFS.DocumentDirectoryPath}/${url.split('/').pop()}`;
      
          const options = {
            fromUrl: url,
            toFile: localFile,
            background: true, // Continue the download in the background after the app terminates (iOS only)
            discretionary: true, // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
            cacheable: true, // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
            begin: (res) => {},
            
         }
      
          RNFS.downloadFile(options).promise
          .then(() => FileViewer.open(localFile))
          .then(() => {})
          .catch(error => {});
        }}
        > 
        <Image
						source={require("../../images/usdzicon.png")}
						style={{ resizeMode: "contain", width: "75%" }}
					/>
        </TouchableOpacity>
        

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

export default LabtoolsDetail;

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
