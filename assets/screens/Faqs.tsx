import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../constants/colors";
import * as React from "react";
import { NativeModules, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import FaqCard from "../../components/cards/FaqCard";
import { useTheme } from "../../theme/ThemeProvider";

interface Props {}

const Faqs: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  const { colors, isDark } = useTheme();
  const { StatusBarManager } = NativeModules;
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
        <StatusBar animated barStyle={isDark ? "light-content" : "dark-content"} />
        {/* Header */}
        <View
          style={{
            marginTop: Platform.OS === "ios" ? 15 : STATUSBAR_HEIGHT,
            marginLeft: 25,
            marginRight: 25,
          }}
        >
          <View>
            <Feather name="menu" size={24} style={{ color: colors.text }} onPress={() => navigation.openDrawer()} />
            <View style={styles.textGreetingWrapper}>
              <Text style={styles.textGreeting}>Frequently Asked</Text>
              <Text
                style={{
                  fontFamily: "SFProDisplay-Bold",
                  color: colors.text,
                  fontSize: 36,
                }}
              >
                Questions
              </Text>
            </View>
            <View style={styles.searchBarWrapper}>
              {/* Content */}
              <FaqCard />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {},
  contentWrapper: {},
  textGreetingWrapper: {
    paddingTop: Platform.OS === "ios" ? 20 : 15,
  },
  textGreeting: {
    fontFamily: "SFProDisplay-Bold",
    color: Colors.textLight,
    fontSize: 24,
  },
  textName: {},
  searchBarWrapper: {
    paddingTop: 15,
  },
});
