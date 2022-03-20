import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import Discord from "../svg/discord";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {}

const FaqCard: React.FC<Props> = () => {
  const { colors, isDark } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 25,
        backgroundColor: colors.primarypurple,
        borderRadius: 23,
        marginVertical: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "column", width: "60%", marginTop: 5 }}>
          <Text
            style={{
              width: "100%",
              marginLeft: 10,
              fontFamily: "SFProDisplay-Black",
              lineHeight: 30,
              fontSize: 20,
              color: Colors.background,
            }}
          >
            More Questions? Visit the Discord Server
          </Text>
        </View>
        <Discord style={{ width: "50%" }} />
      </View>
      <TouchableOpacity onPress={() => console.log("Discord Button Initialized")}>
        <Text style={styles.getStarted}>Take me There!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FaqCard;

const styles = StyleSheet.create({
  getStarted: {
    width: "50%",
    marginLeft: 15,
    marginTop: 15,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 5,
    overflow: "hidden",
    fontFamily: "SFProDisplay-Medium",
    fontSize: 15,
    color: Colors.background,
    backgroundColor: "#22275E",
  },
});
