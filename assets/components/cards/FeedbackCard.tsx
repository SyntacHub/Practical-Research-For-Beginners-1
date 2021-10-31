import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

interface Props {}

const FeedbackCard: React.FC<Props> = () => {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View style={{ flexDirection: "column", width: "50%", marginTop: 5 }}>
					<Text
						style={{
							width: "100%",
							marginLeft: 10,
							fontFamily: "SFProDisplay-Bold",
							lineHeight: 30,
							fontSize: 20,
							color: Colors.background,
						}}
					>
						Found Some Issues? Send a Report
					</Text>
				</View>
				<Image
					style={{ width: "50%" }}
					source={require("../../images/feedback.png")}
				/>
			</View>
		</View>
	);
};
export default FeedbackCard;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 15,
		paddingHorizontal: 15,
		paddingVertical: 10,
		backgroundColor: Colors.bluebg,
		borderRadius: 23,
		marginVertical: 5,
	},
});
