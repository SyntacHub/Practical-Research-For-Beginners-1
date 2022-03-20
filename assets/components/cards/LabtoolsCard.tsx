import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {}

const LabToolsCard = () => {
  const navigation = useNavigation<any>();
  const { colors, isDark } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: colors.primaryteal,
        borderRadius: 23,
        marginVertical: 12,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column", width: "50%", marginTop: 15, alignContent: "center" }}>
          <Text
            style={{
              width: "100%",
              marginLeft: 15,
              fontFamily: "SFProDisplay-Black",
              lineHeight: 30,
              fontSize: 15,
              color: Colors.background,
            }}
          >
            Explore Research Laboratory Tools using Augmented Reality
          </Text>
        </View>
        <Image
          style={{ width: "45%", resizeMode: "contain", height: 160, alignContent: "center" }}
          source={require("../../images/augmented-reality.png")}
        />
      </View>
    </View>
  );
};

export default LabToolsCard;
