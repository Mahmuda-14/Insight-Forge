/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Backdrop from '@mui/material/Backdrop';
import { Box, Button, Card, CardContent, CardMedia, Container, Fab, Fade, Grid, InputLabel, MenuItem, Modal, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import './discus.css'
import { QuestionAnswer } from "@mui/icons-material";
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
import Footer from '@/components/shared/footer/Footer';


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

const page = () => {
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


    return (
        <Box className="discussion overflow-x-hidden" style={{ background: 'linear-gradient(to right, #FFFFFF, #87CEEB)', padding: '10px' }}>
            <DrawerAppBar></DrawerAppBar>
            {/*header part*/}
            <Stack className="discusHeader"
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                 <Paper elevation={10} sx={{ maxWidth: '400px', mx: 'auto', my: 8, background: '#87CEEB', py:2, px:1 }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: 'black', fontWeight:600 }}>Top Questions</Typography></Paper>
                <div>
                    <button className='mt-10 px-5 py-3 rounded mx-auto text-black font-semibold bg-[#C5FFF8]' onClick={handleOpen}>Ask Question</button>
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

            <Grid container className="discusContainer" spacing={2}>
                <Grid item className='hidden md:block' md={6} lg={4} >

                <Paper elevation={10} sx={{ maxWidth: '150px', mx: 'auto', my: 8, background: '#87CEEB', py:2, px:1 }}><Typography variant="h4" sx={{ px: '12px', py: '5px', color: 'black', fontWeight:600 }}>Blogs</Typography></Paper>
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
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {blog?.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {blog?.details}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        }
                    </div>

                </Grid>
                <Grid item xs={12} md={6} lg={8} className="qusContainer">
                    {
                        discuss?.map(question => <div key={question?._id}>

                            <h3>How do I break a string into words and track the index of is a each word (within the original string)?</h3>
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
            </Grid>
            <Footer></Footer>
        </Box>
    );
};

export default page;