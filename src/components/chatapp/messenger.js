/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import { Avatar, Badge, Box, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
// import useAxiosPublic from '../hooks/useAxiosPublic';

// import Conversations from '@/components/chatapp/conversations';
// import MessageOwn from '@/components/chatapp/messageOwn';
// import useSingleConversation from '../hooks/useSingleConversation';
// import useSingleUser from '../hooks/useSingleUser';
import { io } from 'socket.io-client'

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import useSingleUser from '@/app/hooks/useSingleUser';
import Conversations from './conversations';
import MessageOwn from './messageOwn';
import useSingleConversation from '@/app/hooks/useSingleConversation';
import useUsersData from '@/app/hooks/useUsersData';

const Messenger = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    
    const [message, setMessage] = useState(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [arrivalMessage, setArrivalMessage] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentChat, setCurrentChat] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [search, setSearch] = useState(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [friend, setFriend] = useState(null)
    const axiosPublic = useAxiosPublic()
    const scrollRef = useRef()
    const [singleUser] = useSingleUser()
    const socket = useRef()
    const [users] = useUsersData()



    const { data: searchedUser, refetch: reload } = useQuery({
        queryKey: ['searchUser'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/searchUsers?search=${search}`);
            return res.data
        }
    })

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.value;
        setSearch(searchText)
        reload()


    }



    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        socket.current = io("ws://localhost:8900")
        socket.current.on("getMessage", (value) => {
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
        })
    }, [singleUser, arrivalMessage, message, socket])


    const handleSetCurrentItem = (item) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setCurrentChat(item)
        axiosPublic.get(`/message/${item._id}`)
            .then(res => {
                setMessage(res.data)
            })

              // to find friend
              const currentUser = singleUser[0]._id
              const friendId = item.members.find((m) => m !== currentUser)
              const friendDetails = users.find(user => user._id === friendId)
              setFriend(friendDetails);
    }


    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {

        const newMessage = data.newMessage
        const sendMessage = {
            sender: singleUser[0]?._id,
            text: newMessage,
            conversationId: currentChat?._id
        }


        const receiverId = currentChat.members.find((m) => m !== singleUser[0]?._id)


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

        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
            setMessage((prev) => [...prev, arrivalMessage])
    }, [arrivalMessage, currentChat])





    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])

    const handleConversation = (searchedUser) => {
        const conversationUser = {
            senderId: singleUser[0]._id,
            receiverId: searchedUser._id
        }

        axiosPublic.post('/conversation', conversationUser)
            .then(res => {
                refetch()
            })
    }


    const [singleConversation, refetch] = useSingleConversation()


    return (
        <div>

            <Grid container>
                <Grid item xs={12} sm={6} md={4}>

                    <TextField style={{ borderRadius: 5, mt:8 }} type='text' fullWidth onKeyUp={handleSearch} placeholder='Search for friends ' id="fullWidth" />
                    {/* search result */}

                    {
                        searchedUser &&

                        <div onClick={() => handleConversation(searchedUser)}>
                            <Grid container sx={{ alignItems: "center", my: 3 }}>
                                <Grid item> <Avatar alt="Travis Howard" src={searchedUser?.uPhoto} /></Grid>
                                <Grid item>
                                    <Typography sx={{ ml: 1 }} >{searchedUser?.uName}</Typography>
                                </Grid>
                            </Grid>
                        </div>


                    }


                    <Divider></Divider>
                    <Typography sx={{color:'#009688', textAlign:"center", fontSize:20, fontWeight:600, mt:2}}>Conversation</Typography>
                    {
                        singleConversation &&
                        singleConversation.map(item =>
                            <div onClick={() => handleSetCurrentItem(item)} key={item._id} >
                                <Conversations conversation={item} currentUser={singleUser} ></Conversations>
                            </div>

                        )

                    }
                </Grid>

                <Grid item xs={12} sm={6} md={8} sx={{ p: 2 }}>
                    {
                        message ?
                            <>
                                <Grid container sx={{ alignItems: "center", backgroundColor:"#009688", borderRadius:2, mb:2, px:2, py:1}}>
                                    <Grid item> <Avatar alt="Travis Howard" src={friend?.uPhoto} /></Grid>
                                    <Grid item>
                                        <Typography sx={{ ml: 1, color:"white" }} >{friend?.uName}</Typography>
                                    </Grid>
                                </Grid>
                                <Box sx={{
                                    overflow: "hidden",
                                    overflowY: "scroll", height: 400
                                }}>

                                    {
                                        message.map((m, i) =>
                                            <div ref={scrollRef} key={i}>
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
                                    sx={{ mt: 3, display: "flex", justifyContent: 'center', alignItems: "center", width: { xs: 400, sm: 420, md: 420 } }}
                                >
                                    <TextField type='text' fullWidth placeholder='send the message' id="fullWidth" name="newMessage"
                                        {...register("newMessage", { required: true })}
                                        sx={{ backgroundColor: "#b2dfdb", mt: 2 }}
                                    />
                                    <button className='text-white bg-[#4f675b] ml-1 px-4 h-14 mt-3 rounded-md'><SendIcon /></button>
                                </Box>
                            </> :
                            <p className='text-2xl text-center mt-24 text-gray-500'>Open a conversation here</p>
                    }

                </Grid>

            </Grid>
        </div>
    );
};

export default Messenger;