import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

interface Props {}

const AssesmentCard = () => {
	const navigation = useNavigation<any>();
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row", justifyContent: "center" }}>
				<View style={{ flexDirection: "column", width: "50%", marginTop: 5 }}>
					<Text
						style={{
							width: "100%",
                            paddingVertical:10,
							fontFamily: "SFProDisplay-Black",
							lineHeight: 33,
							fontSize: 19,
							color: Colors.background,
						}}
					>
						“All the luck in the world, all wished for you.”
					</Text>
				
				</View>
				<Image
					style={{ width: "50%" }}
					source={require("../../images/assesment_image.png")}
				/>
                
			</View>
		</View>
	);
};

export default AssesmentCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingVertical: 5,
		backgroundColor: '#50BA9A',
		borderRadius: 23,
		marginVertical: 12,
	},
	
});
