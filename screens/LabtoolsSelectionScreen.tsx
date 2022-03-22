import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React  from "react";
import {  FlatList, TouchableOpacity, StyleSheet, NativeModules } from "react-native";
import { Box, Text, Row, Icon, ScrollView, Column, useColorMode ,StatusBar} from "native-base";
import LabToolsCard from "../components/cards/LabtoolsCard";
import LabToolsData from "../data/LabToolsData";

import * as Haptics from "expo-haptics";
interface Props {
  navigation: any;
}

const LabtoolsScreen: React.FC<Props> = ({ navigation }) => {

  const { colorMode, toggleColorMode } = useColorMode();

  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          navigation.navigate("LabtoolsDetail", {
            item: item,
          });
        }}
      >
        <Box
          paddingX={3}
          paddingY={3}
          justifyContent={"center"}
          _light={{ backgroundColor: "gray.200" }}
          _dark={{ backgroundColor: "gray.800" }}
          marginY={2}
          borderRadius={"2xl"}
        >
          <Row alignItems={"center"}>
            <Box
              _dark={{ backgroundColor: "emerald.600" }}
              _light={{ backgroundColor: "emerald.300" }}
              borderRadius={"xl"}
              padding={3}
              justifyContent={"center"}
            >
              <Icon
                as={Entypo}
                name={"lab-flask"}
                size="6"
                _dark={{ color: "emerald.300" }}
                _light={{ color: "emerald.800" }}
              />
            </Box>

            <Column style={{ flexDirection: "column", marginLeft: 15 }}>
              <Text
                fontFamily={"SFProDisplay-Bold"}
                _dark={{ color: "gray.50" }}
                _light={{ color: "gray.700" }}
                fontSize={"xl"}
              >
                {item.labtool_name}
              </Text>
              <Text
                fontFamily={"SFProDisplay-Medium"}
                fontSize={"sm"}
                _dark={{ color: "gray.50" }}
                _light={{ color: "gray.700" }}
              >
                {item.labtool_desc}
              </Text>
            </Column>
          </Row>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <Box safeAreaTop flex={1} _light={{ backgroundColor: "muted.100" }} _dark={{ backgroundColor: "gray.900" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        _light={{ backgroundColor: "muted.100" }}
        _dark={{ backgroundColor: "gray.900" }}
      >
        <StatusBar animated barStyle={colorMode === "dark" ? "light-content" : "dark-content"} />
        {/* Header */}
        <Box width={"90%"} mx={"auto"} my={4}>
          <Box marginY={4}>
            <Icon as={Feather} name="arrow-left" size={6} onPress={() => navigation.goBack()} />
          </Box>

          <Box paddingTop={1}>
            <Text fontFamily={"SFProDisplay-Medium"} fontSize={"lg"}>
              Research Tools
            </Text>
            <Text fontFamily={"SFProDisplay-Bold"} fontSize={"3xl"}>
              Scientific Laboratory Tools & Apparatus
            </Text>
          </Box>
          <LabToolsCard />
          <Box py={3}>
            <Text fontFamily={"SFProDisplay-Medium"} fontSize={"md"}>
              Augmented Reality (AR) uses resources heavily like Camera,CPU,GPU and Neural Engine. Device’s battery life
              will be shortened during an extended period of time using Augmented Reality.
            </Text>
          </Box>

          <Text fontFamily={"SFProDisplay-Bold"} fontSize={15} paddingTop={7}>
            All Common Laboratory Tools
          </Text>
          <FlatList data={LabToolsData} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </Box>
      </ScrollView>
    </Box>
  );
};
export default LabtoolsScreen;

