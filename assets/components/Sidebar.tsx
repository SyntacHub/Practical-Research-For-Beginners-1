import React from "react";
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
} from "react-native";
import {
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import { useTheme } from "../theme/ThemeProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Switch } from "../components/buttons/ThemeSwitch";

function CustomDrawer(props: any) {
	const { colors, isDark } = useTheme();
	return (
		<View style={{ flex: 1, backgroundColor: colors.elevated }}>
			<View
				style={{ flex: 1, backgroundColor: colors.elevated, paddingTop: 10 }}
			>
				<Text
					style={{
						fontFamily: "SFProDisplay-Bold",
						marginLeft: 20,
						marginTop: 50,
						fontSize: 30,
            color: colors.text
					}}
				>
					Explore More
				</Text>
				<View style={{ marginTop:20}}>
					<DrawerItemList {...props}  />
				</View>
			</View>

			<View style={{ padding: 20 , flexDirection:"row",alignItems:'center',}}>
        <Text style={{color: colors.heading5,fontFamily:"SFProDisplay-Medium"}}>Dark Mode</Text>
					<Switch />
			
			</View>
		</View>
	);
}

export default CustomDrawer;
