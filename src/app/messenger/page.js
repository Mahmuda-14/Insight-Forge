/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import { Avatar, Badge, Box, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';

import Conversations from '@/components/chatapp/conversations';
import MessageOwn from '@/components/chatapp/messageOwn';
import useSingleConversation from '../hooks/useSingleConversation';
import useSingleUser from '../hooks/useSingleUser';
import { io } from 'socket.io-client'
import DrawerAppBar from '@/components/shared/Navbar/Navbar';

const Messenger = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [message, setMessage] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [arrivalMessage, setArrivalMessage] = useState(null)
    const [currentChat, setCurrentChat] = useState(null)
    const axiosPublic = useAxiosPublic()
    const scrollRef = useRef()
    const [singleUser] = useSingleUser()
    const socket = useRef()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        socket.current = io("ws://localhost:8900")
        socket.current.on("getMessage", (value) => {
            console.log(value)
          setArrivalMessage({

              sender: value.senderId,
              text: value.text,
              createdAt: Date.now()
          })
      })
        
    }, [setArrivalMessage])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        socket.current.emit("addUser", singleUser[0]?._id)
        socket.current.on("getUsers", users => {
            console.log(users)
        })
    }, [singleUser, arrivalMessage, message])


    const handleSetCurrentItem = (item) => {
        // console.log(item._id);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setCurrentChat(item)
        axiosPublic.get(`/message/${item._id}`)
            .then(res => {
                // console.log(res.data)
                setMessage(res.data)
            })


    }

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {

        console.log(currentChat._id)
        const newMessage = data.newMessage
        const sendMessage = {
            sender: singleUser[0]?._id,
            text: newMessage,
            conversationId: currentChat?._id
        }


        const receiverId = currentChat.members.find((m) => m !== singleUser[0]?._id)

        console.log(receiverId, newMessage, singleUser[0]?._id)

        socket.current.emit("sendMessage", {
            senderId: singleUser[0]?._id,
            receiverId,
            text: newMessage
        })

        axiosPublic.post('/message', sendMessage)
            .then(res => {
                setMessage([...message, res.data])
                reset()
            })
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        arrivalMessage && currentChat?.members.includes(arrivalMessage.senderId) &&
            setMessage((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])

    const [singleConversation, refetch] = useSingleConversation()
    console.log(singleConversation)



    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])


    return (
        <div>
            <DrawerAppBar></DrawerAppBar>
            <Grid container>
            

                <Grid item sx={{ display: { xs: 'none', sm: 'block', md: "block" } }} sm={3} md={3}>


                    <TextField id="standard-basic" label="Search for friends" variant="standard" />
                    {
                        singleConversation.map(item =>
                            <div onClick={() => handleSetCurrentItem(item)} key={item._id} >
                                <Conversations conversation={item} currentUser={singleUser} ></Conversations>
                            </div>

                        )
                    }
                </Grid>

                <Grid item xs={12} sm={6} md={6} sx={{ p: 2 }}>
                    {
                        message ?
                            <>
                                <Box sx={{
                                    overflow: "hidden",
                                    overflowY: "scroll", height: 550
                                }}>

                                    {
                                        message.map(m =>
                                            <div ref={scrollRef} key={m._id}>
                                                <MessageOwn
                                                    message={m}
                                                    own={m.sender === singleUser[0]?._id}
                                                ></MessageOwn>
                                            </div>


                                        )
                                    }

                                </Box>
                                <Box
                                    component="form"
                                    noValidate
                                    onSubmit={handleSubmit(onSubmit)}
                                    sx={{ mt: 3, display: "flex", width: { xs: 400, sm: 450, md: 600 } }}
                                >
                                    <TextField type='text' fullWidth placeholder='send the message' id="fullWidth" name="newMessage"
                                        {...register("newMessage", { required: true })}
                                        sx={{ backgroundColor: "#a8f0cc", mt: 2 }}
                                    />
                                    <button className='text-green-700'><SendIcon /></button>
                                </Box>
                            </> :
                            <p className='text-2xl text-center mt-24 text-gray-500'>Open a conversation here</p>
                    }

                </Grid>



                <Grid item sx={{ display: { xs: 'none', sm: 'block', md: "block" } }} sm={3} md={3}>
                    <h1>Online</h1>
                    <Grid container sx={{ alignItems: "center", mt: 3 }}>
                        <Grid item>
                            <Badge color="secondary" overlap="circular" badgeContent=" ">
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </Badge>
                        </Grid>

                        <Grid item>
                            <Typography sx={{ ml: 1 }} >Jhon</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Messenger;