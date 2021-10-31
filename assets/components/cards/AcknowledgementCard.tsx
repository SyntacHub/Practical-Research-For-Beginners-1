import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import Credits from "../menus/CreditMenu";

interface Props {}

const Acknowledgements: React.FC<Props> = () => {
	return (
		<View style={styles.container}>
			<Text
				style={{
					marginLeft: 10,
					fontFamily: "SFProDisplay-Bold",
					fontSize: 20,
					color: Colors.darkGray,
				}}
			>
				Acknowledgements
			</Text>
			<Credits />
			<Credits />
			<Credits />
			<Credits />

			<Text
				style={{
					marginLeft: 10,
					fontFamily: "SFProDisplay-Bold",
					fontSize: 20,
					color: Colors.darkGray,
					marginTop: 25,
				}}
			>
				Others
			</Text>
			<Credits />
			<Credits />

			<View style={{ marginTop: 50 }}>
				<View style={{ alignSelf: "center", alignItems: "center" }}>
					<Text
						style={{
							color: Colors.textLighterGray,
							fontFamily: "SFProDisplay-Bold",
							fontSize: 15,
						}}
					>
						Iligan City National High School
					</Text>
					<Text
						style={{
							color:Colors.textLighterGray,
							fontFamily: "SFProDisplay-Bold",
							fontSize: 15,
						}}
					>
						Copyright 2021
					</Text>
				</View>
			</View>
		</View>
	);
};
export default Acknowledgements;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 20,
		backgroundColor: "#f1f1f1",
		overflow: "hidden",
		flexDirection: "column",
		borderRadius: 11,
		marginVertical: 10,
	},
});
