import React from "react";
import { Box, Text, Icon, Pressable } from "native-base";
import { Entypo } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";

interface Props {}
const LabtoolsCardMenu: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Labtools");
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
      }}
      borderRadius={"xl"}
      paddingY={5}
      paddingX={5}
      _dark={{ backgroundColor: "green.700" }}
      _light={{ backgroundColor: "green.300" }}
      flex={1}
    >
      <Box height={"25%"} borderRadius={20 / 2} width={"30%"} justifyContent={"center"} alignItems={"center"}>
        <Icon as={Entypo} name="lab-flask" size={7} _dark={{ color: "green.400" }} _light={{ color: "green.600" }} />
      </Box>
      <Text
        fontFamily={"SFProDisplay-Bold"}
        fontSize={"xl"}
        lineHeight={25}
        marginTop={1}
        _dark={{ color: "green.400" }}
        _light={{ color: "green.600" }}
      >
        Scientific Laboratory Tools
      </Text>
      <Text
        fontFamily={"SFProDisplay-Regular"}
        fontSize={"xs"}
        lineHeight={16}
        marginTop={2}
        _dark={{ color: "green.300" }}
        _light={{ color: "green.600" }}
      >
        Turn your room into a Science Laboratory
      </Text>
    </Pressable>
  );
};
export default LabtoolsCardMenu;
