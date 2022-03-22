import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import Colors from "../../constants/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../../theme/ThemeProvider";

const AttemptLimitModal = ({ isModalVisible, handleOnClose, attemptsLeftCount, handleHome }) => {
  const { colors, isDark } = useTheme();
  return (
    <Modal
      animationType={"slide"}
      transparent={true}
      hardwareAccelerated={true}
      visible={isModalVisible}
      onRequestClose={handleOnClose}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.black + "90",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.background,
            width: "90%",
            borderRadius: 10,
            padding: 40,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: Colors.black,
              fontFamily: "SFProDisplay-Bold",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Attempt Limit Reached!
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
          <Text style={{ opacity: 0.8, fontFamily: "SFProDisplay-Medium" }}>{attemptsLeftCount} Attempts Left</Text>

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
        </View>
      </View>
    </Modal>
  );
};

export default AttemptLimitModal;
