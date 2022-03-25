import { Feather } from "@expo/vector-icons";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Box, Text, Row, ScrollView, Column, Icon, useColorMode, StatusBar } from "native-base";
import HomeCard from "../components/cards/HomeCard";
import researchTopics from "../data/LessonsData";
import ResearchAssistantCard from "../components/cards/AssistantCardMenu";
import LabtoolsCard from "../components/cards/LabtoolsCardMenu";

import * as Haptics from "expo-haptics";
import BaseScreen from "../components/BaseScreen";
import ScreenHeader from "../components/header/ScreenHeader";

interface Props {
  route: any;
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const ItemMenu = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          navigation.push("Lesson", {
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
                as={Feather}
                name={"book-open"}
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
                {item.title}
              </Text>
              <Text
                fontFamily={"SFProDisplay-Medium"}
                fontSize={"sm"}
                _dark={{ color: "gray.50" }}
                _light={{ color: "gray.700" }}
              >
                {item.courseDesc}
              </Text>
            </Column>
          </Row>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <BaseScreen>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        _light={{ backgroundColor: "muted.100" }}
        _dark={{ backgroundColor: "gray.900" }}
      >
        <Box width={"90%"} mx={"auto"} my={3}>
          <ScreenHeader
            title="Practical Research Grade 7"
            leftButtonOptions={{ type: "drawer" }}
            secondary_title={"Lesson Dashboard"}
          />

          <HomeCard />
          <Row flex={1} paddingY={3}>
            <ResearchAssistantCard />
            <LabtoolsCard />
          </Row>
          <Text fontFamily={"SFProDisplay-Bold"} fontSize={15} paddingTop={7}>
            All Research 1 Lessons
          </Text>

          <FlatList data={researchTopics} renderItem={ItemMenu} keyExtractor={(item) => item.id} />
        </Box>
      </ScrollView>
    </BaseScreen>
  );
};

export default Home;
