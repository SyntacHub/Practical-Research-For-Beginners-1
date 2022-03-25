import { themeTools, useTheme } from "native-base";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import { ColorType, ResponsiveValue } from "native-base/lib/typescript/components/types";

const useGetColorValue = (color: ResponsiveValue<ColorType | ILinearGradientProps>) => {
  const theme = useTheme();
  return themeTools.getColor(theme, color as string);
};

export default useGetColorValue;
