import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

interface Props {}

const QACard: React.FC<Props> = () => {
  return (
    <TouchableOpacity>
       <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Feather name="help-circle" size={24} color="black" />
          <View style={{ flexDirection: "column",marginLeft:15 }}>
            <Text style={{fontFamily:"Proxima-Nova-Medium",color:Colors.textLight}}>QUESTION</Text>
            <Text style={{fontFamily:"Proxima-Nova-Medium",fontSize: 15}}>Sample Question</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Feather name="message-square" size={24} color="black" />
          <View style={{ flexDirection: "column", marginLeft: 15 }}>
            <Text style={{fontFamily:"Proxima-Nova-Medium",color:Colors.textLight}}>ANSWER</Text>
            <Text style={{fontFamily:"Proxima-Nova-Medium",fontSize:15}}>Sample Answer</Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
   
  );
};

export default QACard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor:"#F1F1F1",
    borderRadius: 23,
    marginVertical: 12,
  },
});
