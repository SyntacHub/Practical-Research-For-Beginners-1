import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Box, Text, Row, ScrollView, FlatList, Icon, Pressable, useColorMode } from "native-base";
import { Feather } from "@expo/vector-icons";
import { getQuizzes } from "../utils/database";
import AssesmentCard from "../components/cards/AssesmentCard";
import { useTheme } from "../theme/ThemeProvider";
import * as Haptics from "expo-haptics";
interface Props {
  navigation: any;
}
const QuizSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const { colors, isDark } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  const getAllQuizzes = async () => {
    setRefreshing(true);
    const quizzes = await getQuizzes();

    // Transform quiz data
    let tempQuizzes: { id: string }[] = [];
    await quizzes.docs.forEach(async (quiz) => {
      await tempQuizzes.push({ id: quiz.id, ...quiz.data() });
    });
    setAllQuizzes([...tempQuizzes]);

    setRefreshing(false);
  };

  useEffect(() => {
    getAllQuizzes();
  }, []);

  return (
    <Box safeAreaTop flex={1} _light={{ backgroundColor: "muted.100" }} _dark={{ backgroundColor: "gray.900" }}>
      <StatusBar animated barStyle={colorMode === "dark" ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        _light={{ backgroundColor: "muted.100" }}
        _dark={{ backgroundColor: "gray.900" }}
        width={"90%"}
        mx={"auto"}
      >
        <Row justifyContent={"space-between"} paddingY={4}>
          <Icon as={Feather} name="arrow-left" size={6} onPress={() => navigation.goBack()} />
          <Icon as={Feather} name="info" size={6} onPress={() => navigation.goBack()} />
        </Row>

        <Box py={2}>
          <Text fontFamily={"SFProDisplay-Bold"} fontSize={"3xl"}>
            Research Assesments
          </Text>
          <Text fontFamily={"SFProDisplay-Medium"} fontSize={"md"}>
            Updated on December 23, 2021
          </Text>
        </Box>

        {/* Quiz list */}
        <FlatList
          data={allQuizzes}
          onRefresh={getAllQuizzes}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          style={{
            paddingVertical: 10,
          }}
          renderItem={({ item: quiz }) => (
            <Row
              padding={4}
              borderRadius={"xl"}
              my={2}
              alignItems={"center"}
              justifyContent={"space-between"}
              _light={{ backgroundColor: "gray.200" }}
              _dark={{ backgroundColor: "gray.800" }}
            >
              <Box flex={1}>
                <Text fontSize={"lg"} fontFamily={"SFProDisplay-Bold"}>
                  {quiz.title}
                </Text>
                {quiz.description != "" ? (
                  <Text mt={2} fontFamily={"SFProDisplay-Medium"} fontSize={"xs"}>
                    {quiz.description}
                  </Text>
                ) : null}
              </Box>
              <Pressable
                paddingY={2}
                paddingX={8}
                borderRadius={"2xl"}
                _dark={{ backgroundColor: "emerald.800" }}
                _light={{ backgroundColor: "emerald.300" }}
                onPress={() => {
                  {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    navigation.navigate("PlayQuiz", {
                      quizId: quiz.id,
                    });
                  }
                }}
              >
                <Text
                  _dark={{ color: "emerald.300" }}
                  _light={{ color: "emerald.800" }}
                  fontFamily={"SFProDisplay-Bold"}
                >
                  Play
                </Text>
              </Pressable>
            </Row>
          )}
        />
      </ScrollView>
    </Box>
  );
};

export default QuizSelectionScreen;
