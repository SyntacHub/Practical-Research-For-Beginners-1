import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {}

const FeedbackCardMenu = () => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	return (
		<TouchableOpacity style={{
			backgroundColor: colors.primaryteal + "60",
			borderRadius: 15,
			width:"50%",
			alignSelf: 'flex-start',
			marginRight:15,
			paddingVertical: 15,
			paddingHorizontal: 14,
		}}>
		
			<View
				style={{
					backgroundColor: colors.elevated,
					height: "25%",
					borderRadius: 30,
					width: "30%",
					opacity: 0.4,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Entypo
					name="chat"
					size={20}
					style={{ color: colors.primarygreen, opacity: 1 }}
				/>
			</View>
			<Text
				style={{
					fontFamily: "SFProDisplay-Bold",
					fontSize: 19,
					marginTop: 10,
					color: colors.primaryteal,
				}}
			>
				Feedback & Report
			</Text>
			<Text
				style={{
					fontFamily: "SFProDisplay-Regular",
					fontSize: 12,
					marginTop: 5,
					color: colors.heading5,
					opacity: 0.6,
				}}
			>
				Get some help on a specific topic in research
			</Text>
		
		</TouchableOpacity>
	);
};
export default FeedbackCardMenu;
