import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types";
import { PlatformPressable } from "@react-navigation/elements";
import { DrawerActions, ParamListBase, useNavigation } from "@react-navigation/native";
import { Center, Icon } from "native-base";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import useGetColorValue from "../../hooks/useGetColorValue";

export const HEADER_BUTTON_MARGIN = 0;
export const HEADER_ICON_MARGIN = 0;

export type HeaderButtonType = "back" | "drawer" | "info" | "menu" | "close";

export type HeaderButtonProps<T extends HeaderButtonType> = T extends "info" | "menu" | "close"
  ? {
      iconColor?: string;
      isDarkBg?: boolean;
      type?: T;
      onPress: () => void;
    }
  : {
      iconColor?: string;
      isDarkBg?: boolean;
      type?: T;
    };

export default function HeaderButton<T extends HeaderButtonType>({
  type,
  iconColor,
  isDarkBg,

  ...rest
}: HeaderButtonProps<T>) {
  const navigation = useNavigation<any>();

  const header_buttons: Record<HeaderButtonType, any> = {
    back: {
      source: Feather,
      name: "arrow-left",
      onPress: () => navigation.goBack(),
    },
    drawer: {
      source: Feather,
      name: "menu",
      onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()),
    },
    info: {
      source: Ionicons,
      name: "md-information-sharp",
      // @ts-ignore
      onPress: rest.onPress,
    },
    menu: {
      source: Feather,
      name: "more-vertical",
      // @ts-ignore
      onPress: rest.onPress,
    },
    close: {
      source: Ionicons,
      name: "close",
      // @ts-ignore
      onPress: rest.onPress,
    },
  };

  const header_button = header_buttons[type ?? "back"];
  const { source: Icon } = header_button;

  const iconColors = {
    isDarkBg: {
      color: "white",
    },
    isNotDarkBg: {
      color: "black",
    },
  };

  const iconColorsKey = isDarkBg ? "isDarkBg" : "isNotDarkBg";
  const _iconColor = useGetColorValue(iconColors[iconColorsKey].color);

  return (
    <PlatformPressable
      onPress={header_button.onPress}
      accessible
      accessibilityRole="button"
      android_ripple={{ borderless: true }}
      style={{ marginHorizontal: HEADER_BUTTON_MARGIN, zIndex: 10 }}
    >
      <Center rounded="full" style={styles.icon}>
        <Icon name={header_button.name} size={24} color="gray" />
      </Center>
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    borderRadius: 100,
    margin: HEADER_ICON_MARGIN,
  },
});
