import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {

	TouchableOpacity,
	StatusBar,
	StyleSheet,
	Text,
	View,
	NativeModules,
	Dimensions,
	ImageBackground,
	Image,
} from "react-native";

import { useTheme } from "../theme/ThemeProvider";

interface Props {}
const WelcomeScreen: React.FC<Props> = () => {
	const imagebg = require("../../images/loginbg.jpg");
	const navigation = useNavigation<any>();
	const screenheight = Dimensions.get("window").height;
	const screenwidth = Dimensions.get("window").width;
	
	return (
		
		<View style={{ flex: 1, alignContent: "center",justifyContent:'center'}}>
			<ImageBackground
				style={{ width: screenwidth, height: screenheight }}
				source={imagebg}
				blurRadius={6}
			>
        <StatusBar
					animated
					barStyle={"light-content"}
				/>
				<View style={styles.overlay} />
				<View style={{flexDirection:'row'}}>
				<Image
					style={{ borderRadius: 20, marginHorizontal: 21, width: "20%",marginTop:30 }}
					source={require("../../images/app_icon.png")}
					resizeMode="contain"
				/>
				<Image
					style={{ borderRadius:20,marginTop:-25,width:screenwidth/5}}
					source={require("../../images/ic_school.png")}
					resizeMode="contain"
				/>
				</View>
				
				<Text
					style={{
						fontFamily: "SFProDisplay-Bold",
						fontSize: 35,
						color: "white",
						marginTop: 5,
						paddingHorizontal: 21,
					}}
				>
					Welcome to Practical Research For Beginners
				</Text>
				<Text
					style={{
						marginTop: 10,
						paddingHorizontal: 21,
						fontFamily: "SFProDisplay-Medium",
						color: "white",
						fontSize: 15,
						opacity: 0.6,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ad?
				</Text>
				<View
					style={{
						paddingHorizontal: 21,
						marginTop: 120,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity onPress={() =>
					navigation.navigate("SignUp")
				}>
						<Text
							style={{
								paddingHorizontal: 10,
								paddingVertical: 15,
								backgroundColor: "#3086EB",
								width: screenwidth / 2,
								textAlign: "center",
								borderRadius: 10,
								overflow: "hidden",
								fontFamily: "SFProDisplay-Bold",
								fontSize: 15,
								color: "white",
							}}
						>
							Sign up
						</Text>
					</TouchableOpacity>

					<TouchableOpacity>
						<Text
							style={{
								paddingHorizontal: 10,
								marginTop: 25,
								paddingVertical: 15,
								backgroundColor: '#1B952E',
								width: screenwidth / 2,
								fontFamily: "SFProDisplay-Bold",
								textAlign: "center",
								borderRadius: 10,
								overflow: "hidden",
								fontSize: 15,
								color: "white",
							}}
						>
							Log In
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};
export default WelcomeScreen;
const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(78,141,117,0.5)",
	},
});
