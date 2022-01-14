import React from "react";
import {
	View,
	Text,
	ImageBackground,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme } from "../theme/ThemeProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Switch } from "../components/buttons/ThemeSwitch";
import { ScrollView } from "react-native-gesture-handler";

function CustomDrawer(props: any) {
	const { colors, isDark } = useTheme();
	return (
		<View style={{ flex: 1, backgroundColor: colors.background }}>
			<ScrollView>
			<View style={{backgroundColor:colors.primarygreen,paddingVertical:30,borderBottomRightRadius:25}}>
				<Text
					style={{
						fontFamily: "SFProDisplay-Black",
						marginLeft: 20,
						marginTop: 20,
						fontSize: 20,
            color: colors.heading5
					}}
				>
					Good Morning
				</Text>
				<Text
					style={{
						fontFamily: "SFProDisplay-Bold",
						marginLeft: 20,
						marginTop: 5,
						fontSize: 30,
            color: colors.text
					}}
				>
					Tristan Listanco
				</Text> 
				</View>
			<View
				style={{ flex: 1, backgroundColor: colors.background, paddingTop: 10,paddingLeft:10, }}
			>
				
				
				<View style={{ marginTop:60}}>
					<DrawerItemList {...props}  />
				</View>
			</View>
			</ScrollView>

			<View style={{ padding: 20 , flexDirection:"row",alignItems:'center',alignContent:'space-around'}}>
        <Text style={{color: colors.heading5,fontFamily:"SFProDisplay-Medium"}}>Dark Mode</Text>
					<Switch />
			
			</View>
		</View>
	);
}

export default CustomDrawer;
