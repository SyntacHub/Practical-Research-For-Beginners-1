import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
import React from "react";

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  View,
  TouchableOpacity,
  NativeModules,
} from "react-native";
import { Box, Text, Icon, ScrollView, useColorMode, Row } from "native-base";
import researchTopics from "../data/LessonsData";
import { useTheme } from "../theme/ThemeProvider";
import { LessonCardImage } from "../components/svgs";
interface Props {
  route: any;
}

const LessonScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<any>();
  const { colors, isDark } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const { item } = route.params;

  return (
    <Box safeAreaTop flex={1} _light={{ backgroundColor: "muted.100" }} _dark={{ backgroundColor: "gray.900" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        width={"90%"}
        mx={"auto"}
        _light={{ backgroundColor: "muted.100" }}
        _dark={{ backgroundColor: "gray.900" }}
      >
        <StatusBar animated barStyle={colorMode === "dark" ? "light-content" : "dark-content"} />
        {/* Header */}
        <Box marginY={4}>
          <Icon as={Feather} name="arrow-left" size={6} onPress={() => navigation.goBack()} />
        </Box>

        <Box>
          <Text fontFamily={"SFProDisplay-Bold"} fontSize={"3xl"}>
            {item.title}
          </Text>
          <Text fontFamily={"SFProDisplay-Medium"} fontSize={"md"}>
            {item.topicIndex}
          </Text>
        </Box>

        {/*Content*/}
        <Row
          justifyContent={"center"}
          alignItems={"center"}
          paddingY={3}
          marginY={5}
          borderRadius={"3xl"}
          _dark={{ backgroundColor: "emerald.400" }}
          _light={{ backgroundColor: "emerald.200" }}
        >
          <LessonCardImage width={430} height={155} preserveAspectRatio={"true"} />
        </Row>

        {/*Content 2*/}

        <Text fontFamily={"SFProDisplay-Bold"} fontSize={"2xl"}>
          Sample Text
        </Text>
        <Text fontFamily={"SFProDisplay-Regular"} fontSize={"md"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates aperiam repellat eius vero
          itaque. Eligendi minus vitae libero optio deserunt, cum quae quaerat maxime rem amet quas? Accusantium,
          dolores.
        </Text>

        <Text fontFamily={"SFProDisplay-Bold"} fontSize={"2xl"} marginTop={12}>
          Sample Text
        </Text>
        <Text fontFamily={"SFProDisplay-Regular"} fontSize={"md"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates aperiam repellat eius vero
          itaque. Eligendi minus vitae libero optio deserunt, cum quae quaerat maxime rem amet quas? Accusantium,
          dolores.
        </Text>
      </ScrollView>
    </Box>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  topicImage: {
    alignSelf: "center",
  },
});
