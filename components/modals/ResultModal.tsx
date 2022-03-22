import React from "react";
import { TouchableOpacity, Modal } from "react-native";
import Colors from "../../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Box, Text, Row } from "native-base";

const ResultModal = ({
  isModalVisible,
  correctCount,
  totalCount,
  incorrectCount,
  handleOnClose,
  handleRetry,
  attemptsLeftCount,
  handleHome,
}: {
  isModalVisible: boolean;
  correctCount: number;
  totalCount: number;
  incorrectCount: number;
  handleOnClose: any;
  handleRetry: any;
  attemptsLeftCount: number;
  handleHome: any;
}) => {
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      hardwareAccelerated={true}
      visible={isModalVisible}
      onRequestClose={handleOnClose}
    >
      <Box flex={1} backgroundColor={Colors.white} justifyContent={"center"} alignItems={"center"}>
        <Box width={"90%"} borderRadius={"xl"} padding={12}>
          <Text fontSize={"2xl"} fontFamily={"SFProDisplay-Bold"} textAlign={"center"}>
            Assesment Results
          </Text>
          <Row alignItems={"center"} justifyContent={"center"}>
            <Box alignItems={"center"} padding={10}>
              <Text color={Colors.success} fontSize={"2xl"} fontFamily={"SFProDisplay-Bold"}>
                {correctCount}
              </Text>
              <Text fontFamily={"SFProDisplay-Bold"} fontSize={"md"}>
                Correct
              </Text>
            </Box>
            <Box alignItems={"center"} padding={3}>
              <Text fontSize={"2xl"} fontFamily={"SFProDisplay-Bold"} color={Colors.error}>
                {incorrectCount}
              </Text>
              <Text fontSize={"md"} fontFamily={"SFProDisplay-Bold"}>
                Incorrect
              </Text>
              <Text fontSize={"2xl"} fontFamily={"SFProDisplay-Bold"}>
                {(correctCount / totalCount) * 100 + "%"}
              </Text>
              <Text fontSize={"md"} fontFamily={"SFProDisplay-Bold"}>
                Percentage
              </Text>
            </Box>
          </Row>
          <Text textAlign={"center"} fontFamily={"SFProDisplay-Bold"}>
            {attemptsLeftCount} Attempts Left
          </Text>

          {/* Try agian */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              width: "100%",
              backgroundColor: Colors.primary,
              marginTop: 20,
              borderRadius: 50,
            }}
            onPress={handleRetry}
          >
            <MaterialIcons name="replay" style={{ color: Colors.white }} />
            <Text
              style={{
                textAlign: "center",
                color: Colors.white,
                marginLeft: 10,
                fontFamily: "SFProDisplay-Medium",
              }}
            >
              Try Again
            </Text>
          </TouchableOpacity>
          {/* Go Home */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 10,
              width: "100%",
              backgroundColor: Colors.primary + "20",
              marginTop: 20,
              borderRadius: 50,
            }}
            onPress={handleHome}
          >
            <MaterialIcons name="home" style={{ color: Colors.primary }} />
            <Text
              style={{
                textAlign: "center",
                color: Colors.primary,
                marginLeft: 10,
                fontFamily: "SFProDisplay-Medium",
              }}
            >
              Go Home
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Modal>
  );
};

export default ResultModal;
