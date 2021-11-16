import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import Discord from "../svg/discord";

interface Props {}

const FaqCard: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center",alignItems:'center' }}>
        <View style={{ flexDirection: "column", width: "60%", marginTop: 5}}>
          <Text
            style={{
              width: "100%",
              marginLeft: 10,
              fontFamily: "SFProDisplay-Bold",
              lineHeight: 30,
              fontSize: 20,
              color: Colors.background,
            }}
          >
            Join The Discord Server for Live Assistance
          </Text>
        </View>
        <Discord
          style={{ width: "50%" }}
          
        />
      </View>
    </View>
  );
};

export default FaqCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: Colors.purple,
    borderRadius: 23,
    marginVertical: 5,
  },
});
