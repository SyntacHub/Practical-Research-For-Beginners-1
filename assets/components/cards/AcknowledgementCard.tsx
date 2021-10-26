import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

interface Props{}

const Acknowledgements:React.FC<Props> = () =>{
  return(
    <View style={styles.container}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "column", marginTop: 5 }}>
       
        
      </View>
     
    </View>
  </View>
  )
}
export default Acknowledgements;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: "#f1f1f1",
    borderRadius: 23,
    marginVertical: 15,
  },
});
