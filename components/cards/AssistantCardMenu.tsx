import React from "react";

import { Box, Text, Row, Icon, Pressable } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons";

import * as Haptics from "expo-haptics";

interface Props {}
const ResearchAssistantCardMenu: React.FC<Props> = () => {
  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }}
      borderRadius={"xl"}
      paddingY={5}
      marginRight={3}
      paddingX={5}
      _dark={{ backgroundColor: "emerald.600" }}
      _light={{ backgroundColor: "emerald.300" }}
      flex={1}
    >
      <Box height={"20%"} borderRadius={"2xl"} width={"30%"} justifyContent={"center"} alignItems={"center"}>
        <Icon as={Entypo} name="chat" size={7} _dark={{ color: "emerald.300" }} _light={{ color: "emerald.600" }} />
      </Box>
      <Text
        fontFamily={"SFProDisplay-Bold"}
        fontSize={"xl"}
        lineHeight={25}
        marginTop={1}
        _dark={{ color: "emerald.300" }}
        _light={{ color: "emerald.600" }}
      >
        Research Assistant AI Chatbot
      </Text>
      <Text
        fontFamily={"SFProDisplay-Regular"}
        fontSize={"xs"}
        lineHeight={16}
        marginTop={2}
        _dark={{ color: "emerald.300" }}
        _light={{ color: "emerald.600" }}
      >
        Get some help on a specific topic
      </Text>
    </Pressable>
  );
};
export default ResearchAssistantCardMenu;
