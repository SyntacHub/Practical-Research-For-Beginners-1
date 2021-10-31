import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";

interface Props {}

const Credits: React.FC<Props> = () => {
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
						style={{ marginTop: 5 }}
					/>
					<View style={{ flexDirection: "column", marginLeft: 20 }}>
						<Text style={{ fontFamily: "Proxima-Nova-Bold", fontSize: 18 }}>
							Tristan E. Listanco
						</Text>
						<Text
							style={{
								fontFamily: "Proxima-Nova-Medium",
								marginTop: 2,
								color: Colors.textLighterGray,
							}}
						>
							Head Developer & Designer
						</Text>
					</View>
				</View>
				
			</View>
		</View>
	)
	
}
export default Credits;

