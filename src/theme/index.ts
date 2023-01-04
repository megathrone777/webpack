import styled, {
  DefaultTheme,
  ThemeProvider,
  createGlobalStyle,
  css,
  keyframes,
} from "styled-components";

import { colors, devices, fonts } from "./variables";
import { GlobalStyle } from "./global-style";

const theme: DefaultTheme = {
  colors,
  devices,
  fonts,
  rem: (px) => {
    const baseFontSize = fonts.initialFontSize;

    return `${px / baseFontSize}rem`;
  },
};

export {
  GlobalStyle,
  ThemeProvider,
  createGlobalStyle,
  css,
  keyframes,
  styled,
  theme,
};
