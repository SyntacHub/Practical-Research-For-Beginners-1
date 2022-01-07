import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import { useTheme } from "../../theme/ThemeProvider";
interface Props {}

const FeedbackCard: React.FC<Props> = () => {
	const { colors, isDark } = useTheme();
	return (
		<View style={{flex: 1,
			marginTop: 15,
			paddingVertical:15,
			paddingHorizontal: 15,
			backgroundColor: colors.primaryteal,
			borderRadius: 23,
			marginVertical: 5,}}>
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
							
							marginLeft: 10,
							fontFamily: "SFProDisplay-Black",
							lineHeight: 25,
							fontSize: 20,
							color: "#1E5952",
						}}
					>
					Saw some Issues? Create a Feedback Report 
					</Text>
				</View>
				<Image
					style={{ width: "50%" }}
					source={require("../../images/feedback.png")}
				/>
			</View>
			<TouchableOpacity
				onPress={() => console.log("Discord Button Initialized")}
			>
				<Text style={styles.getStarted}>How to Report?</Text>
			</TouchableOpacity>
		</View>
	);
};
export default FeedbackCard;
const styles = StyleSheet.create({
	container: {
		
	},
	getStarted: {
		width: "50%",
		marginLeft: 10,
		marginTop: 1,
		paddingVertical: 10,
		textAlign: "center",
		borderRadius: 5,
		overflow: "hidden",
		fontFamily: "SFProDisplay-Bold",
		fontSize: 15,
		color: Colors.background,
		backgroundColor: "#276B63",
	},
});
