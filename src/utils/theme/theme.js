
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
          xs: 380,
          sm: 641,
          md: 769,
          lg: 1025,
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
