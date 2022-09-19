import { blend, generateInteractionStates, hexToRGB } from "./utils";

export const interactionStates = {
  enabled: 0.0,
  disabled: 0.0,
  hover: 0.08,
  focus: 0.12,
  press: 0.12,
  drag: 0.16,
};

export const ref = {
  white: "#FFFFFF",
  black: "#000000",
  primary: {
    0: "#000000",
    10: "#21005D",
    20: "#381E72",
    30: "#4F378B",
    40: "#6750A4",
    50: "#7F67BE",
    60: "#9A82DB",
    70: "#B69DF8",
    80: "#D0BCFF",
    90: "#EADDFF",
    95: "#F6EDFF",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  secondary: {
    0: "#000000",
    10: "#1D192B",
    20: "#332D41",
    30: "#4A4458",
    40: "#625B71",
    50: "#7A7289",
    60: "#958DA5",
    70: "#B0A7C0",
    80: "#CCC2DC",
    90: "#E8DEF8",
    95: "#F6EDFF",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  tertiary: {
    0: "#000000",
    10: "#31111D",
    20: "#492532",
    30: "#633B48",
    40: "#7D5260",
    50: "#986977",
    60: "#B58392",
    70: "#D29DAC",
    80: "#EFB8C8",
    90: "#FFD8E4",
    95: "#FFECF1",
    99: "#FFFBFA",
    100: "#FFFFFF",
  },
  error: {
    0: "#000000",
    10: "#410E0B",
    20: "#601410",
    30: "#8C1D18",
    40: "#B3261E",
    50: "#DC362E",
    60: "#E46962",
    70: "#EC928E",
    80: "#F2B8B5",
    90: "#F9DEDC",
    95: "#FCEEEE",
    99: "#FFFBF9",
    100: "#FFFFFF",
  },
  neutral: {
    0: "#000000",
    10: "#1C1B1F",
    20: "#313033",
    30: "#484649",
    40: "#605D62",
    50: "#787579",
    60: "#939094",
    70: "#AEAAAE",
    80: "#C9C5CA",
    90: "#E6E1E5",
    95: "#F4EFF4",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
  neutralVariant: {
    0: "#000000",
    10: "#1D1A22",
    20: "#322F37",
    30: "#49454F",
    40: "#605D66",
    50: "#79747E",
    60: "#938F99",
    70: "#AEA9B4",
    80: "#CAC4D0",
    90: "#E7E0EC",
    95: "#F5EEFA",
    99: "#FFFBFE",
    100: "#FFFFFF",
  },
};

const lightColors = {
  primary: ref.primary[40],
  onPrimary: ref.primary[100],
  primaryContainer: ref.primary[90],
  onPrimaryContainer: ref.primary[10],
  secondary: ref.secondary[40],
  onSecondary: ref.secondary[100],
  secondaryContainer: ref.secondary[90],
  onSecondaryContainer: ref.secondary[10],
  tertiary: ref.tertiary[40],
  onTertiary: ref.tertiary[100],
  tertiaryContainer: ref.tertiary[90],
  onTertiaryContainer: ref.tertiary[10],
  error: ref.error[40],
  onError: ref.error[100],
  errorContainer: ref.error[90],
  onErrorContainer: ref.error[10],
  background: ref.neutral[99],
  onBackground: ref.neutral[10],
  surface: ref.neutral[99],
  onSurface: ref.neutral[10],
  surfaceVariant: ref.neutralVariant[90],
  onSurfaceVariant: ref.neutralVariant[30],
  outline: ref.neutralVariant[50],
  shadow: ref.neutral[0],
  surfaceTint: ref.primary[40],
  inverseSurface: ref.neutral[20],
  inverseOnSurface: ref.neutral[95],
  inversePrimary: ref.primary[80],
  scrim: ref.neutral[0],
};

const lightSurfaceBackdrops = {
  1: hexToRGB(lightColors.primary, 0.05),
  2: hexToRGB(lightColors.primary, 0.08),
  3: hexToRGB(lightColors.primary, 0.11),
  4: hexToRGB(lightColors.primary, 0.12),
  5: hexToRGB(lightColors.primary, 0.14),
};

const lightSurface = {
  0: lightColors.surface,
  1: blend(lightColors.surface, lightSurfaceBackdrops[1]),
  2: blend(lightColors.surface, lightSurfaceBackdrops[2]),
  3: blend(lightColors.surface, lightSurfaceBackdrops[3]),
  4: blend(lightColors.surface, lightSurfaceBackdrops[4]),
  5: blend(lightColors.surface, lightSurfaceBackdrops[5]),
};

const lightDefaultElevation = {
  0: "none",
  1: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  2: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
  4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
  5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
};

const lightLoweredElevation = {
  0: "none",
  1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
  2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
  3: "0px 1px 3px rgba(0, 0, 0, 0.3)",
  4: "0px 2px 3px rgba(0, 0, 0, 0.3)",
  5: "0px 4px 4px rgba(0, 0, 0, 0.3)",
};

const lightElevation = {
  0: "none",
  1: `${lightDefaultElevation[1]}, ${lightLoweredElevation[1]}`,
  2: `${lightDefaultElevation[2]}, ${lightLoweredElevation[2]}`,
  3: `${lightDefaultElevation[3]}, ${lightLoweredElevation[3]}`,
  4: `${lightDefaultElevation[4]}, ${lightLoweredElevation[4]}`,
  5: `${lightDefaultElevation[5]}, ${lightLoweredElevation[5]}`,
  lowered: lightLoweredElevation,
  default: lightDefaultElevation,
};

export const lightTheme = {
  colors: lightColors,
  surface: lightSurface,
  elevation: lightElevation,
  surfaceBackdrops: lightSurfaceBackdrops,
};

const typographyDisplay = {
  large: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "57px",
    lineHeight: "64px",
    letterSpacing: "-0.25px",
  },
  medium: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "45px",
    lineHeight: "52px",
    letterSpacing: "0px",
  },
  small: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "36px",
    lineHeight: "44px",
    letterSpacing: "0px",
  },
};

const typographyHeadline = {
  large: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "32px",
    lineHeight: "40px",
    letterSpacing: "0px",
  },
  medium: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "28px",
    lineHeight: "36px",
    letterSpacing: "0px",
  },
  small: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "24px",
    lineHeight: "32px",
    letterSpacing: "0px",
  },
};

const typographyTitle = {
  large: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "22px",
    lineHeight: "28px",
    letterSpacing: "0px",
  },
  medium: {
    family: "Roboto",
    style: "normal",
    weight: "500",
    size: "16px",
    lineHeight: "24px",
    letterSpacing: "0.1px",
  },
  small: {
    family: "Roboto",
    style: "normal",
    weight: "500",
    size: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
};

const typographyLabel = {
  large: {
    family: "Roboto",
    style: "normal",
    weight: "500",
    size: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
  medium: {
    family: "Roboto",
    style: "normal",
    weight: "500",
    size: "12px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
  },
  small: {
    family: "Roboto",
    style: "normal",
    weight: "500",
    size: "11px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
  },
};

const typographyBody = {
  large: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
  medium: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
  },
  small: {
    family: "Roboto",
    style: "normal",
    weight: "400",
    size: "12px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
};

export const typography = {
  display: typographyDisplay,
  headline: typographyHeadline,
  title: typographyTitle,
  label: typographyLabel,
  body: typographyBody,
};
