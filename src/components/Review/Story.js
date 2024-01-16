"use client"
import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Rating, Stack, Typography } from '@mui/material';
import { brown, red } from '@mui/material/colors';

const Story = () => {
    return (
        <div>

            <Card sx={{ height: 400, width: 400,bgcolor: brown[500], color: 'white' }}>
               


                <CardContent sx={{ padding: '40px'}}>
                <CardHeader
                    title="SUCCESS STORIES"
                />

                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: '40px',color: 'white'}}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
};

export default Story;
