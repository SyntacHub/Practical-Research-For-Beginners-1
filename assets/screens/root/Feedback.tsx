import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

interface Props {}

const Feedback: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  console.log("HomeView Initialized");
  return (
    <SafeAreaView  style={styles.container} >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View>
            <Feather name="menu" size={24} color="black" />
            <Text>This is </Text>
            <Text>Subtopics</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
