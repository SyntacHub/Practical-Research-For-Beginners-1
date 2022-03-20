import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import { useTheme } from "../../theme/ThemeProvider";
import * as Haptics from "expo-haptics";
interface Props {
  item: any;
}

const AssesmentCard: React.FC<Props> = ({}) => {
  const { colors, isDark } = useTheme();
  const [Quote, setQuote] = useState("Loading...");
  const [Author, setAuthor] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((result) => {
        setQuote(result.content);
        setAuthor(result.author);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    randomQuote();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 5,
        backgroundColor: colors.primaryteal,
        borderRadius: 23,
        marginVertical: 12,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "column",
            width: "100%",
            paddingVertical: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              lineHeight: 33,
              fontSize: 20,
              color: Colors.background,
            }}
          >
            {Quote}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              marginTop: 10,
              color: "white",
            }}
          >
            {"-" + Author}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AssesmentCard;

const styles = StyleSheet.create({
  container: {},
});
