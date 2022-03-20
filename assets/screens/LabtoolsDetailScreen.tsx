import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
import Snackbar from "react-native-snackbar";
import React from "react";
import * as Haptics from "expo-haptics";
import AR from "../components/svg/AR";
import { StatusBar } from "react-native";
import { Box, Icon, Text, ScrollView, useColorMode, Pressable } from "native-base";
import RNFS from "react-native-fs";
import FileViewer from "react-native-file-viewer";

import { useTheme } from "../theme/ThemeProvider";
import { LessonCardImage } from "../components/svgs";

interface Props {
  route: any;
  props: any;
}

const LabtoolsDetail: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<any>();
  const { colors, isDark } = useTheme();
  const { item } = route.params;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box safeAreaTop flex={1} _light={{ backgroundColor: "muted.100" }} _dark={{ backgroundColor: "gray.900" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        _light={{ backgroundColor: "muted.100" }}
        _dark={{ backgroundColor: "gray.900" }}
        width={"90%"}
        mx={"auto"}
      >
        <StatusBar animated barStyle={colorMode === "dark" ? "light-content" : "dark-content"} />
        {/* Header */}
        <Box marginY={4}>
          <Icon as={Feather} name="arrow-left" size={6} onPress={() => navigation.goBack()} />
        </Box>

        <Box>
          <Text fontFamily={"SFProDisplay-Bold"} fontSize={"3xl"}>
            {item.labtool_name}
          </Text>
          <Text fontFamily={"SFProDisplay-Medium"} fontSize={"md"}>
            {item.labtool_categ}
          </Text>
        </Box>

        {/*Content*/}
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          _dark={{ backgroundColor: "emerald.400" }}
          _light={{ backgroundColor: "emerald.200" }}
          height={"35%"}
          borderRadius={"2xl"}
          my={3}
        >
          <LessonCardImage width={410} height={155} preserveAspectRatio={"true"} />
        </Box>
        <Pressable
          alignItems={"flex-end"}
          mt={-12}
          px={5}
          // style={{
          //   marginTop: -65,
          //   alignItems: "flex-end",
          //   paddingHorizontal: 40,
          // }}
          onPress={() => {
            {
              Snackbar.show({
                text: "Initializing Neural Engine...",
                duration: Snackbar.LENGTH_LONG,
              });
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

              const url = `${item.labtool_ar_link}`;
              const localFile = `${RNFS.DocumentDirectoryPath}/${url.split("/").pop()}`;

              const options = {
                fromUrl: url,
                toFile: localFile,
                background: true, // Continue the download in the background after the app terminates (iOS only)
                discretionary: true, // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
                cacheable: true, // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
              };

              RNFS.downloadFile(options)
                .promise.then(() => FileViewer.open(localFile))
                .then(() => {})
                .catch((error) => {});
            }
          }}
        >
          <AR />
        </Pressable>
        {/*Content 2*/}
        <Text fontFamily={"SFProDisplay-Bold"} fontSize={"2xl"}>
          Sample Text
        </Text>
        <Text fontFamily={"SFProDisplay-Regular"} fontSize={"md"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates aperiam repellat eius vero
          itaque. Eligendi minus vitae libero optio deserunt, cum quae quaerat maxime rem amet quas? Accusantium,
          dolores.
        </Text>

        <Text fontFamily={"SFProDisplay-Bold"} fontSize={"2xl"}>
          Sample Text
        </Text>
        <Text fontFamily={"SFProDisplay-Regular"} fontSize={"md"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates aperiam repellat eius vero
          itaque. Eligendi minus vitae libero optio deserunt, cum quae quaerat maxime rem amet quas? Accusantium,
          dolores.
        </Text>
      </ScrollView>
    </Box>
  );
};

export default LabtoolsDetail;
