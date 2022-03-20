// Light theme colors
export const lightColors = {
  greeting: "Good Morning",
  image_background: require("../images/daybg.jpg"),
  background: "#FFFFFF",
  primarygreen: "#3E6647",
  secondarygreen: "#5E7D1D",
  accentgreen: "#BEDFB9",
  primaryteal: "#50BA9A",
  primarypurple: "#5856D6",
  elevated: "#F2F2F7",
  heading5: "#424242",
  text: "#000000",
  error: "#D32F2F",
};

// Dark theme colors
export const darkColors = {
  greeting: "Good Night",
  image_background: require("../images/nightbg.jpg"),
  background: "#131219",
  primarygreen: "#4E8D5C",
  secondarygreen: "#7E9E3C",
  accentgreen: "#BEDFB9",
  primaryteal: "#50BA9A",
  primarypurple: "#5E5CE6",
  heading5: "#EBEBF5",
  elevated: "#1C1C1E",
  text: "#FFFFFF",
  error: "#EF9A9A",
};
export type Colors = typeof lightColors;
