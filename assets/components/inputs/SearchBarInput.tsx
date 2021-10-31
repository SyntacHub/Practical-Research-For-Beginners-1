import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  text?: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarInput: React.FC<Props> = ({ text, setText }) => {
  if (!setText) {
    return (
      <View style={styles.container}>
        <FontAwesome name="search" size={20} color={Colors.darkGreen} />
        <Text
          style={{
            marginLeft: 32,
            fontFamily: "Proxima-Nova-Medium",
            lineHeight: 30,
            fontSize: 16,
            color: Colors.textLight,
          }}
        >
          How Can I Help You??
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color="#3f3f3f" />
      <TextInput
        value={text}
        onChangeText={(_text) => !!setText && setText(_text)}
        style={styles.input}
        placeholder="What are you looking for?"
      />
    </View>
  );
};

export default SearchBarInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.lightGray,
    borderRadius: 11,
    marginVertical: 12,
  },
  input: {
    marginLeft: 10,
  },
});
