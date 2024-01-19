"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
const themeColor = createTheme({
    palette:{
        primary:{
            main:'#76453B',
            contrastText:'white'
        },
        secondary:{
            main:'#B2533E',
            contrastText:'white'
        }
        
    }
   
})

const WebTheme = ({children}) => {
    return(
        <ThemeProvider theme={themeColor}>
            {children}
        </ThemeProvider>
    )
};

export default WebTheme;