import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {
	Platform,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	Image,
	FlatList,
	View,
	TouchableOpacity,
	
} from "react-native";
interface Props {
	route: any;
	props: any;
}
const Quiz: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<any>();

  return(
    <SafeAreaView>
      <Text>
        Can't Read my Poker Face
      </Text>
    </SafeAreaView>
  );
};
export default Quiz;