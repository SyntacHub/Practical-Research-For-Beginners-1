import { Text, useColorMode } from "native-base";
import * as React from "react";
import { Switch } from "native-base";
import { useTheme } from "../../theme/ThemeProvider";

export const AppearanceSwitch: React.FC<{}> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === "dark"}
      onToggle={toggleColorMode}
      aria-label={colorMode === "light" ? "switch to dark mode" : "switch to light mode"}
    />
  );
};
