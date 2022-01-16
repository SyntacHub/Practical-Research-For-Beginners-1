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

import { useTheme } from "../../theme/ThemeProvider";

const WhatsNewItems =(props:any)=>{
  const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
  return(
    <View
				style={{
					flexDirection: "row",
          paddingHorizontal:15,
          marginTop:20,
				}}
			>
				<View
					style={{
						backgroundColor: colors.primarygreen + "20",
						borderRadius: 10,
						paddingHorizontal: 15,
						justifyContent: "center",
						alignItems: "center",
						paddingVertical: 15,
            marginRight:10
					}}
				>
					<Feather
						style={{
							color: colors.primarygreen,
						}}
						name="book"
						size={30}
					/>
				</View>
				<View style={{ flexDirection: "column" }}>
					<Text style={{ fontFamily: "SFProDisplay-Bold",color:colors.text,fontSize:16 }}>
						{props.feature_name}
					</Text>
					<Text style={{color:colors.heading5,marginTop:5}}>{props.feature_desc}</Text>
				</View>
			</View>
  );
};
export default WhatsNewItems;





