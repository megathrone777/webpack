import { TDevices } from "./types";

const sizes: TDevices = {
  desktop: "1279px",
  tablet: "1023px",
  mobile: "767px",
};

const devices: TDevices = {
  desktop: `screen and (max-width: ${sizes.desktop})`,
  tablet: `screen and (max-width: ${sizes.tablet})`,
  mobile: `screen and (max-width: ${sizes.mobile})`,
};

export { devices };
