import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {TransitionPresets} from '@react-navigation/stack'
import Colors from "../../constants/Colors";

interface Props {}

const HomeCard = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row",justifyContent:'center' }}>
        <View style={{flexDirection:'column',width: "50%",marginTop:5,}}>
        <Text
          style={{
            width: "100%",
            marginLeft: 15,
            fontFamily: "SFProDisplay-Bold",
            lineHeight: 30,
            fontSize: 20,
            color: Colors.background,
          }}
        >
          What do you want to learn Today?
        </Text>
        <TouchableOpacity
     onPress={()=> navigation.navigate("Modal")}
       

        >
            <Text style={styles.getStarted}>Get Started</Text> 
        </TouchableOpacity>
        </View>
        <Image
        style={{width:"50%"}}
        source={require('../../images/homeCard.png')}
        />
       
      </View>
      
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 15,
    backgroundColor: Colors.primaryGreen,
    borderRadius: 23,
    marginVertical: 12,
  },
  getStarted: {
    width: "80%",
    marginLeft: 15,
    marginTop: 15,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 5,
    overflow: "hidden",
    fontFamily: "SFProDisplay-Medium",
    fontSize: 15,
    color: Colors.background,
    backgroundColor: Colors.darkGreen,
  },
  
});
