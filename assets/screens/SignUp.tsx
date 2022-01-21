import React, {useState} from 'react';
import {View, Text, SafeAreaView, Alert,StatusBar} from 'react-native';
import FormButton from '../components/buttons/FormButton';
import FormInput from '../components/inputs/FormInput';
import { AntDesign } from "@expo/vector-icons";
import {Colors} from '../constants/colors';
import {signUp} from '../utils/auth';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
interface Props{
  navigation:any,
}
const SignUpScreen:React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const imagebg = require("../images/loginbg.jpg");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOnSubmit = () => {
    if (email != '' && password != '' && confirmPassword != '') {
      if (password == confirmPassword) {
        //   SignUp
        signUp(email, password);
      } else {
        Alert.alert('password did not match');
      }
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#131219", flex: 1 }}>
			<StatusBar animated barStyle={"light-content"} />
      <ScrollView>
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
					Let's Sign You Up!
				</Text>
				<Text
					style={{
						color: "white",
						fontFamily: "Poppins-Light",
						fontSize: 25,
						textAlign: "left",
						marginTop: 15,
					}}
				>
					Nice to meet you Student Researcher!
				</Text>
        {/*Name*/}
				<FormInput
					placeholderText="LRN Number"
					onChangeText={(value) => setEmail(value)}
					value={email}
					keyboardType={"email-address"}
				/>

				{/*Email*/}
				<FormInput
					placeholderText="Email Address"
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

        {/* Confirm Password*/}
				<FormInput
					placeholderText="Confirm Password"
					onChangeText={(value) => setPassword(value)}
					value={password}
					secureTextEntry={true}
				/>
        
        {/* Footer */}
        <View style={{justifyContent:'flex-end',marginTop:100}}>
      <View style={{flexDirection: 'column', alignItems: 'center' ,padding:20,}}>
      <Text style={{fontFamily:"Poppins-Light",color:'white',fontSize:15}}>Before Entering you must agree to the</Text>
      <TouchableOpacity onPress={() => console.log("BEAUTIFUL DIRTY RICHHH")}>
        <Text
          style={{marginLeft: 4, color: 'white',fontFamily:"Poppins-SemiBold",fontWeight:'700',fontSize:15}}
          >
          End User License Agreement
        </Text>
        </TouchableOpacity>
      </View>
				<FormButton labelText="Sign Up" handleOnPress={handleOnSubmit} />
			</View>
      </View>
      </ScrollView>
		</SafeAreaView>
  );
};

export default SignUpScreen;