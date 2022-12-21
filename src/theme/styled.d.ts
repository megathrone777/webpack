import { TColors, TDevices, TFonts } from "./variables/types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    rem: (px: number) => string;
  }
}
