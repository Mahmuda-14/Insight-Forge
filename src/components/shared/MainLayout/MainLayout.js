"use client"
// /* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';



const MainLayout = ({ children }) => {

  return (
    <>
      <Box sx={{ maxWidth: 'xl', overflow: 'hidden', margin: 'auto' }}>
       
        {children}
        
      </Box>
    </>
  );
};

export default MainLayout;


















