import { Feather } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import {
  Text,
  FlatList,
  Box,
  ScrollView,
  Row,
  Column,
  Switch,
  useColorMode,
  Icon,
  StatusBar,
} from "native-base";
import * as Haptics from "expo-haptics";
import HomeCard from "../components/cards/HeadingCard";
import researchTopics from "../data/LessonsData";
import OptionCard from "../components/cards/OptionCard";

interface Props {
  route: any;
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const renderItem = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          navigation.navigate("Lesson", {
            item: item,
          });
        }}
      >
        <Box
          flex={1}
          px={4}
          py={5}
          justifyContent="center"
          borderRadius={10}
          my={2}
          _light={{ bg: "light.100" }}
          _dark={{ bg: "dark.100" }}
        >
          <Row alignItems="center" justifyContent="space-between">
            <Box>
              <Row alignItems="center">
                <Box
                  p={2.5}
                  _light={{ bg: "emerald.100" }}
                  _dark={{ bg: "emerald.800" }}
                  borderRadius={10}
                  mr={3}
                >
                  <Icon
                    as={Feather}
                    name="book"
                    size={6}
                    _light={{ color: "emerald.900" }}
                    _dark={{ color: "emerald.100" }}
                  />
                </Box>
                <Text fontFamily="SFProDisplay-Bold" fontSize={20} mb={1}>
                  {item.title}
                </Text>
              </Row>
            </Box>
            <TouchableOpacity>
              <Box
                p={1.5}
                _light={{ bg: "gray.300" }}
                _dark={{ bg: "gray.600" }}
                borderRadius={5}
              >
                <Icon
                  as={Feather}
                  name="chevron-right"
                  size={4}
                  _light={{ color: "gray.700" }}
                  _dark={{ color: "gray.100" }}
                />
              </Box>
            </TouchableOpacity>
          </Row>
        </Box>
      </TouchableOpacity>
    );
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const isTablet =
    windowHeight > 900 && windowWidth > 900 && windowWidth / windowHeight < 1;

  return (
    <Box safeArea _light={{ bg: "light.50" }} _dark={{ bg: "dark.50" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar
          barStyle={colorMode === "light" ? "dark-content" : "light-content"}
        />
        <Box width={"90%"} mx={"auto"}>
          <Box>
            <Row flexDirection={"row-reverse"} alignItems={"center"} space={3}>
              <Switch
                isChecked={colorMode === "light" ? false : true}
                onToggle={toggleColorMode}
                aria-label={
                  colorMode === "light"
                    ? "switch to dark mode"
                    : "switch to light mode"
                }
              />
            </Row>

            <Column flexDirection={"column"}>
              <Text fontFamily={"SFProDisplay-SemiBold"} fontSize={20}>
                Welcome to
              </Text>
              <Text fontFamily={"SFProDisplay-Bold"} fontSize={34}>
                Research eModule
              </Text>
              <Text fontSize={13}>
                This is a research eModule for the University of the West
              </Text>
            </Column>
            <Box>


              <Text mx={1} mt={3} fontFamily={"SFProDisplay-Bold"} fontSize={15}>
                All Lessons
              </Text>

              <FlatList
                data={researchTopics}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={isTablet ? 2 : 1} // Set number of columns based on device type
              />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Home;
