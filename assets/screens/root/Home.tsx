import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../../constants/colors";
import SearchBarInput from "../../components/inputs/SearchBarInput";
import { SearchBar } from "react-native-screens";

interface Props {}

const Home: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  console.log("HomeView Initialized");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentWrapper}>
          <View>
            <Feather name="menu" size={24} color="black" />
            <View style={styles.textGreetingWrapper}>
              <Text style={styles.textGreeting}>Good Morning</Text>
              <Text style={styles.textName}>Tristan Listanco</Text>
            </View>
            <View style={styles.searchBarWrapper}>
            <SearchBarInput/>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentWrapper: {
    marginTop: Platform.OS === "ios" ? 35 : 50,
    marginLeft: 25,
    marginRight: 25,
  },
  textGreetingWrapper: {
    paddingTop: Platform.OS === "ios" ? 11 : 15,
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
});
