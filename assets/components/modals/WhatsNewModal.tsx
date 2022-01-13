import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	FlatList,
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	Text,
	View,
	Image,
	NativeModules,
} from "react-native";
import { color } from "react-native-reanimated";

import Colors from "../../constants/colors";
import WhatsNewItems from "../buttons/WhatsNewItems";

import { useTheme } from "../../theme/ThemeProvider";

const WhatsNewModal = (props: any) => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.elevated,
				alignItems: "center",
				justifyContent: "center",
				paddingHorizontal: 30,
			}}
		>
			<View style={{ alignItems: "center", flexDirection: "column",position:'relative' }}>
				<Image
					style={{ borderRadius: 20 }}
					source={require("../../images/app_icon.png")}
				/>
				
				<Text style={{ fontFamily: "SFProDisplay-Bold", fontSize: 20,marginTop:20, color:colors.text}}>
					Whats New in
				</Text>

				<Text style={{ fontFamily: "SFProDisplay-Bold",textAlign:'center', fontSize: 30,color:colors.text}}>
					Practical Research Grade 7
				</Text>
			
				<WhatsNewItems
					feature_name="Augmented Reality"
					feature_desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab cupiditate."
				/>
				<WhatsNewItems
					feature_name="Augmented Reality"
					feature_desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab cupiditate."
				/>
				<WhatsNewItems
					feature_name="Augmented Reality"
					feature_desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab cupiditate."
				/>
				<Text style={{paddingHorizontal:"30%",paddingVertical:"5%",backgroundColor:colors.primarygreen,marginTop:40,borderRadius:10,overflow:'hidden',fontFamily:"SFProDisplay-Bold",fontSize:20,color:'white'}}>Continue</Text>
			</View>
		</View>
	);
};
export default WhatsNewModal;
