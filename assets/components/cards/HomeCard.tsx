import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text,TouchableOpacity,View } from "react-native";
import Colors from "../../constants/colors";

interface Props {}

const HomeCard : React.FC<Props> = () =>{
  return(
    <View style={styles.cardContainer}>

    </View>
  );

};

export default HomeCard;

const styles = StyleSheet.create({
  cardContainer:{
    flex:1,
    flexDirection: 'row',
  },

})