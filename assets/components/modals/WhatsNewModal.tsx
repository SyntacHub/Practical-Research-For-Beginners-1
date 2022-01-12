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

const WhatsNewModal = () => {
	const navigation = useNavigation<any>();
	const { colors, isDark } = useTheme();
	return (
		<View style={{flex:1,backgroundColor:colors.elevated ,alignItems:'center'}}>
			<View style={{alignItems:'center',flexDirection:'column'}}>
      <Image
					style={{borderRadius: 20}}
					source={require("../../images/app_icon.png")}
				/>
				<Text style={{fontFamily:"SFProDisplay-Bold",fontSize:25}}>Whats New in </Text>
				<Text style={{fontFamily:'SFProDisplay-Bold',fontSize:35}}>Practical Research  </Text>
			</View>
      <View>
        <Text>Augmented Reality is a thing</Text>
      </View>
		</View>
	);
};
export default WhatsNewModal;
