/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, TextField } from "@mui/material";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { FaSearchLocation } from "react-icons/fa";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DrawerAppBar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Link from "next/link";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useSingleUser from "../hooks/useSingleUser";

const page = () => {
  const axiosSecure = useAxiosSecure()
  //const [blogs, setBlogs] = useState();
  const axiosPublic = useAxiosPublic();
  const [recentPosts, setRecentPosts] = useState([])
  const [users] = useSingleUser()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState(' ')
  console.log(search)
  const { data, refetch } = useQuery({
    queryKey: ['allBlogs'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allBlogs?search=${search}`);
      return res.data
    }
  })
  /* Recent posts */
  useEffect(() => {
    axiosPublic.get('/recentPost')
      .then(res => {
        setRecentPosts(res.data)
      })
  }, []);

  const uniqueSingleCategory = data?.filter((item, index, self) => {
    return self.findIndex(t => t.category === item.category) === index;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearch(searchText)
    refetch();

  }
  const submitLike = (id) => {
    const userId = { 
      postId: id,
      postedId: users[0]?._id
    }
    axiosSecure.put("/blogLike", userId)
      .then(res => {
        console.log(res.data);
        refetch();
      })
      .catch(error => {
        console.error("Error:", error);
      });

  }

  return (
    <Box className="overflow-hidden" style={{ padding: '10px' }}>
      <DrawerAppBar></DrawerAppBar>
      <Typography variant="h3" sx={{ color: "black", textAlign: "center", fontWeight: 700 }} className="mt-5"> Knowledge Revolution </Typography>
      <Typography variant="h6" sx={{ color: "black", textAlign: "center", mt: 3 }} >Explore practical strategies for continuous <br /> learning and adapting to the ever-evolving world of information</Typography>
      <div className="container w-xl m-auto space-x-6  grid grid-cols-12 gap-2 my-12  ">
        {/* Left side colum */}
        <div className=" col-span-12 lg:col-span-4 space-y-6   ">
          <Box className="flex ">
            <Box
              sx={{
                width: 300,
                maxWidth: '100%',
                outline: 'none',
                border: 'none',
                borderRadius: 0,
              }}>
              <TextField style={{ borderRadius: 0 }} type='text' fullWidth onKeyUp={handleSearch} placeholder='Search category ' id="fullWidth" />
            </Box>
            <Button className="bg-[#8BD0EC] hover:bg-[#8BD0EC]" variant="contained" sx={{ borderRadius: 0 }} endIcon={<FaSearchLocation style={{ color: 'black' }} />}>
            </Button>
          </Box>

          <Box>
            <Typography className="tex-md md:text-xl" sx={{ letterSpacing: 6, fontWeight: 800 }}>
              CATEGORIES
            </Typography>
            <Box className="my-8">
              {uniqueSingleCategory?.map((category, i) => (
                <Typography key={i} component="div" mt={2} variant="body1" className="font-bold" >
                  {/* Use the actual title from the blog */}
                  {category.category}
                </Typography>
              ))}
            </Box>
          </Box>
          <Typography className="tex-md md:text-xl" sx={{ letterSpacing: 6, fontWeight: 800 }}>
            RECENT POSTS
          </Typography>
          <Box className="gap-4 space-y-8 flex-col md:flex-row ">
            {recentPosts.map((recentPost) => (
              <Card key={recentPost._id} style={{ boxShadow: '0px 2px 4px rgba(#F7FBFD)', width: "50%" }} className=" bg-[#DCF1F9]  shadow-none rounded-md " >
                <Link href={`/blogs/${recentPost._id}`}>
                  <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '100%' }}
                    image={recentPost.image}
                    alt="Live from space album cover"
                  />
                  <CardContent className=" flex flex-col ml-2 my-2" >
                    <Box className=" flex  space-x-4 uppercase" >
                      <Typography component="div" variant="subtitle">
                        {recentPost.date}
                      </Typography>
                    </Box>
                    <Typography className="font-bold text-md md:text-lg" >
                      {/* Use the actual title from the blog */}
                      {recentPost.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </Box>
        </div>
        {/* Right side colum */}
        <div className=" col-span-12 md:col-span-8 ">
          <div className="grid grid-cols-1 gap-6 ">
            {data?.map((blog, index) => (
              <Card key={index} className="flex flex-col lg:flex-row lg:items-end space-x-2 bg-[#DCF1F9] " >
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt="Live from space album cover"
                  className="w-full lg:w-[40%]  h-full"
                />
                <CardContent className=" flex flex-col space-y-4 shadow-none " >
                  <Box className=" flex justify-items-center space-x-6 uppercase" >
                    <Typography component="div" variant="subtitle">
                      {blog.date}
                    </Typography>
                    <Typography component="div" variant="subtitle," >
                      {blog.name}
                    </Typography>
                    <Avatar alt="Remy Sharp" className="w-8 h-8" src={blog?.userImg} />
                  </Box>
                  <Typography className="font-bold text-lg md:text-2xl"  >
                    {/* Use the actual title from the blog */}
                    {blog.title}
                  </Typography>
                  {
                    blog.details.length > 140 ?
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {blog.details.slice(0, 128)}
                      </Typography> :
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {blog.details}
                      </Typography>
                  }
                  <Box className="flex justify-end items-center justify-items-center space-x-6 " >
                    <Box>
                      {
                        blog.likes?.includes(users[0]?._id) ? <ThumbUpAltIcon className='ml-2' /> :
                      <Button onClick={() => submitLike(blog._id)} className="text-black w-10" ><ThumbUpOffAltIcon></ThumbUpOffAltIcon></Button>
                      }
                      {blog.likes?.length}
                    </Box>
                    <Box className="flex space-x-2" >
                      <ModeCommentOutlinedIcon ></ModeCommentOutlinedIcon>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {blog.comments.length}
                      </Typography>
                    </Box>
                    <Link href={`/blogs/${blog._id}`}>
                      <Button className=" w-4 bg-[#8BD0EC] hover:bg-[#8BD0EC]" variant="contained" sx={{ borderRadius: 0 }} endIcon={<ArrowRightIcon style={{ color: 'black', fontSize: '38px' }} />}>
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Box>

  );
};

export default page;


