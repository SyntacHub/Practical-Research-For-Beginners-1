import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../constants/colors";

import { useTheme } from "../../theme/ThemeProvider";

const EULAModal = (props: any) => {
  const navigation = useNavigation<any>();
  const { colors, isDark } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.elevated,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 30,
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontFamily: "SFProDisplay-Bold",
              fontSize: 30,
              marginTop: 50,
              color: colors.text,
            }}
          >
            End User
          </Text>

          <Text
            style={{
              fontFamily: "SFProDisplay-Bold",
              textAlign: "center",
              fontSize: 30,
              color: colors.text,
            }}
          >
            Licence Agreement
          </Text>

          <Text style={{ marginTop: 20, fontWeight: "700", textAlign: "center" }}>
            Copyright (c) 2022 Iligan City National High School - Research Department
          </Text>
          <Text style={{ marginTop: 30, fontWeight: "400" }}>
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
            documentation files (the "Software"), to deal in the Software without restriction, including without
            limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
            the Software, and to permit persons to whom the Software is furnished to do so, subject to the following
            conditions: The above copyright notice and this permission notice shall be included in all copies or
            substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </Text>
          <TouchableOpacity
            onPress={() => {
              set;
            }}
          >
            <Text
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                backgroundColor: Colors.primary,
                fontFamily: "Poppins-SemiBold",
                color: Colors.white,
                marginTop: 20,
                overflow: "hidden",
                borderRadius: 15,
              }}
            >
              I Understand{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default EULAModal;
