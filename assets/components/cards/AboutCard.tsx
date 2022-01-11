import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


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
							fontFamily: "SFProDisplay-Black",
							lineHeight: 30,
							fontSize: 24,
							color: "#B8F1AF",
						}}
					>
						Practical Research For Beginners
					</Text>
					<Text
						style={{
							fontFamily: "SFProDisplay-Medium",
							width: "100%",
							marginLeft: 10,
							fontSize: 15,
							marginTop: 15,
							color: "#B8F1AF",
						}}
					>
						Version 1.0.0
					</Text>
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
});
