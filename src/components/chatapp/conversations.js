"use client"

import useUsersData from '@/app/hooks/useUsersData';
import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';

const Conversations = (conversation, currentUser) => {

    const [users] = useUsersData()
    // console.log(conversation, currentUser)

    const currentUId = conversation.currentUser[0]?._id
    // console.log(currentUId)
    const friendId = conversation.conversation.members.find((m) => m !== currentUId)


    const friendDetails = users.find(user => user._id === friendId)

    // console.log(friendDetails)

    return (
        <div>
            <Grid container sx={{ alignItems: "center", mt: 3 }}>
                <Grid item> <Avatar alt="Travis Howard" src={friendDetails?.uPhoto} /></Grid>
                <Grid item>
                    <Typography sx={{ ml: 1 }} >{friendDetails?.uName}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Conversations;