import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "../../theme/ThemeProvider";
import * as Haptics from "expo-haptics";
interface Props {}

const LabtoolsCardMenu = () => {
  const navigation = useNavigation<any>();
  const { colors, isDark } = useTheme();
  const screenWidth = Dimensions.get("window").width;
  let bigCardWidth = screenWidth - 40;
  if (screenWidth >= 768) {
    bigCardWidth = (screenWidth - 60) / 2;
  }

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "#C0D88D" + "60",
        width: screenWidth / 2.5,
        alignSelf: "flex-start",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
      }}
      onPress={() => {
        navigation.navigate("Labtools");
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }}
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
        <Entypo name="lab-flask" size={20} style={{ color: colors.secondarygreen }} />
      </View>
      <Text
        style={{
          fontFamily: "SFProDisplay-Bold",
          fontSize: 19,
          marginTop: 10,
          color: colors.secondarygreen,
        }}
      >
        Scientific Laboratory Tools
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
        Turn your room into a Science Laboratory
      </Text>
    </TouchableOpacity>
  );
};
export default LabtoolsCardMenu;
