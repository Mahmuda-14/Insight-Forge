"use client"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFnsBase } from '@mui/x-date-pickers/AdapterDateFnsBase';
import React from 'react';

const Localization = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFnsBase}>
            
        </LocalizationProvider>
    );
};

export default Localization;