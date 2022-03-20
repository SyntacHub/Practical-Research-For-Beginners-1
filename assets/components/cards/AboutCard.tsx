import React from "react";
import { Alert, BackHandler, Image, StyleSheet, Text, TouchableOpacity, Dimensions, View } from "react-native";
import Colors from "../../constants/colors";

interface Props {}

const AboutCard: React.FC<Props> = () => {
  const screenWidth = Dimensions.get("window").width;
  const appstoreintent = () =>
    Alert.alert("App Not Found", "Please open Testflight to check for Updates and view recent changes", [
      {
        text: "I understand",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
    ]);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            width: "60%",
            marginTop: 5,
            flex: 1.5,
          }}
        >
          <Text
            style={{
              width: "100%",
              marginLeft: 10,
              fontFamily: "SFProDisplay-Black",
              lineHeight: 25,
              fontSize: 25,
              color: "#B8F1AF",
            }}
          >
            Practical Research For Beginners
          </Text>

          <TouchableOpacity onPress={appstoreintent}>
            <Text style={styles.getStarted}>Check For Updates</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{ borderRadius: 20, flex: 1 }}
          source={require("../../images/app_icon.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default AboutCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: "#3E6647",
    borderRadius: 23,
    marginVertical: 5,
  },
  getStarted: {
    marginTop: 10,
    marginLeft: 10,
    width: "80%",
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 5,
    overflow: "hidden",
    fontFamily: "SFProDisplay-Medium",
    fontSize: 13,
    color: Colors.background,
    backgroundColor: Colors.darkGreen,
  },
});
