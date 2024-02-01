
"use client";

import { blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const themeColor = createTheme({
  palette: {
    primary: {
      // main: blueGrey[700],
      main: '#385961',
      // mainGradient: "linear-gradient(to right, #3d5f73, #6dd5fa, #ffffff)",
      contrastText: "white",
    },
    // ...
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          // backgroundImage: 'linear-gradient(to right, #3d5f73, #6dd5fa, #ffffff)',
          /* You can adjust background size, position, and other properties as needed */
          // backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // backgroundAttachment: '', // optional
        },
      },
    },
  },
});

const WebTheme = ({ children }) => {
  return (
    <ThemeProvider theme={themeColor}>
      {children}
    </ThemeProvider>
  );
};

export default WebTheme;
