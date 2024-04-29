import type { TColors, TDevices, TFonts } from "./variables/types";

declare module "styled-components" {
  interface TRem<P = number> {
    (px: P): string;
  }

  export interface DefaultTheme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    rem: TRem;
  }
}
