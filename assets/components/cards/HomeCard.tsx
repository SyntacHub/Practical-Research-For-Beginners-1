import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, Row, Column } from "native-base";
import * as Haptics from "expo-haptics";
import { HomeCardImage } from "../svgs";

interface Props {}

const HomeCard: React.FC<Props> = () => {
  const navigation = useNavigation<any>();

  return (
    <Row
      _dark={{ backgroundColor: "emerald.900" }}
      _light={{ backgroundColor: "emerald.600" }}
      justifyContent={"center"}
      paddingX={5}
      marginY={2.5}
      space={3}
      mx={"auto"}
      paddingY={4}
      borderRadius={"2xl"}
    >
      <Row overflow={"hidden"} alignItems={"center"} flex={1}>
        <Column space={3}>
          <Text
            fontFamily={"Poppins-SemiBold"}
            fontSize={"xl"}
            lineHeight={27}
            _dark={{ color: "emerald.500" }}
            _light={{ color: "emerald.200" }}
          >
            Test your Knowledge in Research
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Quiz");
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            }}
          >
            <Box
              _dark={{ backgroundColor: "emerald.500" }}
              _light={{ backgroundColor: "emerald.200" }}
              paddingY={1.5}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"md"}
            >
              <Text
                overflow={"hidden"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"md"}
                fontFamily={"SFProDisplay-Bold"}
                _dark={{ color: "emerald.900" }}
                _light={{ color: "emerald.600" }}
              >
                Get Started
              </Text>
            </Box>
          </TouchableOpacity>
        </Column>
      </Row>

      <HomeCardImage width={150} height={140} preserveAspectRatio={"true"} />
    </Row>
  );
};

export default HomeCard;
