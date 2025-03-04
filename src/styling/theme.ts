import { createTheme } from "@mui/material";

export const colors = {
  background: "#434343",
  primary: "#5CBC97",
  secondary: "#E1D584",
  textFieldBackground: "#656565",
}

const sizes = {
  button: {
    width: "100px",
    height: "50px",
  },
  textField: {
    width: "250px",
    height: "50px",
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.secondary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.primary,
    },
  },
  typography: {
    allVariants: {
      color: colors.primary,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.background,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: colors.textFieldBackground,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: sizes.textField.width,
          '& .MuiInputBase-root': {
            height: sizes.textField.height,
            color: colors.primary,
            backgroundColor: colors.textFieldBackground,
          },
          '& .MuiInputLabel-root': {
            color: colors.secondary,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          width: sizes.button.width,
          height: sizes.button.height,
        }
      }
    },
  },
});
export default theme;