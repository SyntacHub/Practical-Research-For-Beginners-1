import React from "react";
import { Feather } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

interface Props {}

const QuarterlyLessons: React.FC<Props> = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent:'space-between',alignItems:'center'}}>
          <View style={{ flexDirection: "row" }}>
            <Feather style={{marginTop:5}} name="book" size={24} color="black" />

            <View style={{ flexDirection: "column",marginLeft:15 }}>
              <Text
                style={{
                  fontFamily: "Proxima-Nova-Bold",
                  fontSize: 18,
                  color: Colors.secondaryGreen,
                }}
              >
                Research Topic
              </Text>
              <Text
                style={{
                  fontFamily: "Proxima-Nova-Medium",
                  fontSize: 12,
                  color: Colors.text,
                }}
              >
                Est. Time Frame
              </Text>
            </View>
          </View>

          <Feather name="arrow-right" size={24} color={Colors.secondaryGreen} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default QuarterlyLessons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: Colors.lightGreen,
    borderRadius: 11,
    marginVertical: 8,
  },
});
