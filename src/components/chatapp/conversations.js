"use client"

import useUsersData from '@/app/hooks/useUsersData';
import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';

const Conversations = (conversation, currentUser) => {

    const [users] = useUsersData()

    const currentUId = conversation.currentUser[0]?._id
    const friendId = conversation.conversation.members.find((m) => m !== currentUId)


    const friendDetails = users.find(user => user._id === friendId)


    return (
        <div>
           
            <Grid container sx={{ alignItems: "center", mt:1, backgroundColor:"#009688", borderRadius:2,  px:2, py:1 }}>
                <Grid item> <Avatar alt="Travis Howard" src={friendDetails?.uPhoto} /></Grid>
                <Grid item>
                    <Typography sx={{ ml: 1, color:"white" }} >{friendDetails?.uName}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Conversations;