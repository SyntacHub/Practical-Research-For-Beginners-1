import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import Discord from "../svg/Discord";

interface Props {}

const AboutCard: React.FC<Props> = () => {
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
							fontFamily: "Proxima-Nova-Bold",
							lineHeight: 30,
							fontSize: 25,
							color: Colors.background,
						}}
					>
						Practical Research For Beginners
					</Text>
					<Text
						style={{
							fontFamily: "Proxima-Nova-Medium",
							width: "100%",
							marginLeft: 10,
							fontSize: 15,
							marginTop: 10,
							color: Colors.textLight,
						}}
					>
						Version 1.0.0
					</Text>
				</View>
				<Image
					style={{ width: "40%", borderRadius: 20 }}
					source={require("../../images/ic_launcher.png")}
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
});
