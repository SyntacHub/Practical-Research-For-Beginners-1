import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import { useTheme } from "../../theme/ThemeProvider";
import * as Haptics from "expo-haptics";

interface Props {}

const HomeCard = () => {
  const navigation = useNavigation<any>();
  const screenWidth = Dimensions.get("window").width;
  let bigCardWidth = screenWidth - 40;
  if (screenWidth >= 768) {
    bigCardWidth = (screenWidth - 50) / 1;
  }
  let contentHeadings = undefined;
  if (screenWidth >= 768) {
    contentHeadings = 25;
  }
  contentHeadings = 20;
  const { colors, isDark } = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: colors.primarygreen,
        maxWidth: bigCardWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 23,
        marginVertical: 12,
      }}
    >
      <View style={{ flexDirection: "row", overflow: "hidden", width: "60%", alignItems: "center", flex: 1 }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontFamily: "SFProDisplay-Black", fontSize: contentHeadings, color: Colors.white }}>
            Test your Knowledge in Research
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Quiz");
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            }}
          >
            <Text style={styles.getStarted}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image style={{ flex: 1 }} source={require("../../images/homeCard.png")} resizeMode="contain" />
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {},
  getStarted: {
    marginTop: 15,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 10,
    overflow: "hidden",
    fontFamily: "SFProDisplay-Medium",
    fontSize: 15,
    color: Colors.background,
    backgroundColor: Colors.darkGreen,
  },
});
