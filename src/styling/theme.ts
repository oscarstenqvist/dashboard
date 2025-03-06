import { createTheme } from "@mui/material";
const borderRadius = 2;
export const colors = {
  primary: "#90caf9",
  primaryContrastText: "#000000",
  secondary: "#ba68c8",
  background: "#4a4a4a",
  paperBackground: "#2d2d2d",
  textPrimary: "rgba(255,255,255,0.87)",
  textSecondary: "rgba(255,255,255,0.6)",
  textDisabled: "rgba(255,255,255,0.12)",
}
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.primaryContrastText,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.paperBackground,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      disabled: colors.textDisabled,
    },
    divider: colors.textDisabled,
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary,
          color: colors.primaryContrastText,
          "&.Mui-selected": {
            color: colors.secondary,
            fontWeight: 700,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: colors.secondary,
          height: 4,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.textPrimary,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: borderRadius,
  },
});
export default theme;