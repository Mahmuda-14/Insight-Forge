/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Grid, TextField } from "@mui/material";
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
import useAuth from "../hooks/useAuth";
import BlogShare from "@/components/blogShare/modal";
import HTMLReactParser from 'html-react-parser'
import Script from "next/script";
import toast from "react-hot-toast";




const page = () => {
  const axiosSecure = useAxiosSecure()
  //const [blogs, setBlogs] = useState();
  const axiosPublic = useAxiosPublic();
  const [recentPosts, setRecentPosts] = useState([])
  const [users] = useSingleUser()
  const { user } = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState(' ')
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
    if (user && user?.email) {

      const userId = {
        postId: id,
        postedId: users[0]?._id
      }
      axiosSecure.put("/blogLike", userId)
        .then(res => {
          refetch();
        })
        .catch(error => {
          toast.error("Something was wrong");
        });
    } else {
      toast.success("You are not Logged In!");
      router.push("/login");
    }
  }

  return (
    <Box style={{ padding: '10px', overflow: 'hidden' }}>
      <DrawerAppBar></DrawerAppBar>
      {/* <div id="google_translate_element"></div>
      <Script id="google_translate_element" type="text/javascript">
        {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }
  `}
      </Script>
      <Script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></Script> */}



      <Typography variant="h3" sx={{ color: "black", textAlign: "center", fontWeight: 700, mt: 6 }} > Knowledge <span className="text-[#4f675b] font-extrabold "> Revolution</span> </Typography>
      <Typography variant="h6" sx={{ color: "black", textAlign: "center", mt: 2 }} >Explore practical strategies for continuous <br /> learning and adapting to the ever-evolving world of information</Typography>
      <div className="container w-xl m-auto space-x-6  grid grid-cols-12 gap-2 my-12  ">
        {/* Left side colum */}
        <div className=" col-span-12 lg:col-span-4 space-y-6   ">
          <Box sx={{ display: 'flex' }}>
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
            <button className="bg-gray-50 hover:bg-gray-100" variant="contained" sx={{ borderRadius: 0 }} endIcon={<FaSearchLocation style={{ color: 'black' }} />}>
            </button>
          </Box>

          <Box>
            <Typography sx={{ letterSpacing: 6, fontWeight: 800, }}>
              CATEGORIES
            </Typography>
            <div className="my-6 flex lg:flex-col  gap-4 ">
              {uniqueSingleCategory?.map((category, i) => (
                <Typography key={i} component="div" mt={2} variant="body1" className="font-bold" >
                  {/* Use the actual title from the blog */}
                  {category.category}
                </Typography>
              ))}
            </div>
          </Box>
          <Typography className="tex-md md:text-xl" sx={{ letterSpacing: 6, fontWeight: 800 }}>
            RECENT POSTS
          </Typography>
          <div className="gap-4 space-y-8 flex flex-wrap lg:flex-col   ">
            {recentPosts.map((recentPost) => (
              <Box key={recentPost._id} width={128}>
                <Link href={`/blogs/${recentPost._id}`}>
                  <img src={recentPost.image} alt="blog image" className=" h-32 w-32 rounded-sm" >
                  </img>
                  <Box>
                    {
                      recentPost.title.length > 50 ?
                        <Typography variant="subtitle1" fontWeight={600} color="black" component="div">
                          {recentPost.title.slice(0, 30)}
                        </Typography> :
                        <Typography variant="subtitle1" fontWeight={600} color="black" component="div">
                          {recentPost.title}
                        </Typography>
                    }
                  </Box>
                </Link>
              </Box>

            ))}
          </div>
        </div>


        {/* Right side colum */}
        <div className=" col-span-12 lg:col-span-8 ">
          {data?.map((blog, index) => (
            <Grid key={index} container spacing={2} sx={{ border: 0, boxShadow: '3px 3px 15px #00000026;', borderRadius: 3, marginY: 3 }} >
              <Grid xs={12} md={4}  >
                <img src={blog.image} alt="blog image" className="h-80 lg:h-60 w-full rounded-l-lg " >
                </img>
              </Grid>
              <Grid container direction="column " xs={12} md={8} justifyContent='space-between' paddingLeft={2} >
                <Box sx={{ display: 'flex', marginTop: 1 }} >
                  <Typography component="div" variant="subtitle">
                    {blog.date}
                  </Typography>
                  <Typography component="div" variant="subtitle," >
                    {blog.name}
                  </Typography>
                  <Avatar alt="Remy Sharp" sx={{ width: 32, height: 32, marginLeft: 2 }} src={blog?.userImg} />
                </Box>
                <Box>
                  <Typography className="font-bold text-lg md:text-2xl"  >
                    {/* Use the actual title from the blog */}
                    {blog.title}
                  </Typography>
                </Box>
                <Box>
                  {
                    blog.details.length > 140 ?
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {blog.details.slice(0, 128)}
                      </Typography> :
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        {blog.details}
                      </Typography>
                  }
                </Box>
                <div className="flex items-center justify-end space-x-6  " >
                  <Box>
                    <BlogShare></BlogShare>
                  </Box>
                  <Box>
                    {
                      blog.likes?.includes(users[0]?._id) ? <ThumbUpAltIcon className='ml-2' /> :
                        <button onClick={() => submitLike(blog._id)} className="text-black w-10" ><ThumbUpOffAltIcon></ThumbUpOffAltIcon></button>
                    }
                    {blog.likes?.length}
                  </Box>
                  <div className="flex space-x-2" >
                    <ModeCommentOutlinedIcon ></ModeCommentOutlinedIcon>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {blog.comments.length}
                    </Typography>
                  </div>
                  <Link href={`/blogs/${blog._id}`}>
                    <Button variant="contained" sx={{ borderRadius: 0, borderBottomRightRadius: 3, backgroundColor: "#496556", }} endIcon={<ArrowRightIcon style={{ color: 'black', fontSize: '38px' }} />}>
                    </Button>
                  </Link>
                </div>
              </Grid>
            </Grid>
          ))}

        </div>
      </div>
      <Footer></Footer>
    </Box>

  );
};

export default page;