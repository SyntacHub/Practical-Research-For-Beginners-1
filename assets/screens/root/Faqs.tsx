import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Colors from "../../constants/Colors";
import * as React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FaqCard from "../../components/cards/FaqCard";
import QACard from "../../components/cards/QACard";

interface Props {}

const Faqs: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  console.log("FaqsView Initialized");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
         <StatusBar style="auto" />
        {/* Header */}
        <View style={styles.contentWrapper}>
          <View>
            <Feather
              name="menu"
              size={24}
              color="black"
              onPress={() => navigation.openDrawer()}
            />
            <View style={styles.textGreetingWrapper}>
              <Text style={styles.textGreeting}>Frequently Asked</Text>
              <Text style={styles.textName}>Questions</Text>
            </View>
            <View style={styles.searchBarWrapper}>
            

              {/* Content */}
              <FaqCard/>
              <QACard/>
              <QACard/>
              <QACard/>
              <QACard/>
          
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
  };
  
export default Faqs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentWrapper: {
    marginTop: Platform.OS === "ios" ? 15 : 50,
    marginLeft: 25,
    marginRight: 25,
  },
  textGreetingWrapper: {
    paddingTop: Platform.OS === "ios" ? 20 : 15,
  },
  textGreeting: {
    fontFamily: "Proxima-Nova-Medium",
    color: Colors.textLight,
    fontSize: 24,
  },
  textName: {
    fontFamily: "Proxima-Nova-Bold",
    color: Colors.text,
    fontSize: 36,
  },
  searchBarWrapper: {
    paddingTop: 15,
  },

  textQuarterlyLessons: {
    fontFamily: "Proxima-Nova-Bold",
    fontSize: 18,
    marginTop: 15,
  },
});
