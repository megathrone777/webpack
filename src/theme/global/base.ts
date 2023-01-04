import { css } from "~/theme";

const base = css(({ theme: { fonts } }) => ({
  "*": {
    boxSizing: "border-box",
  },

  "html, body, #root": {
    height: "100%",
  },

  html: {
    fontSize: `${fonts.initialFontSize}px`,
  },

  body: {
    WebkitFontSmoothing: "antialiased",
    fontFamily: "JetBrainsMono",
    margin: 0,
  },

  svg: {
    height: "100%",
    width: "100%",
  },

  img: {
    maxWidth: "100%",
    verticalAlign: "middle",
  },

  button: {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
}));

export { base };
