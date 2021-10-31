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
import AboutCard from "../../components/cards/AboutCard";
import Acknowledgements from "../../components/cards/AcknowledgementCard"

interface Props {}

const About: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  console.log("AboutView Initialized");
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
              <Text style={styles.textGreeting}>Acknowledgements &</Text>
              <Text style={styles.textName}>About</Text>
            </View>
            <View style={styles.searchBarWrapper}>
            

              {/* Content */}
        
              <AboutCard/>
              <Acknowledgements/>

              
          
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
  
  };
  
export default About;

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
    fontFamily: "SFProDisplay-Bold",
    color: Colors.textLight,
    fontSize: 24,
  },
  textName: {
    fontFamily: "SFProDisplay-Bold",
    color: Colors.text,
    fontSize: 36,
  },
  searchBarWrapper: {
    paddingTop: 15,
  },

  
  aboutContent:{
    backgroundColor: "#F1F1F1",
    marginTop: 15,
    height: 100,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 11,
  },
});
