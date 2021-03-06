import { createTheme } from '@mui/material';

const colors = {
  main: 'rgba(51, 51, 53, 1)',
  bg1: '#f8f9fb',
  bg2: undefined,
};

const lightTheme = createTheme({
  palette: {
    background: {
      default: colors.bg1,
    },
    primary: {
      main: colors.main,
    },
  },
  typography: {
    fontFamily: 'Fredoka',
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: colors.main,
          backgroundColor: 'transparent',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bg1,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {},
    },
  },
});

export default lightTheme;
