"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
const themeColor = createTheme({
    palette:{
        primary:{
            main:'#F9C5D5',
            contrastText:'white'
        },
        secondary:{
            main:'#76453B',
            contrastText:'white'
        }
        
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