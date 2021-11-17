import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import * as React from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity,
} from "react-native";

interface Props {
	route: any;
}

const Lesson: React.FC<Props> = ({ route }) => {
	const navigation = useNavigation<any>();
	const { item } = route.params;
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
						<TouchableOpacity
							onPress={() => navigation.navigate("SourceModal")}
						>
							<Feather name="book" size={24} color="black" />
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
						<Feather name="alert-octagon" size={20} color="black" />
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
});
