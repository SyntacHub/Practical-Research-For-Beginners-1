import { StatusBar } from "expo-status-bar";
import { Box, Column, IBoxProps, Row, Text, useColorMode, useColorModeValue } from "native-base";
import React from "react";
import HeaderButton, {
  HeaderButtonProps,
  HeaderButtonType,
  HEADER_BUTTON_MARGIN,
  HEADER_ICON_MARGIN,
} from "./HeaderButton";

type IScreenHeaderProps = {
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;

  title?: any;
  secondary_title?: any;
  titleColor?: string;
  backgroundColor?: IBoxProps["backgroundColor"];

  showLeftButton?: boolean;
  leftButtonOptions?: HeaderButtonProps<HeaderButtonType>;
  rightButtonOptions?: HeaderButtonProps<HeaderButtonType>;

  isDarkBg?: boolean;
  iconBg?: string;
  iconColor?: string;
};

const ScreenHeader: React.FC<IScreenHeaderProps> = ({
  title,
  secondary_title,
  titleColor,
  backgroundColor,
  centerComponent,
  rightComponent,

  showLeftButton = true,

  leftButtonOptions,
  rightButtonOptions,

  isDarkBg,
  iconBg,
  iconColor,
}) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {(isDarkBg || colorMode === "dark") && <StatusBar style="light" />}
      <Box backgroundColor={backgroundColor} />
      <Column backgroundColor={backgroundColor} px="1" py="1" alignItems="flex-start" zIndex={10}>
        <HeaderButton {...leftButtonOptions} isDarkBg={isDarkBg} iconColor={iconColor} />
        {centerComponent ? (
          <Box flex={1} w="full">
            {centerComponent}
          </Box>
        ) : title ? (
          <Column pt={6}>
            <Text color={titleColor} fontSize={"xl"} fontWeight={600} fontFamily={"SFProDisplay-Medium"}>
              {title}
            </Text>
            <Text color={titleColor} fontSize={"4xl"} fontWeight={400} fontFamily={"SFProDisplay-Bold"}>
              {secondary_title}
            </Text>
          </Column>
        ) : (
          <Box flex={1} />
        )}
        {rightComponent ? (
          <Box style={{ marginHorizontal: HEADER_BUTTON_MARGIN }}>{rightComponent}</Box>
        ) : rightButtonOptions ? (
          <HeaderButton {...rightButtonOptions} />
        ) : (
          <Box style={{ height: 10, width: 32, marginHorizontal: HEADER_BUTTON_MARGIN + HEADER_ICON_MARGIN }} />
        )}
      </Column>
    </>
  );
};

export default ScreenHeader;
