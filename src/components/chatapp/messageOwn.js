"use client"

import { Avatar, Grid, Typography } from "@mui/material";
import { format } from "date-fns";


const MessageOwn = (message, own) => {

    console.log(message)
    return (
        <div >

            {
                message.own ?
                    <>
                        {/* own message */}
                        <Grid container sx={{ alignItems: "center", mt: 3 }}>
                            <Grid item> <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /></Grid>
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
                            <Grid item> <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /></Grid>

                        </Grid>
                        {/* <Typography sx={{ textAlign: "end", mt: 1, fontSize: 14 }}>{format(message.createdAt)}</Typography> */}
                    </>
            }



        </div>
    );
};

export default MessageOwn;