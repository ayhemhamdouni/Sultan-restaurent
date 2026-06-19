import { createTheme } from '@mui/material/styles';

// Light theme – Mediterranean warmth
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0d3b4c', // Deep teal/navy
      light: '#1e5a6e',
      dark: '#07222e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c85a17', // Terracotta/amber
      light: '#e07b3a',
      dark: '#9e4511',
      contrastText: '#ffffff',
    },
    background: {
      default: '#fdf8f0', // Warm cream
      paper: '#ffffff',
    },
    text: {
      primary: '#2d2a24',
      secondary: '#5a5248',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0d3b4c',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          backgroundColor: '#c85a17',
          '&:hover': {
            backgroundColor: '#9e4511',
          },
        },
      },
    },
  },
});

// Dark theme – moody, elegant night vibe
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e5a6e', // Lighter teal
      light: '#3a7f94',
      dark: '#0d3b4c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e07b3a', // Brighter amber
      light: '#f09a5a',
      dark: '#b85a1a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#181510', // Deep warm black-brown
      paper: '#24201a',
    },
    text: {
      primary: '#f0ebe4',
      secondary: '#b8ae9e',
    },
  },
  typography: {
    fontFamily: '"Inter", "Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Inter", "Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h2: {
      fontFamily: '"Inter", "Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontFamily: '"Inter", "Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontFamily: '"Inter", "Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Inter", "Cairo", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1510',
          borderBottom: '1px solid #3a2f24',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          backgroundColor: '#e07b3a',
          '&:hover': {
            backgroundColor: '#b85a1a',
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };