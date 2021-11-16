import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

const IntroModal = () => {
	return (
		<View style={styles.container}>
			<View
				style={{ flexDirection: "column", marginTop: 30, alignItems: "center" }}
			>
				<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 30,color:Colors.primaryGreen}}>
					Practical Research
				</Text>
				<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 30 }}>
					For Beginners
				</Text>
				<View style={{ flexDirection: "row" }}>
					<View style={{ flexDirection: "column" }}>

					<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 25 }}>
						Description Sample Here 
					</Text>
					<Text style={{ fontFamily: "SFProDisplay-Medium", fontSize: 15 }}>Potangina mo Jessah ang ganda mooo.Hindi ko maexplain yung personality mo</Text>

					<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 25 }}>
						Offline Access
					</Text>
					<Text style={{ fontFamily: "SFProDisplay-Medium", fontSize: 15 }}>Potangina mo Jessah ang ganda mooo.Hindi ko maexplain yung personality mo</Text>

					</View>
					
				</View>
			</View>
		</View>
	);
};

export default IntroModal;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal:40
	},
});
