import React, { useState } from "react";
import { View, Text, SafeAreaView, ImageBackground, Dimensions, StyleSheet, StatusBar, Image } from "react-native";
import FormButton from "../components/buttons/FormButton";
import FormInput from "../components/inputs/FormInput";
import { Colors } from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import { signIn } from "../utils/auth";
import * as LocalAuthentication from "expo-local-authentication";
import * as Haptics from "expo-haptics";
interface Props {
  navigation: any;
}

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const screenheight = Dimensions.get("window").height;
  const screenwidth = Dimensions.get("window").width;

  const handleOnSubmit = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (email != "" && password != "") {
      LocalAuthentication.hasHardwareAsync().then;
      LocalAuthentication.authenticateAsync({}).then;
      signIn(email, password);
    } else {
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#131219", flex: 1 }}>
      <StatusBar animated barStyle={"light-content"} />
      <View style={{ paddingTop: 15, paddingHorizontal: 21 }}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          onPress={() => {
            navigation.goBack();
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }}
        />
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-SemiBold",
            fontSize: 35,
            textAlign: "left",
            marginTop: 20,
          }}
        >
          Let's Sign You In!
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "Poppins-Light",
            fontSize: 30,
            textAlign: "left",
            marginTop: 15,
          }}
        >
          Welcome Back! You've Been Missed!
        </Text>

        {/*Email*/}
        <FormInput
          placeholderText="LRN Email"
          onChangeText={(value) => setEmail(value)}
          value={email}
          keyboardType={"email-address"}
        />
        {/*Password*/}
        <FormInput
          placeholderText="Password"
          onChangeText={(value) => setPassword(value)}
          value={password}
          secureTextEntry={true}
        />

        {/* Footer */}
        <View style={{ justifyContent: "flex-end" }}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Light",
                color: "white",
                fontSize: 15,
              }}
            >
              Before Entering you must agree to the
            </Text>

            <Text
              style={{
                marginLeft: 4,
                color: "white",
                fontFamily: "Poppins-SemiBold",
                fontWeight: "700",
                fontSize: 15,
              }}
              onPress={() => {
                navigation.navigate("EULAModal");
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            >
              End User License Agreement
            </Text>
          </View>
          <FormButton labelText="Sign In" handleOnPress={handleOnSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(78,141,117,0.5)",
  },
});
