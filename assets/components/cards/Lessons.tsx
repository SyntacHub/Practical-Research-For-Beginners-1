import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";


interface Props {}

const QuarterlyLessons = (props:any) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<Feather
						style={{ marginTop: 10 }}
						name="book"
						size={24}
						color="black"
					/>

					<View style={{ flexDirection: "column", marginLeft: 15 }}>
						<Text 
							style={{
								fontFamily: "SFProDisplay-Bold",
								fontSize: 18,
								color: Colors.secondaryGreen,
							}}
						>
							{props.topictitle}
						</Text>
						<Text
							style={{
								marginTop: 5,
								fontFamily: "SFProDisplay-Medium",
								fontSize: 15,
								color: Colors.text,
							}}
						>
							{props.est}
						</Text>
					</View>
				</View>

				<Feather name="arrow-right" size={24} color={Colors.secondaryGreen} />
			</View>
		</View>
	);
};
export default QuarterlyLessons;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: Colors.lightGreen,
		borderRadius: 11,
		marginVertical: 8,
	},
});
