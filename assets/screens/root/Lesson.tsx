import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
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

interface Props {route:any}

const Lesson: React.FC<Props> = ({route}) => {
  const navigation = useNavigation<any>();
  const { item } = route.params;
  console.log(item);
  console.log("Lesson Initialized");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
       {/* Header */}
				<View style={styles.contentWrapper}>
					<View>
						<Feather
							name="arrow-left"
							size={24}
							color="black"
							onPress={() => navigation.goBack()}
						/>
						<View style={styles.textGreetingWrapper}>
							<Text style={styles.textGreeting}>This is </Text>
							<Text style={styles.textName}>{item.title}</Text>
						</View>
						
					</View>
				</View>
      </ScrollView>
    </SafeAreaView>
  );
  
  };
  
export default Lesson;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
		fontSize: 25,
	},
	textName: {
		fontFamily: "SFProDisplay-Bold",
		color: Colors.text,
		fontSize: 35,
	},
});
