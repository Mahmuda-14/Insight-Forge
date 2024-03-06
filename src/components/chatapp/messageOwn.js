"use client"

import useAuth from "@/app/hooks/useAuth";
import useUsersData from "@/app/hooks/useUsersData";
import { Avatar, Grid, Typography } from "@mui/material";
import { format } from "date-fns";


const MessageOwn = (message, own) => {

    const { user } = useAuth()
    const [users] = useUsersData()
    const friendId = message.message.sender;
    const friendDetails = users.find(user => user._id === friendId)


    return (
        <div >

            {
                message.own ?
                    <>
                        {/* own message */}
                        <Grid container sx={{ alignItems: "center", mt: 3 }}>
                            <Grid item> <Avatar alt="Travis Howard" src={user?.photoURL} /></Grid>
                            <Grid item>
                                <Typography sx={{ ml: 1, width: 350, background: "#4f675b", color: "white", p: 2, borderRadius: 5 }} >{message.message.text}</Typography>
                            </Grid>
                        </Grid>
                        {/* <Typography sx={{ mt: 1, fontSize: 14 }}>{format(message.createdAt)}</Typography> */}
                    </>
                    :
                    <>

                        {/* sender message */}
                        <Grid container sx={{ alignItems: "center", mt: 3, justifyContent: "flex-end" }}>

                            <Grid item>

                                <Typography sx={{ mr: 1, width: 350, background: "#eeeeee", color: "black", p: 2, borderRadius: 5 }} >{message.message.text}</Typography>
                            </Grid>
                            <Grid item> <Avatar alt="Travis Howard" src={friendDetails?.uPhoto} /></Grid>

                        </Grid>
                        {/* <Typography sx={{ textAlign: "end", mt: 1, fontSize: 14 }}>{format(message.createdAt)}</Typography> */}
                    </>
            }



        </div>
    );
};

export default MessageOwn;