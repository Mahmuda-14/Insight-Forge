/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Backdrop from '@mui/material/Backdrop';
import { Box, Button, Fade, InputLabel, MenuItem, Modal, Paper, Select, Stack, Tab, Tabs, TextField, } from "@mui/material";
import './discus.css'
import React, { useState } from "react";
import toast from 'react-hot-toast';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/navigation';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useDiscussData from '../hooks/useDiscussData';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import SouthIcon from '@mui/icons-material/South';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DiscussM from './DiscussM';
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import { QuestionAnswer } from '@mui/icons-material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    boxShadow: 24,
    p: 4,
};

const Discuss = () => {
    const [search, setSearch] = useState('')

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    const router = useRouter();
    const [discuss] = useDiscussData()
    // const [blogs, reloadBlog] = useBlogs()



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [age, setAge] = React.useState('');

    const handleSearch = e => {
        e.preventDefault()
        const form = e.target.value
        setSearch(form)

    }

    console.log(search)

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
                        <div className='flex justify-center items-center'>
                        <p className='text-center text-3xl font-bold text-slate-800 my-5'>Ask Your Question Here</p>
                        <SouthIcon style={{ width: '2em ', height: '1em' }}></SouthIcon>
                        </div>

                    <form onChange={handleSearch} className='flex my-10'>
                        <SearchRoundedIcon style={{ width: '1.5em ', height: '2em', position: 'relative', top: '3px', left: '41px', color: 'gray' }} />

                        <input name="text" type="text" placeholder="Search here" className="input input-bordered border-2 pl-7 py-2 rounded-xl" />
                        {/* <button className='relative bg-slate-500 right-11 rounded-2xl p-3 w-10'>Search</button> */}

                    </form>

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
                                    <InputLabel id="demo-select-small-label">Category</InputLabel>
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
                                        <MenuItem value="angular">angular</MenuItem>
                                        <MenuItem value="apache">apache</MenuItem>
                                        <MenuItem value="babel">babel</MenuItem>
                                        <MenuItem value="css">css</MenuItem>
                                        <MenuItem value="docker">docker</MenuItem>
                                        <MenuItem value="django">django</MenuItem>
                                        <MenuItem value="express js">express js</MenuItem>
                                        <MenuItem value="flask">flask</MenuItem>
                                        <MenuItem value="javascript">javascript</MenuItem>
                                        <MenuItem value="kubernetes">kubernetes</MenuItem>
                                        <MenuItem value="mongodb">mongodb</MenuItem>
                                        <MenuItem value="mongoose">mongoose</MenuItem>
                                        <MenuItem value="next js">next js</MenuItem>
                                        <MenuItem value="nginx">nginx</MenuItem>
                                        <MenuItem value="node js">node js</MenuItem>
                                        <MenuItem value="npm">npm</MenuItem>
                                        <MenuItem value="PostgreSQL">PostgreSQL</MenuItem>
                                        <MenuItem value="react">react</MenuItem>
                                        <MenuItem value="restful apis">restful apis</MenuItem>
                                        <MenuItem value="Ruby on Rails">Ruby on Rails</MenuItem>
                                        <MenuItem value="SQL database">SQL database</MenuItem>
                                        <MenuItem value="version control">version control</MenuItem>
                                        <MenuItem value="vue js">vue js</MenuItem>
                                        <MenuItem value="webpack">webpack</MenuItem>
                                    </Select>
                                    <button type='submit' className="qusPost" variant="outlined">Post Question</button>
                                </form>
                            </Box>
                        </Fade>
                    </Modal>
                </div>
            </Stack>


            {/* question part */}
{/* 
            <div className='ml-[7rem]'>
            <ul className='flex flex-row ml-[319px]'>
                <li className='mr-[19px]'>
                    <Button>All Questions</Button>
                  
                </li>
                <li className=''>
                    <Button  MostAnswered>
                     
                    </Button>
                   
                </li>
                <li>
                    <Button>Recent Posts</Button>
                   
                </li>
            </ul>
        </div> */}


            <Box className="borderBot ml-[112px] mr-[446px]"></Box>


            <div className='flex flex-row gap-3 '>

                <div className='grid grid-cols-1 gap-3 mr-4 ml-[7rem] my-9'>

                    {discuss && discuss.length > 0 ? (
                        discuss?.filter((menuItem) => {
                            return search.toLocaleLowerCase() === '' ? menuItem : menuItem?.category.toLocaleLowerCase().includes(search) || menuItem?.title.toLocaleLowerCase().includes(search)

                            // || parseInt(menuItem?.price).includes(search)
                        })?.map(question => <DiscussM key={question?.id} question={question}></DiscussM>)
                    ) : (
                        <p>No data available.</p>
                    )}

                </div>


                <div>
                    <div>

                        <Button onClick={handleOpen} className=' qusPost ml-7 left-7 bottom-12'> <BorderColorOutlinedIcon style={{ width: '1.5em ', height: '1.5em' }} />Ask A Question</Button>
                        <div className=" w-[21rem] h-[20rem] bg-white border-y-2 shadow-xl p-5 mb-5">
                            <h2 className='text-xl mt-6 mb-4 text-center font-semibold text-black'>States</h2>
                            <hr></hr>
                            <div className="flex flex-col gap-2  my-3">
                                <Button className='states'>Questions({discuss.length})</Button>
                                <Button className='states'>Answers(2)</Button>
                                <Button className='states'>Most Liked(20)</Button>


                            </div>

                        </div>

                    </div>
                    <div>
                        <div>


                            <div className=" w-[21rem] h-[20rem] bg-white border-y-2 shadow-xl p-5 mb-5">
                                <h2 className='text-xl mt-6 mb-4 text-center font-semibold text-black'>Join Us On</h2>
                                <hr></hr>
                                <div className="flex flex-col gap-2  my-3">

                                    <Button className='states'><Link href={'https://www.facebook.com/'}><FacebookIcon className='hover:text-white' style={{ marginRight: '5px' }}></FacebookIcon>Facebook</Link></Button>
                                    <Button className='states'><Link href={'https://www.instagram.com/'}><InstagramIcon className='hover:text-white' style={{ marginRight: '5px' }}></InstagramIcon>Instagram</Link></Button>
                                    <Button className='states'><Link href={'https://twitter.com/'}><TwitterIcon className='hover:text-white' style={{ marginRight: '7px' }}></TwitterIcon>Twitter</Link></Button>


                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>


        </Box>
    );
};

{/* <button
type="submit"
className="bg-[#87CEEB] text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
>
Post Job
</button> */}




export default Discuss;