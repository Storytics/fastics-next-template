import { transparentize } from "polished";

const typography = {
  fontFamily: "'Roboto', sans-serif",
};

const colors = {
  primary: "#078080",
  background: {
    primary: "#FFFFFE",
    secondary: "#EFF0F3",
    dark: "#0D0D0D",
  },
  text: {
    primary: "#0D0D0D",
    secondary: "#2A2A2A",
    tertiary: "#707070",
    light: "#FFFFFE",
  },
  semantic: {
    warning: {
      background: "#fbc02d",
      text: "#0D0D0D",
    },
    danger: {
      background: "#d32f2f",
      text: "#FFFFFE",
    },
  },
};

const icon = {
  primary: colors.primary,
  default: "#0D0D0D",
};

const toggle = {
  checked: {
    color: colors.background.primary,
    backgroundColor: colors.primary,
  },
  default: {
    color: colors.background.primary,
    backgroundColor: colors.background.dark,
  },
};

const button = {
  primary: {
    background: colors.primary,
    color: colors.text.light,
  },
  secondary: {
    background: "#707070",
    color: colors.text.light,
  },
  light: {
    background: colors.background.secondary,
    color: colors.text.primary,
  },
  warning: {
    background: colors.semantic.warning.background,
    color: colors.semantic.warning.text,
  },
  danger: {
    background: colors.semantic.danger.background,
    color: colors.semantic.danger.text,
  },
  transparent: {
    background: "transparent",
    color: colors.text.primary,
  },
};

const border = {
  small: "0.1rem solid" + colors.background.secondary,
  medium: "0.2rem solid" + colors.background.secondary,
  large: "0.3rem solid" + colors.background.secondary,
  radius: "0.2rem",
};

const transitions = {
  boxShadow: "box-shadow 0.15s ease-in-out",
};

const boxShadow = {
  small: "0 0.2rem 0.5rem rgba(112, 112, 112, 0.1)",
};

const spaces = {
  s1: "0.5rem",
  s2: "1rem",
  s3: "1.5rem",
  s4: "2rem",
  s5: "2.5rem",
  s6: "3rem",
  s7: "4rem",
  s8: "5rem",
  s9: "7.5rem",
  s10: "10rem",
};

const zIndex = {
  modal: "1001",
  navigation: "1000",
};

const mixins = {
  selection: () => `
    &::selection {
      background: ${transparentize(0.8, theme.colors.primary)};
      color: ${theme.colors.text.primary};
    }
    &::-moz-selection {
      background: ${transparentize(0.8, theme.colors.primary)};
      color: ${theme.colors.text.primary};
    }
  `,
  blurFilter: () => `
    background-color: ${transparentize(0.25, theme.colors.background.primary)};
    -webkit-backdrop-filter: saturate(180%) blur(10px);
    backdrop-filter: saturate(180%) blur(10px);
  `,
  transition: {
    all: () => `
      -webkit-transition: all .2s linear;
      transition: all .2s linear;
    `,
  },
};

const breakpoints = [500, 800, 1000, 1200];

const theme = {
  typography,
  colors,
  icon,
  button,
  toggle,
  border,
  transitions,
  spaces,
  mixins,
  zIndex,
  boxShadow,
  breakpoints,
};

export default theme;
