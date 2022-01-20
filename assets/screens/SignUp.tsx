import { Feather } from "@expo/vector-icons";
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
	Alert,
	NativeModules,
	Dimensions,
	ImageBackground,
	Image,
} from "react-native";
import Colors from "../../constants/colors";
import HomeCard from "../../components/cards/HomeCard";
import { useTheme } from "../../theme/ThemeProvider";
import { signIn, signUp } from "../../utils/auth";
import FormInput from "../../components/inputs/FormInput";
import FormButton from "../../components/buttons/FormButton";
import { useToast } from "react-native-toast-notifications";

const SignUpScreen = () => {
	const [email, setEmail] = useState("");
	const navigation = useNavigation<any>();
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const imagebg = require("../../images/loginbg.jpg");
	const screenheight = Dimensions.get("window").height;
	const toast = useToast();
	const screenwidth = Dimensions.get("window").width;
	const { colors, isDark } = useTheme();
	

	const handleOnSubmit = () => {
    if (email != '' && password != '') {
      signIn(email, password);
			toast.show("SignUp Sucess!! Login In Now ");

    }
		console.log(email +"email")
		console.log(password)
  };
	return (
		<View style={{ flex: 1 }}>
			<ImageBackground
				style={{ width: screenwidth, height: screenheight }}
				source={imagebg}
				blurRadius={6}
			>
				<StatusBar animated barStyle={"light-content"} />
				<View style={styles.overlay} />
				<View style={{ flexDirection: "row" }}>
					<Image
						style={{
							borderRadius: 20,
							marginHorizontal: 21,
							width: "20%",
							marginTop: 30,
						}}
						source={require("../../images/app_icon.png")}
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
					Sign Up
				</Text>
				<Text
					style={{
						marginTop: 10,
						marginHorizontal: 21,
						fontFamily: "SFProDisplay-Medium",
						color: "white",
						fontSize: 15,
						opacity: 0.6,
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ad?
				</Text>
				<Text
					style={{
						paddingHorizontal: 21,
						fontSize: 15,
						color: Colors.white,
						fontFamily: "SFProDisplay-Medium",
					}}
				>
					Complete Name
				</Text>
				<View style={{ flex: 1, alignItems: "center" }}>
					<FormInput 
					labelText="Email"
					placeholderText="enter your email"
					onChangeText={value => setEmail(value)}
					value={email}
					keyboardType={'email-address'}
					 />
					<Text>Email Address</Text>
					<FormInput 
					labelText="Password"
					placeholderText="enter your password"
					onChangeText={value => setPassword(value)}
					value={password}
					secureTextEntry={true}
					/>
					
					<View
						style={{
							paddingHorizontal: 21,
							marginVertical: 60,

							alignItems: "center",
						}}
					>
						<FormButton
        labelText="Sign up"
        handleOnPress={handleOnSubmit}
        style={{width: '100%'}}
      />
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};
export default SignUpScreen;
const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(78,141,117,0.5)",
	},
});
