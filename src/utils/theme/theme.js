"use client";

import {  createTheme, ThemeProvider } from '@mui/material/styles';
const themeColor = createTheme({
    palette: {
        primary: {
          main: '#ff4400',
          mainGradient: "linear-gradient(to right, #FFFFFF, #87CEEB)",
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
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
})

const WebTheme = ({children}) => {
    return(
        <ThemeProvider theme={themeColor}>
            {children}
        </ThemeProvider>
    )
};

export default WebTheme;