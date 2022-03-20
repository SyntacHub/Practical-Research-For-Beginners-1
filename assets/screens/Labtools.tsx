import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  View,
  NativeModules,
} from "react-native";
import Colors from "../constants/colors";
import LabToolsCard from "../components/cards/LabtoolsCard";
import LabToolsData from "../data/LabToolsData";
import { useTheme } from "../theme/ThemeProvider";
import * as Haptics from "expo-haptics";
interface Props {
  navigation: any;
}

const Labtools: React.FC<Props> = ({ navigation }) => {
  const { colors, isDark } = useTheme();
  const { StatusBarManager } = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          navigation.navigate("LabtoolsDetail", {
            item: item,
          });
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 15,
            backgroundColor: colors.elevated,
            borderRadius: 11,
            marginVertical: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: colors.primarygreen + "20",
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 7,
                }}
              >
                <Feather
                  style={{
                    color: colors.primarygreen,
                  }}
                  name="book"
                  size={24}
                />
              </View>

              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Text
                  style={{
                    fontFamily: "SFProDisplay-Bold",
                    fontSize: 20,
                    color: colors.text,
                  }}
                >
                  {item.labtool_name}
                </Text>
                <Text
                  style={{
                    marginTop: 5,
                    fontFamily: "SFProDisplay-Medium",
                    fontSize: 13,
                    color: colors.heading5,
                    marginRight: 20,
                  }}
                >
                  {item.labtool_desc}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: colors.background }}
      >
        <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"} />
        {/* Header */}
        <View
          style={{
            marginTop: Platform.OS === "ios" ? 20 : STATUSBAR_HEIGHT,
            marginHorizontal: 21,
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity>
              <Feather
                name="arrow-left"
                size={24}
                style={{ color: colors.text }}
                onPress={() => {
                  navigation.goBack();
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                fontFamily: "SFProDisplay-Medium",
                color: Colors.textLight,
                fontSize: 18,
              }}
            >
              Research Laboratory
            </Text>
            <Text
              style={{
                fontFamily: "SFProDisplay-Bold",
                color: colors.text,
                fontSize: 30,
              }}
            >
              Tools & Apparatus
            </Text>
          </View>

          {/*Card Content*/}
          <LabToolsCard />
          {/*LabTools desc*/}
          <Text
            style={{
              fontFamily: "SFProDisplay-Medium",
              color: colors.heading5,
              marginVertical: 5,
              fontSize: 15,
              marginHorizontal: 15,
            }}
          >
            Augmented Reality (AR) uses resources heavily like Camera,CPU,GPU and Neural Engine. Device’s battery life
            will be shortened during an extended period of time using Augmented Reality.
          </Text>
          <Text
            style={{
              fontFamily: "SFProDisplay-Bold",
              fontSize: 18,
              marginTop: 25,
              color: colors.text,
            }}
          >
            All Common Laboratory Tools
          </Text>
          <FlatList data={LabToolsData} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Labtools;
const styles = StyleSheet.create({});
