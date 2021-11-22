import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

interface Props {}

const QuizCard = () => {
	const navigation = useNavigation<any>();
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<View style={{ flexDirection: "column", width: "50%", marginTop: 5 }}>
					<Text
						style={{
							width: "100%",
							marginLeft: 15,
							fontFamily: "SFProDisplay-Bold",
							lineHeight: 30,
							fontSize: 20,
							color: Colors.background,
						}}
					>
						Test Your Knowledge in Research
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
						<Text style={styles.getStarted}>Take a Quiz</Text>
					</TouchableOpacity>
				</View>
				<Image
					style={{ width: "50%" }}
					source={require("../../images/homeCard.png")}
				/>
			</View>
		</View>
	);
};

export default QuizCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 15,
		backgroundColor: Colors.primaryGreen,
		borderRadius: 23,
		marginVertical: 12,
	},
	getStarted: {
		width: "80%",
		marginLeft: 15,
		marginTop: 15,
		paddingVertical: 10,
		textAlign: "center",
		borderRadius: 5,
		overflow: "hidden",
		fontFamily: "SFProDisplay-Medium",
		fontSize: 15,
		color: Colors.background,
		backgroundColor: Colors.darkGreen,
	},
});
