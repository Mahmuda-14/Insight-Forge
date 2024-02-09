
"use client";

import {  createTheme, ThemeProvider } from '@mui/material/styles';
const themeColor = createTheme({
    palette: {
        primary: {
          main: '#4f675b',
          // mainGradient: "linear-gradient(to right, #3c3c3c, #ffffff)",
          contrastText:"black"
        },
        secondary: {
          main:"#C5FFF8"
        }
        // ...
      },
    breakpoints: {
        values: {
          xs: 0,
          sm: 450,
          md: 600,
          lg: 1200,
          xl: 1536,
        },
      },
})



const WebTheme = ({ children }) => {
  return (
    <ThemeProvider theme={themeColor}>
      {children}
    </ThemeProvider>
  );
};

export default WebTheme;
