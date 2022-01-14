import { Feather} from "@expo/vector-icons";
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
import Colors from "../../constants/colors";

import HomeCard from "../../components/cards/HomeCard";
import researchTopics from "../../data/LessonsData";
import ResearchAssistantCard from "../../components/cards/AssistantCardMenu";
import LabtoolsCard from "../../components/cards/LabtoolsCardMenu";
import { useTheme } from "../../theme/ThemeProvider";

const Analytics: React.FC<{}> = () => {
  return(
    <View>
      <Text>
      Hello Research Analytics
      </Text>
      
    </View>
  )

}
export default Analytics;