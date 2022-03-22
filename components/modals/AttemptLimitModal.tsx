import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Box, Text } from "native-base";


const AttemptLimitModal = ({ isModalVisible , handleOnClose, attemptsLeftCount, handleHome }:{isModalVisible:any,handleOnClose:any,attemptsLeftCount:any,handleHome:any}) => {
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      hardwareAccelerated={true}
      visible={isModalVisible}
      onRequestClose={handleOnClose}
    >
      <Box flex={1} backgroundColor={Colors.black + "90"} justifyContent={"center"} alignItems={"center"}>
        <Box
          width={"90%"}
          borderRadius={"xl"}
          padding={4}
          alignItems={"center"}
          // style={{
          //   width: "90%",
          //   borderRadius: 10,
          //   padding: 40,
          //   alignItems: "center",
          // }}
        >
          <Text
            fontFamily={"SFProDisplay-Bold"}
            justifyContent={"center"}
            textAlign={'center'}
            // style={{
            //   fontSize: 28,
            //   color: Colors.black,
            //   fontFamily: "SFProDisplay-Bold",
            //   justifyContent: "center",
            //   textAlign: "center",
            // }}
          >
            Attempt Limit Reached!
          </Text>
          
          <Text fontFamily={"SFProDisplay-Medium"} >{attemptsLeftCount} Attempts Left</Text>

          {/* Try agian */}

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
            textAlign={'center'}
            ml={1}
            fontFamily={"SFProDisplay-Medium"}
              // style={{
              //   textAlign: "center",
              //   color: Colors.primary,
              //   marginLeft: 10,
              //   fontFamily: "SFProDisplay-Medium",
              // }}
            >
              Go Home
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Modal>
  );
};

export default AttemptLimitModal;
