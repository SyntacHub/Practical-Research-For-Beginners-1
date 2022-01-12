import React from "react";
import { Alert, BackHandler, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

interface Props {}

const AboutCard: React.FC<Props> = () => {
	const appstoreintent = () =>
	Alert.alert(
		"App Not Found",
		"Please open Testflight to check for Updates and view recent changes",
		[
			{
				text: "I understand",
				onPress: () => console.log("Cancel Pressed"),
				style: "cancel",
			},
		
		]
	);
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View style={{ flexDirection: "column", width: "60%", marginTop: 5 }}>
					<Text
						style={{
							width: "100%",
							marginLeft: 10,
							fontFamily: "SFProDisplay-Black",
							lineHeight: 30,
							fontSize: 24,
							color: "#B8F1AF",
						}}
					>
						Practical Research For Beginners
					</Text>
					
					<TouchableOpacity 
					onPress={appstoreintent}
					>
						<Text style={styles.getStarted}>Check For Updates</Text>
					</TouchableOpacity>
				</View>
				<Image
					style={{ width: "40%", borderRadius: 20 }}
					source={require("../../images/app_icon.png")}
				/>
			</View>
		</View>
	);
};

export default AboutCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 25,
		backgroundColor: "#3E6647",
		borderRadius: 23,
		marginVertical: 5,
	},
	getStarted: {
		width: "70%",
		marginTop: 10,
		marginLeft: 10,
		paddingVertical: 10,
		textAlign: "center",
		borderRadius: 5,
		overflow: "hidden",
		fontFamily: "SFProDisplay-Medium",
		fontSize: 13,
		color: Colors.background,
		backgroundColor: Colors.darkGreen,
	},
});
