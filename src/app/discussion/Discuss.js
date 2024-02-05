/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Backdrop from '@mui/material/Backdrop';
import { Box, Button, Card, CardContent, CardMedia, Container, Fab, Fade, Grid, Input, InputLabel, MenuItem, Modal, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import './discus.css'
import { Create, QuestionAnswer } from "@mui/icons-material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/navigation';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useDiscussData from '../hooks/useDiscussData';
import useBlogs from '../hooks/useBlogs';
import Link from 'next/link';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
// import Footer from '@/components/shared/footer/Footer';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Marquee from "react-fast-marquee";
import SouthIcon from '@mui/icons-material/South';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Image from 'next/image';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#C5FFF8',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Discuss = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const router = useRouter();
    const [discuss, reload] = useDiscussData()
    const [blogs, reloadBlog] = useBlogs()



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handlePost = e => {
        e.preventDefault()
        if (user && user?.email) {

            const from = e.target
            const title = from.title.value
            const description = from.description.value
            const category = from.category.value
            // console.log(title, description, category)

            const discusItem = {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL,
                title,
                description,
                category,
            }

            axiosSecure.post('/discus', discusItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.__v === 0) {
                        toast.success("Your question has been posted");
                    }
                })
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }

    const likePost = (id) => {
        if (user && user?.email) {
            const uId = {
                postId: id
            }
            axiosSecure.put('/questionLike', uId)
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        toast.success("You like this question");
                        reload()
                    }
                })
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }


    const marqueeProps = {

        speed: 30,
        direction: 'right',
        pauseOnClick: 'false',
        gradientColor: 'rgb(248,251,253)'

    };

    return (
        <Box className="discussion overflow-x-hidden" style={{ padding: '10px' }}>

            <Stack className="discusHeader"
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >

                <div>
                    <Marquee {...marqueeProps}>
                        <p className=' text-3xl font-bold text-slate-800 my-5'>Ask Your Question Here</p>
                        <SouthIcon style={{ width: '2em ', height: '1em' }}></SouthIcon>
                    </Marquee>

                    <div className=' my-10'>

                        <SearchRoundedIcon style={{ width: '1.5em ', height: '2em' }} />  <TextField sx={{ paddingRight: '185px', paddingBottom: '4.5px' }} type='text' placeholder='Search category ' />

                        <BorderColorOutlinedIcon style={{ width: '1.5em ', height: '2em' }}></BorderColorOutlinedIcon>

                        <TextField label="Ask Your Question" focused onClick={handleOpen} style={{ paddingRight: '158px' }} />
                    </div>

                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <form onSubmit={handlePost} className='from'>
                                    <TextField name='title'
                                        required
                                        className='input'
                                        id="outlined-multiline-flexible"
                                        label="Title"
                                        multiline
                                        maxRows={4}
                                        sx={{ width: '100%', my: 1 }}
                                    />
                                    <TextField name='description'
                                        required
                                        className='input'
                                        id="outlined-multiline-static"
                                        label="Description"
                                        multiline
                                        rows={4}
                                        sx={{ width: '100%', my: 1 }}
                                    />
                                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                                    <Select className='input' name='category'
                                        required
                                        labelId="demo-simple-select-autowidth-label"
                                        id="demo-simple-select-autowidth"
                                        autoWidth
                                        label="Age"
                                        onChange={handleChange}
                                        sx={{ width: '100%', my: 1 }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <button type='submit' className="qusPost" variant="outlined">Post Question</button>
                                </form>
                            </Box>
                        </Fade>
                    </Modal>
                </div>
            </Stack>
            <Box className="borderBot"></Box>

            {/* question part */}

            <Grid container className="discusContainer" spacing={3}>
                <Grid item className='hidden md:block' md={6} lg={4} >

                    <div>
                        {
                            blogs?.map(blog =>
                                <div key={blog?._id}>
                                    <Card sx={{ maxWidth: 345, margin: 'auto', marginBottom: 3 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image={blog?.image}
                                            title="green iguana"
                                        />

                                    </Card>
                                </div>
                            )
                        }
                    </div>

                </Grid>
                <Grid item xs={12} md={4} lg={4} className="qusContainer">
                    {
                        discuss?.map(question =>
                            <div key={question?._id} className=' w-[30rem] h-[11rem] p-6'>


                                <div className='flex gap-4'>
                                    <img className='w-12 h-12 rounded-full' src={question.photo} />
                                    <div>
                                        <p>{question.name}</p>
                                        <p>Posted on 21 august 2012</p>
                                    </div>
                                </div>


                                <Link href={`/discussion/${question?._id}`}><h3 className='text-xl font-bold my-1'>{question.title}</h3></Link>
                                <p>50 Answers · 10 hours ago</p>
                                <div className="btnIcon">
                                    <Link href={`/discussion/${question?._id}`}><Button> <QuestionAnswer /> Answer</Button></Link>
                                    <div className="like">
                                        <Button
                                            onClick={() => { likePost(question?._id) }}
                                        ><ThumbUpOffAltIcon /></Button>
                                        <span>{question?.likes?.length} likes</span>
                                    </div>
                                </div>
                                <div className="qusDivider"></div>
                            </div>)
                    }
                </Grid>


                <Grid item xs={12} md={4} lg={4} xl={4}>
                    {/* Content for the third column */}
                    <p>Join US on</p>
                </Grid>
            </Grid>





















        </Box>
    );
};






export default Discuss;