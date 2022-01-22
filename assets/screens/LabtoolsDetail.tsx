import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
import Snackbar from "react-native-snackbar"
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet, {
	BottomSheetBackdrop,
	BottomSheetModal,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import * as Haptics from 'expo-haptics';
import AR from "../components/svg/AR";
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
import RNFS from "react-native-fs";
import FileViewer from "react-native-file-viewer";

import { useTheme } from "../theme/ThemeProvider";

interface Props {
	route: any;
	props: any;
}

const LabtoolsDetail: React.FC<Props> = ({ route }) => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	const { item } = route.params;

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
						paddingHorizontal: 21,
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
								onPress={() => {navigation.goBack()
									Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
								}}
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
							{item.labtool_name}
						</Text>
						<Text style={styles.textTopicIndex}>{item.labtool_categ}</Text>
					</View>
				</View>

				{/*Content*/}
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: colors.primaryteal,
						marginHorizontal: 20,
						height: 160,
						marginVertical: 20,
						borderRadius: 15,
					}}
				></View>
				<TouchableOpacity
					style={{
						marginTop: -65,
						alignItems: "flex-end",
						paddingHorizontal: 40,
					}}
					onPress={() => {{
						Snackbar.show({
							text: 'Initializing Neural Engine...',
							duration: Snackbar.LENGTH_LONG,
						});
						Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
						
						const url = `${item.labtool_ar_link}`;
						const localFile = `${RNFS.DocumentDirectoryPath}/${url
							.split("/")
							.pop()}`;

						const options = {
							fromUrl: url,
							toFile: localFile,
							background: true, // Continue the download in the background after the app terminates (iOS only)
							discretionary: true, // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
							cacheable: true, // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
						};

						RNFS.downloadFile(options)
							.promise.then(() => FileViewer.open(localFile))
							.then(() => {})
							.catch((error) => {});
					}}}
				>
					<AR />
				</TouchableOpacity>
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
