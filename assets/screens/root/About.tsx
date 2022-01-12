import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";
import * as React from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	FlatList,
	TouchableOpacity,
	View,
	NativeModules,
} from "react-native";
import AboutCard from "../../components/cards/AboutCard";
import Acknowledgements from "../../data/AcknowledgementsData";
import FeedbackCardMenu from "../../components/cards/FeedbackCardMenu";
import FaqCardMenu from "../../components/cards/FaqCardMenu";
import Others from "../../data/OthersData";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {}

const About: React.FC<Props> = () => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	const renderItem = ({ item }: { item: any }) => {
		return (
			<TouchableOpacity >
				<View
					style={{
						flexDirection: "row",
					}}
				>
					<View style={{ flexDirection: "column", marginTop: 5 }}>
						<View
							style={{ flexDirection: "row", marginLeft: 5, marginTop: 15 }}
						>
							<View
								style={{
									backgroundColor: colors.primarygreen + "20",
									borderRadius: 10,
									justifyContent:'center',
									alignItems:'center',
									paddingHorizontal: 10,
									paddingVertical: 5,
								}}
							>
								<Feather
									name="user"
									size={26}
									color="black"
									style={{
										color: colors.primarygreen,
						
									}}
								/>
							</View>

							<View style={{ flexDirection: "column", marginLeft: 15 }}>
								<Text
									style={{
										fontFamily: "SFProDisplay-Bold",
										fontSize: 18,
										color: colors.text,
									}}
								>
									{item.person}
								</Text>
								<Text
									style={{
										fontFamily: "SFProDisplay-Medium",
										marginTop: 5,
										color: colors.heading5,
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
							<View
								style={{
									backgroundColor: colors.primarygreen + "20",
									borderRadius: 10,
									justifyContent:'center',
									alignItems:'center',
									paddingHorizontal: 10,
									paddingVertical: 5,
								}}
							>
								<Feather
									name="book"
									size={24}
									color="black"
									style={{
										color: colors.primarygreen,
										alignItems: "center",
									}}
								/>
							</View>

							<View style={{ flexDirection: "column", marginLeft: 15 }}>
								<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 18,color:colors.text }}>
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
	const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				showsVerticalScrollIndicator={false}
			>
				<StatusBar
					animated
					barStyle={isDark ? "light-content" : "dark-content"}
				/>
				{/* Header */}
				<View
					style={{
						marginHorizontal:21,
						marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
					}}
				>
					<View>
						<Feather
							name="menu"
							size={24}
							style={{ color: colors.text }}
							onPress={() => navigation.openDrawer()}
						/>
						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>Acknowledgements &</Text>
							<Text
								style={{
									fontFamily: "SFProDisplay-Bold",
									color: colors.text,
									fontSize: 36,
								}}
							>
								About
							</Text>
						</View>
						<View>
							{/* Content */}

							<AboutCard />
							<View
								style={{
									flexWrap:'nowrap',
									height: 180,
									flex:1,
									marginTop:15,
									paddingHorizontal: 15,
									justifyContent: "center",
									flexDirection: "row",
									
								}}
							>
								<FeedbackCardMenu />
								<FaqCardMenu/>
							</View>
							<View
								style={{
									backgroundColor: colors.elevated,
									paddingVertical: 5,
									justifyContent:'center',
									paddingHorizontal: 10,
									borderRadius: 15,
									marginTop: 5,
								}}
							>
								<Text
									style={{
										paddingHorizontal: 10,

										fontFamily: "SFProDisplay-Bold",
										fontSize: 14,
										marginTop:15,
										color: colors.text,
									}}
								>
									Acknowledgements
								</Text>
								<FlatList
									data={Acknowledgements}
									renderItem={renderItem}
									keyExtractor={(item) => item.id}
								/>
							</View>

							<View
								style={{
									backgroundColor: colors.elevated,
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
										fontSize: 14,
										color: colors.text,
									}}
								>
									Opensource License and Local Agreements
								</Text>
								<FlatList
									data={Others}
									renderItem={renderOthersItem}
									keyExtractor={(item) => item.id}
								/>
							</View>
							<View style={{alignItems:"center",paddingVertical:30}}>
							<Text style={{color:colors.text,fontFamily:"SFProDisplay-Bold",opacity:0.5}}>Iligan City National High School</Text>
							<Text style={{color:colors.text,fontFamily:"SFProDisplay-Bold",opacity:0.3}}>Copyright 2022</Text>
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
	textGreetingWrapper: {
		paddingTop: Platform.OS === "ios" ? 20 : 15,
	},
	textGreeting: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.textLight,
		fontSize: 24,
	},
});
