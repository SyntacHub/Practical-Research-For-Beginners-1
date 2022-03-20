import React from "react";
import { View, Text, ImageBackground, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useTheme } from "../theme/ThemeProvider";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppearanceSwitch } from "../components/buttons/ThemeSwitch";
import Colors from "../constants/colors";
import { signOut } from "../utils/auth";
import { ScrollView } from "react-native-gesture-handler";


function CustomDrawer(props: any) {
  const { colors, isDark } = useTheme();

  const text = isDark ? "Good Night" : "Good Morning";
  const imagebg = isDark ? require("../images/nightbg.jpg") : require("../images/daybg.jpg");
  return (
    <View style={{ flex: 1, backgroundColor: colors.elevated }}>
      <ScrollView>
        <ImageBackground
          style={{ paddingVertical: 50, borderBottomRightRadius: 20, overflow: "hidden" }}
          source={imagebg}
          blurRadius={5}
        >
          <View>
            <Ionicons name="arrow-forward" size={24} color="black" />
            <Text
              style={{
                fontFamily: "SFProDisplay-Medium",
                marginLeft: 20,
                marginTop: 20,
                fontSize: 20,
                color: colors.heading5,
                opacity: 0.5,
              }}
            >
              {text}
            </Text>
            <Text
              style={{
                fontFamily: "SFProDisplay-Bold",
                marginLeft: 20,
                marginTop: 5,
                fontSize: 30,
                color: colors.text,
                opacity: 0.8,
              }}
            >
              Tristan Listanco
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.elevated,
            paddingTop: 10,
            paddingLeft: 10,
            alignContent: "space-between",
          }}
        >
          <View style={{ marginTop: 30 }}>
            <DrawerItemList {...props} />
          </View>
        </View>
      </ScrollView>
      <View style={{ flexDirection: "column" }}>
        <View style={{ padding: 20, flexDirection: "row", alignItems: "center", alignContent: "space-between" }}>
          <Text style={{ color: colors.heading5, fontFamily: "SFProDisplay-Medium" }}>Dark Mode</Text>
          <AppearanceSwitch />
        </View>
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            color: Colors.error,
          }}
          onPress={signOut}
        >
          Logout
        </Text>
      </View>
    </View>
  );
}

export default CustomDrawer;
