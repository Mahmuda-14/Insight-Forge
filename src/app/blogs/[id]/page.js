'use client'
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { Avatar, Box, Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
const page = ({params}) => {
          
       // eslint-disable-next-line react-hooks/rules-of-hooks
      const axiosPublic = useAxiosPublic();
        // eslint-disable-next-line react-hooks/rules-of-hooks
      const [blog, setBlog]= useState([ ]);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [countLike, setCountLike] = useState();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(()=>{
            axiosPublic.get(`/Blog/${params.id}`)
            .then(res=>{
              setBlog(res.data)
          })
          
          },[])

          const incrementCount = () => {
            setCountLike(countLike + 1);
          };
          console.log(countLike)
          
      return (
            <div className="container w-lg m-auto  grid grid-cols-12 gap-2 my-12  ">
          <Box className="col-span-12 md:col-span-8 ">

          <Card  style={{ borderRadius: 0, boxShadow: '0px 2px 4px rgba(0, 0, 0, 1.8)' }} className=" space-x-2  " >
         <CardMedia
        component="img"
        sx={{ width:'100%', height:'100%'}}
        image={blog.image}
        alt="Live from space album cover"
        
      />
      
        <CardContent className=" flex flex-col space-y-4" >
          <Box className="flex justify-between ">
            
            {/* Date and user name */}
            <Box className=" flex  space-x-6 uppercase" >
          <Typography component="div" variant="subtitle">
           {blog.date}
        </Typography>
            <Typography component="div" variant="subtitle," >
            {blog.name}
            </Typography>
          </Box>
          {/* Like and comment icon */}
          <Box className="flex gap-8 mr-8 ">
            <Box>
            <Button onClick={incrementCount}>
            <FavoriteBorderOutlinedIcon className='text-black'></FavoriteBorderOutlinedIcon>
            </Button>
           {blog.rating}
           </Box>
           <Box className="pt-2 space-x-4">
           <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
           {blog.comments?.length}
          
           </Box>

            </Box>


          </Box>

          
          <Typography component="div" variant="h5" sx={{ fontWeight:700}}  >
             {/* Use the actual title from the blog */}
             {blog.title}
             
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {blog.details}
         </Typography>
        </CardContent>
         </Card>

                  </Box>
                  {/* Comment section */}
                  <Box className="col-span-12 md:col-span-4">
                  

                  <div className=" ">
                 <Box 
                  sx={{
                    width:500,
                    maxWidth:'100%',
                    outline:'none',
                    border:'none',
                    borderRadius:0,
                  }}>
                <TextField style={{borderRadius:0}} type='text' fullWidth       placeholder='Added a Comment ...' id="fullWidth" />
              </Box>
              <Button className=" w-full bg-[#DCF1F9] hover:bg-[#8BD0EC] my-6  font-bold py-2" variant="contained" sx={{borderRadius:0}}>
               Post
             </Button>
      </div>

                  {blog.comments?.map((item)=>(
                  <Box key={item} className="flex space-x-4">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                     <Box>
                     <Typography variant="h5" color="text.secondary"component="div">
                     {item.author}
                   </Typography>
                     <Typography variant="subtitle1" color="text.secondary"component="div">
                     {item.text}
                   </Typography>
                     </Box>
                  </Box>
                  ))}








                  </Box>
            </div>
      );
};

export default page;

