import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeProvider";
import Colors from "../../constants/colors";

const FormButton = ({ labelText = "", handleOnPress = null, style, isPrimary = true, ...more }): JSX.Element => (
  <TouchableOpacity
    style={{
      paddingVertical: 10,
      backgroundColor: isPrimary ? Colors.primary : Colors.white,
      borderWidth: 1,
      borderColor: Colors.primary,
      borderRadius: 15,
      ...style,
    }}
    activeOpacity={0.9}
    onPress={handleOnPress}
    {...more}
  >
    <Text
      style={{
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Poppins-SemiBold",
        color: isPrimary ? Colors.white : Colors.primary,
      }}
    >
      {labelText}
    </Text>
  </TouchableOpacity>
);

export default FormButton;
