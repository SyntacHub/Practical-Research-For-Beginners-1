
import React from "react";
import { Entypo } from "@expo/vector-icons";
import {Box,Text,Pressable,Icon} from 'native-base'

import * as Haptics from "expo-haptics";
interface Props{}

const FaqCardMenu:React.FC<Props> = () => {
  
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }}
      borderRadius={"xl"}
      paddingY={5}
      marginRight={3}
      paddingX={5}
      _dark={{ backgroundColor: "violet.600" }}
      _light={{ backgroundColor: "violet.300" }}
      flex={1}
    >
      <Box height={"20%"} borderRadius={"2xl"} width={"30%"} justifyContent={"center"} alignItems={"center"}>
        <Icon as={Entypo} name="chat" size={7} _dark={{ color: "violet.300" }} _light={{ color: "violet.600" }} />
      </Box>
      <Text
        fontFamily={"SFProDisplay-Bold"}
        fontSize={"xl"}
        lineHeight={25}
        marginTop={1}
        _dark={{ color: "violet.300" }}
        _light={{ color: "violet.600" }}
      >
        FAQs & Queries
      </Text>
      <Text
        fontFamily={"SFProDisplay-Regular"}
        fontSize={"xs"}
        lineHeight={16}
        marginTop={2}
        _dark={{ color: "violet.300" }}
        _light={{ color: "violet.600" }}
      >
        View Frequently Asked Questions
      </Text>
    </Pressable>
  );
};
export default FaqCardMenu;
