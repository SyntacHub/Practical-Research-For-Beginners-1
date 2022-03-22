import React from "react";

import { DrawerItemList } from "@react-navigation/drawer";
import { useTheme } from "../theme/ThemeProvider";
import { Box, Text, ScrollView, Column } from "native-base";
import { AppearanceSwitch } from "../components/buttons/ThemeSwitch";
import Colors from "../constants/colors";
import { signOut } from "../utils/auth";

function CustomDrawer(props: any) {
  const { colors, isDark } = useTheme();

  const text = isDark ? "Good Night" : "Good Morning";

  return (
    <Box safeAreaTop flex={1} _light={{ backgroundColor: "gray.200" }} _dark={{ backgroundColor: "gray.800" }}>
      <ScrollView>
        <Text fontFamily={"SFProDisplay-Medium"} mx={6} mt={5} fontSize={"2xl"}>
          {text}
        </Text>
        <Text fontFamily={"SFProDisplay-Bold"} mx={6} fontSize={"3xl"}>
          Tristan Listanco
        </Text>

        <Box flex={1} paddingY={1} paddingX={1} alignContent={"space-between"}>
          <Box my={5}>
            <DrawerItemList {...props} />
          </Box>
        </Box>
      </ScrollView>
      <Column>
        <Box paddingX={4}>
          <AppearanceSwitch />
        </Box>
        <Text
          style={{
            fontSize: 20,
            padding: 10,
            color: Colors.error,
          }}
          onPress={signOut}
        >
          Logout
        </Text>
      </Column>
    </Box>
  );
}

export default CustomDrawer;
