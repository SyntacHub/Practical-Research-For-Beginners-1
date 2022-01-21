import React, { useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	ImageBackground,
	Dimensions,
	StyleSheet,
	StatusBar,
	Image,
} from "react-native";
import FormButton from "../components/buttons/FormButton";
import FormInput from "../components/inputs/FormInput";
import { Colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { signIn } from "../utils/auth";
interface Props {
	navigation: any;
}

const SignInScreen: React.FC<Props> = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const screenheight = Dimensions.get("window").height;
	const screenwidth = Dimensions.get("window").width;

	const handleOnSubmit = () => {
		if (email != "" && password != "") {
			signIn(email, password);
		}
	};

	return (
		<SafeAreaView style={{ backgroundColor: "#131219", flex: 1 }}>
			<StatusBar animated barStyle={"light-content"} />
			<View style={{ paddingTop: 15, paddingHorizontal: 21 }}>
				<AntDesign name="arrowleft" size={30} color="white" onPress={() => navigation.goBack()} />
				<Text
					style={{
						color: "white",
						fontFamily: "Poppins-SemiBold",
						fontSize: 35,
						textAlign: "left",
						marginTop: 20,
					}}
				>
					Let's Sign You In!
				</Text>
				<Text
					style={{
						color: "white",
						fontFamily: "Poppins-Light",
						fontSize: 30,
						textAlign: "left",
						marginTop: 15,
					}}
				>
					Welcome Back! You've Been Missed!
				</Text>

				{/*Email*/}
				<FormInput
					placeholderText="Phone,Email or Username"
					onChangeText={(value) => setEmail(value)}
					value={email}
					keyboardType={"email-address"}
				/>
					{/*Password*/}
				<FormInput
					placeholderText="Password"
					onChangeText={(value) => setPassword(value)}
					value={password}
					secureTextEntry={true}
				/>
        
        {/* Footer */}
        <View style={{justifyContent:'flex-end'}}>
      <View style={{flexDirection: 'row', alignItems: 'center' ,padding:20,}}>
      <Text style={{fontFamily:"Poppins-Light",color:'white',fontSize:15}}>Don't Have an Account?</Text>
   
        <Text
          style={{marginLeft: 4, color: 'white',fontFamily:"Poppins-SemiBold",fontWeight:'700',fontSize:15}}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Register Here!
        </Text>
      </View>
				<FormButton labelText="Sign In" handleOnPress={handleOnSubmit} />
			</View>
      </View>
		</SafeAreaView>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(78,141,117,0.5)",
	},
});
