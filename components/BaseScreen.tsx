import React from "react";

import { Box, IBoxProps, StatusBar, useColorMode } from "native-base";

type Props = {
  children?: React.ReactNode;
} & IBoxProps;

const BaseScreen = (props: Props) => {
  const { children, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      position={"relative"}
      _light={{ backgroundColor: "muted.100" }}
        _dark={{ backgroundColor: "gray.900" }}
      flex={1}
      {...rest}
    >
      <StatusBar animated barStyle={colorMode === "dark" ? "light-content" : "dark-content"} />
      {children}
    </Box>
  );
};

export default BaseScreen;
