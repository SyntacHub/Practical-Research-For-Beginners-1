import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StatusBar,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import researchTopics from "../data/LessonsData";
import {
  Text,
  Box,
  Row,
  Column,
  ScrollView,
  Icon,
  useColorMode,
} from "native-base";

interface Props {
  route: any;
}

const Lesson: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<any>();
  const { item } = route.params;
  const { colorMode, toggleColorMode } = useColorMode();
  
  const windowWidth = Dimensions.get('window').width;

  return (
    <Box
      safeArea
      _light={{ bg: "light.50" }}
      _dark={{ bg: "dark.50" }}
      minHeight={"100%"}
    >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar
          barStyle={colorMode === "light" ? "dark-content" : "light-content"}
        />
        <Box width={windowWidth * 0.9} mx={"auto"}>
          <Row justifyContent={"space-between"}>
            <TouchableOpacity>
              <Box
                p={2.5}
                _light={{ bg: "emerald.100" }}
                _dark={{ bg: "emerald.800" }}
                borderRadius={10}
              >
                <Icon
                  as={Feather}
                  name="arrow-left"
                  size={6}
                  _light={{ color: "emerald.900" }}
                  _dark={{ color: "emerald.100" }}
                  onPress={() => navigation.goBack()}
                />
              </Box>
            </TouchableOpacity>
            <TouchableOpacity>
              <Box
                p={2.5}
                _light={{ bg: "emerald.100" }}
                _dark={{ bg: "emerald.800" }}
                borderRadius={10}
              >
                <Icon
                  as={Feather}
                  name="book"
                  size={6}
                  _light={{ color: "emerald.900" }}
                  _dark={{ color: "emerald.100" }}
                  onPress={() => navigation.goBack()}
                />
              </Box>
            </TouchableOpacity>
          </Row>
					<Box my={4}>
  <Text
    fontFamily={"SFProDisplay-Bold"}
    fontSize={24}
    mt={2}
    color={colorMode === "light" ? "black" : "white"}
  >
    {item.title}
  </Text>
  <Text
    fontFamily={"SFProDisplay-Bold"}
    fontSize={18}
    mt={2}
    color={colorMode === "light" ? "gray.700" : "gray.300"}
  >
    {item.topicIndex}
  </Text>
  <Text
    fontFamily={"SFProDisplay-Regular"}
    fontSize={16}
    mt={4}
    lineHeight={24}
    color={colorMode === "light" ? "gray.800" : "gray.200"}
  >
    {item.content.paragraph1}
  </Text>
  <Text
    fontFamily={"SFProDisplay-Regular"}
    fontSize={16}
    mt={2}
    lineHeight={24}
    color={colorMode === "light" ? "gray.800" : "gray.200"}
  >
    {item.content.paragraph2}
  </Text>
  <Text
    fontFamily={"SFProDisplay-Regular"}
    fontSize={16}
    mt={2}
    lineHeight={24}
    color={colorMode === "light" ? "gray.800" : "gray.200"}
  >
    {item.content.paragraph3}
  </Text>
</Box>


        </Box>
      </ScrollView>
    </Box>
  );
};

export default Lesson;
