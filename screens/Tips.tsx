import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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


const Tips: React.FC<{}> = () => {
  const navigation = useNavigation<any>();

  
  return (
    <SafeAreaView style={{  flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}

      >
        {/* <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"} /> */}
        {/* Header */}
        <View
          style={{
            paddingHorizontal: 21,
            marginTop: 15
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Feather name="menu" size={24}  onPress={() => navigation.openDrawer()} />
            </View>

            <View style={styles.textGreetingWrapper}>
              <Text style={styles.textGreeting}>Practical Research 7</Text>
              <Text
                style={{
                  fontFamily: "SFProDisplay-Bold",
               
                  fontSize: 35,
                }}
              >
                Research Tips
              </Text>
              {/*Content*/}
              
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Tips;
const styles = StyleSheet.create({
  textGreetingWrapper: {
    paddingTop: Platform.OS === "ios" ? 20 : 15,
  },
  textGreeting: {
    fontFamily: "SFProDisplay-Bold",
    color: Colors.textLight,
    fontSize: 25,
  },
  searchBarWrapper: {
    paddingTop: 15,
  },
});
