import React from "react";
import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const FormInput = ({
  labelText = "",
  placeholderText = "",
  onChangeText = null,
  value = null,
  maxinput = null,
  ...more
}) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <View>
      <Text style={{ color: "white" }}>{labelText}</Text>
      <TextInput
        style={{
          padding: 15,
          alignContent: "center",
          backgroundColor: Colors.white + 20,
          borderColor: Colors.white + "60",
          borderWidth: 1,
          color: "white",
          width: "100%",
          borderRadius: 15,
          fontFamily: "Poppins-SemiBold",
          marginTop: 10,
        }}
        placeholder={placeholderText}
        onChangeText={onChangeText}
        placeholderTextColor="white"
        maxLength={maxinput}
        value={value}
        {...more}
      />
    </View>
  );
};

export default FormInput;
