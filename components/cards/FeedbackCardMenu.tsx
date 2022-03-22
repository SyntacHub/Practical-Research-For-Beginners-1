import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Linking, StyleSheet, TouchableOpacity, View } from "react-native";
import { Box, Text, Pressable, Icon } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";
import { useTheme } from "../../theme/ThemeProvider";
import * as Haptics from "expo-haptics";
interface Props {}

const FeedbackCardMenu: React.FC<Props> = () => {
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        Linking.openURL(
          "mailto:tannyencina@gmail.com?subject=Practical Research For Beginners Feedback Report&body=My Feedback Report"
        )
      }}
     
      borderRadius={"xl"}
      paddingY={5}
      marginRight={3}
      paddingX={5}
      _dark={{ backgroundColor: "teal.600" }}
      _light={{ backgroundColor: "teal.300" }}
      flex={1}
    >
      <Box height={"20%"} borderRadius={"2xl"} width={"30%"} justifyContent={"center"} alignItems={"center"}>
        <Icon as={Entypo} name="chat" size={7} _dark={{ color: "teal.300" }} _light={{ color: "teal.600" }} />
      </Box>
      <Text
        fontFamily={"SFProDisplay-Bold"}
        fontSize={"xl"}
        lineHeight={25}
        marginTop={1}
        _dark={{ color: "teal.300" }}
        _light={{ color: "teal.600" }}
      >
        Feedback & Bug Report
      </Text>
      <Text
        fontFamily={"SFProDisplay-Regular"}
        fontSize={"xs"}
        lineHeight={16}
        marginTop={2}
        _dark={{ color: "teal.300" }}
        _light={{ color: "teal.600" }}
      >
        Send your Feedback and Reports in our Email
      </Text>
    </Pressable>
  );
};
export default FeedbackCardMenu;
