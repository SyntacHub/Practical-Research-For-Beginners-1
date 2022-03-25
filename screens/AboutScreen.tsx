import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Box, Text, Icon, FlatList, Row, Column, ScrollView, useColorMode, StatusBar } from "native-base";
import AboutCard from "../components/cards/AboutCard";
import Acknowledgements from "../data/AcknowledgementsData";
import Others from "../data/OthersData";
import FeedbackCardMenu from "../components/cards/FeedbackCardMenu";
import FaqCardMenu from "../components/cards/FaqCardMenu";

interface Props {}

const About: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  const { colorMode, toggleColorMode } = useColorMode();

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Column my={1}>
        <Row paddingY={2}>
          <Box
            _dark={{ backgroundColor: "emerald.600" }}
            _light={{ backgroundColor: "emerald.300" }}
            borderRadius={"xl"}
            padding={3}
            justifyContent={"center"}
          >
            <Icon
              as={Feather}
              name={"alert-circle"}
              size="6"
              _dark={{ color: "emerald.300" }}
              _light={{ color: "emerald.800" }}
            />
          </Box>

          <Column style={{ flexDirection: "column", marginLeft: 15 }}>
            <Text
              fontFamily={"SFProDisplay-Bold"}
              _dark={{ color: "gray.50" }}
              _light={{ color: "gray.800" }}
              fontSize={"xl"}
            >
              {item.person}
            </Text>
            <Text
              fontFamily={"SFProDisplay-Medium"}
              fontSize={"sm"}
              _dark={{ color: "gray.50" }}
              _light={{ color: "gray.700" }}
            >
              {item.contrib}
            </Text>
          </Column>
        </Row>
      </Column>
    );
  };
  const renderOthersItem = ({ item }: { item: any }) => {
    return (
      <Column my={1}>
        <Row paddingY={2}>
          <Box
            _dark={{ backgroundColor: "emerald.600" }}
            _light={{ backgroundColor: "emerald.300" }}
            borderRadius={"xl"}
            padding={3}
            justifyContent={"center"}
          >
            <Icon
              as={Feather}
              name={"alert-circle"}
              size="6"
              _dark={{ color: "emerald.300" }}
              _light={{ color: "emerald.800" }}
            />
          </Box>

          <Column style={{ flexDirection: "column", marginLeft: 15 }}>
            <Text
              fontFamily={"SFProDisplay-Bold"}
              _dark={{ color: "gray.50" }}
              _light={{ color: "gray.800" }}
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
              {item.desc}
            </Text>
          </Column>
        </Row>
      </Column>
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
        <Box width={"90%"} mx={"auto"}>
          <Icon as={Feather} name="menu" size={7} onPress={() => navigation.openDrawer()} />
          <Box paddingY={5}>
            <Text fontFamily={"SFProDisplay-Bold"} fontSize={"4xl"}>
              About Us
            </Text>
          </Box>
          <Box>
            {/* Content */}

            <AboutCard />
            <Row flex={1} paddingY={3} >
              <FeedbackCardMenu />
              <FaqCardMenu />
            </Row>

            <Box
              _light={{ backgroundColor: "gray.200" }}
              _dark={{ backgroundColor: "gray.800" }}
              borderRadius={"xl"}
              paddingX={3}
              paddingY={2}
              marginY={2}
            >
              <Text fontSize={"md"} my={2} fontFamily={"SFProDisplay-Bold"}>
                Acknowledgements
              </Text>
              <FlatList data={Acknowledgements} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </Box>

            <Box
              _light={{ backgroundColor: "gray.200" }}
              _dark={{ backgroundColor: "gray.800" }}
              borderRadius={"xl"}
              paddingX={3}
              paddingY={2}
              marginY={2}
            >
              <Text fontSize={"md"} my={2} fontFamily={"SFProDisplay-Bold"}>
                License and Agreement
              </Text>
              <FlatList data={Others} renderItem={renderOthersItem} keyExtractor={(item) => item.id} />
            </Box>
            <Box style={{ alignItems: "center", paddingVertical: 30 }}>
              <Text fontFamily={'SFProDisplay-Bold'} fontSize={"xl"}>
                Iligan City National High School
              </Text>
              <Text fontFamily={'SFProDisplay-Bold'} fontSize={"md"}>Copyright 2022</Text>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default About;
