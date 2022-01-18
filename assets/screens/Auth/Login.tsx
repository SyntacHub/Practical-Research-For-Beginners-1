import { Feather} from "@expo/vector-icons";
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
	NativeModules,
	Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import Colors from "../../constants/colors";

import HomeCard from "../../components/cards/HomeCard";
import researchTopics from "../../data/LessonsData";
import ResearchAssistantCard from "../../components/cards/AssistantCardMenu";
import { useTheme } from "../../theme/ThemeProvider"; 

interface Props {}
const Login: React.FC<Props> = () => {
  const imagebg = require("../../images/loginbg.jpg");
  const screenheight = Dimensions.get("window").height;
  const screenwidth = Dimensions.get("window").width;
  const { colors, isDark } = useTheme();
  return(
    <SafeAreaView style={{flex:1,alignContent:'center'}}>
      
       <ImageBackground style={{width:screenwidth,height:screenheight}} source={imagebg} blurRadius={6}>
       <View style={styles.overlay} />
       <Image
					style={{ borderRadius: 20,marginHorizontal:21,width:'20%'}}
					source={require("../../images/app_icon.png")}
					resizeMode="contain"
				/>
       <Text style={{fontFamily:"SFProDisplay-Bold",fontSize:35,color:'white',marginTop:5,paddingHorizontal:21}}>Welcome to Practical Research For Beginners</Text>
       <Text style={{marginTop:10,paddingHorizontal:21,fontFamily:"SFProDisplay-Medium",color:'white',fontSize:15,opacity:0.6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ad?</Text>
       <View style={{marginTop:10,paddingHorizontal:21,alignItems:'center'}}>
       <Text style={{paddingHorizontal:10,paddingVertical:15,backgroundColor:colors.primarygreen,width:"50%",textAlign:'center',borderRadius:10,overflow:"hidden"}}>Sign up</Text>
       <Text style={{paddingHorizontal:10,paddingVertical:15,backgroundColor:colors.primaryteal,width:"50%",textAlign:'center',borderRadius:10,overflow:"hidden"}}>Login In</Text>
       </View>
       
       </ImageBackground>
      
     
      

     

     
    </SafeAreaView>
  )
}
export default Login;
const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(69,85,117,0.7)',
  }
})
