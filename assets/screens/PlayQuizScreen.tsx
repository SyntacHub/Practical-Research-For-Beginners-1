import React, { useState, useEffect } from "react";
import { Box, Row, Icon, ScrollView, useColorMode, StatusBar, Text, Image, FlatList, Pressable} from "native-base";
import { getQuestionsByQuizId, getQuizById } from "../utils/database";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FormButton from "../components/buttons/FormButton";
import ResultModal from "../components/modals/ResultModal";
import AttemptLimitModal from "../components/modals/AttemptLimitModal";
import { useTheme } from "../theme/ThemeProvider";
import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { Feather } from "@expo/vector-icons";
interface Props {
  navigation: any;
  route: any;
}

const PlayQuizScreen: React.FC<Props> = ({ navigation, route }) => {
  const [currentQuizId] = useState(route.params.quizId);
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [attempted, setAttempted] = useState(3);
  const [isAttemptLimitModalVisible, setisAttemptLimitModalVisible] = useState(false);
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [isResultModalVisible, setIsResultModalVisible] = useState(false);

  const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const getQuizAndQuestionDetails = async () => {
    // Get Quiz
    let currentQuiz = await getQuizById(currentQuizId);
    currentQuiz = currentQuiz.data();
    setTitle(currentQuiz.title);

    // Get Questions for current quiz
    const questions = await getQuestionsByQuizId(currentQuizId);

    // Transform and shuffle options
    let tempQuestions: FirebaseFirestoreTypes.DocumentData[] = [];
    await questions.docs.forEach(async (res) => {
      let question = res.data();

      // Create Single array of all options and shuffle it

      question.allOptions = shuffleArray([...question.incorrect_answers, question.correct_answer]);
      await tempQuestions.push(question);
    });

    setQuestions([...tempQuestions]);
  };

  useEffect(() => {
    if (attempted <= 0) {
      setIsResultModalVisible(false);
      setisAttemptLimitModalVisible(true);
    }
  });

  useEffect(() => {
    getQuizAndQuestionDetails();
  }, []);

  // const getOptionBgColor = (currentQuestion: any, currentOption: any) => {
  //   if (currentQuestion.selectedOption) {
  //     if (currentOption == currentQuestion.selectedOption) {
  //       if (currentOption == currentQuestion.correct_answer) {
  //         return Colors.success;
  //       } else {
  //         return Colors.error;
  //       }
  //     } else {
  //       return ;
  //     }
  //   } else {
  //     return colors.elevated;
  //   }
  // };

  // const getOptionTextColor = (currentQuestion: any, currentOption: any) => {
  //   if (currentQuestion.selectedOption) {
  //     if (currentOption == currentQuestion.selectedOption) {
  //       return Colors.white;
  //     } else {
  //       return colors.heading5;
  //     }
  //   } else {
  //     return colors.heading5;
  //   }
  // };

  return (
    <Box flex={1} safeAreaTop _light={{ backgroundColor: "muted.100" }} _dark={{ backgroundColor: "gray.900" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        width={"90%"}
        mx={"auto"}
        _light={{ backgroundColor: "muted.100" }}
        _dark={{ backgroundColor: "gray.900" }}
      >
        <StatusBar animated barStyle={colorMode === "dark" ? "light-content" : "dark-content"} />

        <Row alignItems={"center"} justifyContent={"space-between"} paddingY={4}>
          <Icon as={Feather} name="arrow-left" size={6} onPress={() => navigation.goBack()} />

          {/* Correct and incorrect count */}
          <Row alignItems={"center"} justifyContent={"center"}>
            {/* Correct */}
            <Row
              alignItems={"center"}
              justifyContent={"center"}
              borderTopLeftRadius={"xl"}
              borderBottomLeftRadius={"xl"}
              paddingX={3}
              paddingY={1}
              _dark={{ backgroundColor: "emerald.800" }}
              _light={{ backgroundColor: "emerald.300" }}
            >
              <Icon
                as={MaterialIcons}
                name="check"
                size={14}
                _dark={{ color: "emerald.300" }}
                _light={{ color: "emerald.800" }}
              />

              <Text _dark={{ color: "emerald.300" }} _light={{ color: "emerald.800" }} fontFamily={"SFProDisplay-Bold"}>
                {correctCount}
              </Text>
            </Row>

            {/* Incorrect */}
            <Row
              alignItems={"center"}
              justifyContent={"center"}
              borderTopRightRadius={"xl"}
              borderBottomRightRadius={"xl"}
              paddingX={3}
              paddingY={1}
              _dark={{ backgroundColor: "red.800" }}
              _light={{ backgroundColor: "red.300" }}
            >
              <Icon
                as={MaterialIcons}
                name="close"
                size={14}
                _dark={{ color: "red.300" }}
                _light={{ color: "red.800" }}
              />
              <Text _dark={{ color: "red.300" }} _light={{ color: "red.800" }} fontFamily={"SFProDisplay-Bold"}>
                {incorrectCount}
              </Text>
            </Row>
          </Row>
        </Row>

        {/* Header */}
        <Box paddingY={2}>
          <Text fontSize={"2xl"} fontFamily={"SFProDisplay-Bold"}>
            {title}
          </Text>
          <Text fontSize={"xl"} fontFamily={"SFProDisplay-Medium"}>
            Quarter 1: Lesson 1
          </Text>
        </Box>

        {/* Questions and Options list */}
        <FlatList
          data={questions}
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.question}
          renderItem={({ item, index }) => (
            <Box
              marginTop={4}
              borderRadius={"xl"}
              _light={{ backgroundColor: "gray.200" }}
              _dark={{ backgroundColor: "gray.800" }}
            >
              <Box padding={4} borderRadius={"2xl"}>
                <Text fontSize={"md"} fontFamily={"SFProDisplay-Bold"}>
                  {index + 1}. {item.question}
                </Text>
                {item.imageUrl != "" ? (
                  <Image
                    source={{
                      uri: item.imageUrl,
                    }}
                    width={"80%"}
                    height={150}
                    borderRadius={"xl"}
                    marginTop={10}
                    marginLeft={"10%"}
                    resizeMode={"contain"}
                  />
                ) : null}
              </Box>
              {/* Options */}
              {item.allOptions.map(
                (
                  option: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined,
                  optionIndex: React.Key | null | undefined
                ) => {
                  return (
                    <Pressable
                      key={optionIndex}
                      paddingY={4}
                      paddingX={3}
                      _light={{ backgroundColor: "gray.200" }}
                      _dark={{ backgroundColor: "gray.800" }}
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"flex-start"}
                      // style={{
                      //   paddingVertical: 14,
                      //   paddingHorizontal: 20,
                      //   borderTopWidth: 1,
                      //   borderColor: colors.heading5,
                      //   backgroundColor: getOptionBgColor(item, option),
                      //   flexDirection: "row",
                      //   alignItems: "center",
                      //   justifyContent: "flex-start",
                      // }}
                      onPress={() => {
                        if (item.selectedOption) {
                          return null;
                        }
                        // Increase correct/incorrect count
                        if (option == item.correct_answer) {
                          setCorrectCount(correctCount + 1);
                        } else {
                          setIncorrectCount(incorrectCount + 1);
                        }

                        let tempQuestions = [...questions];
                        tempQuestions[index].selectedOption = option;
                        setQuestions([...tempQuestions]);
                      }}
                    >
                      <Text
                        padding={2}
                        textAlign={"center"}
                        mr={3}

                        // style={{
                        //   width: 25,
                        //   height: 25,
                        //   padding: 2,

                        //   textAlign: "center",
                        //   marginRight: 16,
                        //   borderRadius: 5,
                        //   color: getOptionTextColor(item, option),
                        //   fontFamily: "SFProDisplay-Medium",
                        // }}
                      >
                        {optionIndex + 1}
                      </Text>
                      <Text
                        fontFamily={"SFProDisplay-Medium"}
                        // style={{
                        //   color: getOptionTextColor(item, option),
                        //   fontFamily: "SFProDisplay-Medium",
                        // }}
                      >
                        {option}
                      </Text>
                    </Pressable>
                  );
                }
              )}
            </Box>
          )}
          ListFooterComponent={() => (
            <FormButton
              labelText="Submit"
              style={{ margin: 10 }}
              handleOnPress={() => {
                // Show Result modal
                setAttempted(attempted - 1);

                if (attempted <= 0) {
                  setisAttemptLimitModalVisible(true);
                } else {
                  setIsResultModalVisible(true);
                }
              }}
            />
          )}
        />

        {/* Result Modal */}
        <ResultModal
          isModalVisible={isResultModalVisible}
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          attemptsLeftCount={attempted}
          totalCount={questions.length}
          handleOnClose={() => {
            setIsResultModalVisible(false);
          }}
          handleRetry={() => {
            setCorrectCount(0);
            setIncorrectCount(0);
            getQuizAndQuestionDetails();
            setIsResultModalVisible(false);
          }}
          handleHome={() => {
            navigation.goBack();
          }}
        />

        {/* Result Modal */}
        <AttemptLimitModal
          isModalVisible={isAttemptLimitModalVisible}
          attemptsLeftCount={attempted}
          handleOnClose={() => {
            setIsResultModalVisible(false);
          }}
          handleHome={() => {
            setIsResultModalVisible(false);
          }}
        />
      </ScrollView>
    </Box>
  );
};

export default PlayQuizScreen;
