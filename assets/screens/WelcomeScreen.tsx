import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, StatusBar, StyleSheet, SafeAreaView, Text, View, Dimensions, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import * as Haptics from "expo-haptics";

interface Props {}
const WelcomeScreen: React.FC<Props> = () => {
  const imagebg = require("../images/onboarding/heder.png");
  const navigation = useNavigation<any>();
  const screenheight = Dimensions.get("window").height;
  const screenwidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ backgroundColor: "#131219", flex: 1, justifyContent: "center" }}>
      <StatusBar animated barStyle={"light-content"} />
      <View style={{ paddingTop: 15, paddingHorizontal: 21 }}>
        <Image
          source={imagebg}
          width={10}
          resizeMode="contain"
          style={{ aspectRatio: 1.6, alignSelf: "center", flex: 1 }}
        />
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-SemiBold",
            fontSize: 35,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Practical Research For Beginners Grade 7
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Light",
            fontSize: 15,
            textAlign: "center",
            marginTop: 15,
          }}
        >
          Learn Practical Research in your Pockets anytime and anywhere
        </Text>

        {/* Footer */}
        <View style={{}}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignInScreen");
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            >
              <Text
                style={{
                  paddingHorizontal: 50,
                  paddingVertical: 15,
                  backgroundColor: Colors.primary,
                  borderRadius: 15,
                  color: "white",
                  fontFamily: "Poppins-SemiBold",
                  overflow: "hidden",
                  marginBottom: 30,
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: "Poppins-Light",
                color: "white",
                fontSize: 15,
              }}
            >
              Iligan City National High School
            </Text>

            <Text
              style={{
                marginLeft: 4,
                color: "white",
                fontFamily: "Poppins-SemiBold",
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              Copyright 2022
            </Text>
            <Text
              style={{
                color: "white",
                marginTop: 20,
                fontFamily: "SFProDisplay-Bold",
                textAlign: "center",
              }}
            >
              INTERNAL BUILD / DO NOT PUBLISH TO THE MARKET
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default WelcomeScreen;
