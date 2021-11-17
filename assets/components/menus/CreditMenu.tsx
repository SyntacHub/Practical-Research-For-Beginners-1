import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";



const Credits = (props:any) => {
	return (
		<View
			style={{
				flexDirection: "row",
			}}
		>
			<View style={{ flexDirection: "column", marginTop: 5 }}>
				<View style={{ flexDirection: "row", marginLeft: 5, marginTop: 15 }}>
					<Feather
						name="user"
						size={24}
						color="black"
						style={{ marginTop: 7 }}
					/>
					<View style={{ flexDirection: "column", marginLeft: 20 }}>
						<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 18 }}>
							{props.name}
						</Text>
						<Text
							style={{
								fontFamily: "SFProDisplay-Medium",
								marginTop: 5,
								color: Colors.textLighterGray,
							}}
						>
							{props.role}
						</Text>
					</View>
				</View>
				
			</View>
		</View>
	)
	
}
export default Credits;

