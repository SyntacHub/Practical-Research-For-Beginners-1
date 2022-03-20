import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {}

const FeedbackCardMenu = () => {
  const navigation = useNavigation<any>();
  const { colors, isDark } = useTheme();
  const screenWidth = Dimensions.get("window").width;
  let bigCardWidth = screenWidth - 40;
  let smallCardWidth = screenWidth - 20;
  if (screenWidth >= 768) {
    bigCardWidth = (screenWidth - 60) / 2;
  }
  if (screenWidth > -1024) {
    bigCardWidth = (screenWidth - 80) / 2;
  }
  if (smallCardWidth >= 768) {
    smallCardWidth = screenWidth / 2.5;
  }
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primaryteal + "60",
        borderRadius: 15,
        width: screenWidth / 2.5,
        alignSelf: "flex-start",
        marginRight: 15,
        paddingVertical: 15,
        paddingHorizontal: 14,
      }}
      onPress={() =>
        Linking.openURL(
          "mailto:tannyencina@gmail.com?subject=Practical Research For Beginners Feedback Report&body=My Feedback Report"
        )
      }
    >
      <View
        style={{
          backgroundColor: colors.elevated,
          height: "25%",
          borderRadius: 20 / 2,
          width: "30%",
          opacity: 0.4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="light-bulb" size={20} style={{ color: colors.primarygreen, opacity: 1 }} />
      </View>
      <Text
        style={{
          fontFamily: "SFProDisplay-Bold",
          fontSize: 19,
          marginTop: 10,
          color: colors.primaryteal,
        }}
      >
        Feedback & Report
      </Text>
      <Text
        style={{
          fontFamily: "SFProDisplay-Regular",
          fontSize: 12,
          marginTop: 5,
          color: colors.heading5,
          opacity: 0.6,
        }}
      >
        Send your feedback and reports in our email
      </Text>
    </TouchableOpacity>
  );
};
export default FeedbackCardMenu;
