/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box,Button,Grid, Stack, TextField} from "@mui/material";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Container } from "postcss";
import { FaSearchLocation } from "react-icons/fa";
import { red } from "@mui/material/colors";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DrawerAppBar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";



const page = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   //const [blogs, setBlogs] = useState();
   const axiosPublic = useAxiosPublic();
   const [article, setArticle]= useState([ ])

   console.log(article)
   // eslint-disable-next-line react-hooks/rules-of-hooks
    const [search,setSearch] =useState()

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(()=>{
<<<<<<< HEAD
  axiosPublic.get(`/allBlog?search=${search}`)
=======
<<<<<<< HEAD
  axiosPublic.get(`/allBlog?search=${search}`)
=======
  axiosPublic.get("/allBlogs")
>>>>>>> 1afe671e7a2358060cd8a37bdeb722c1145ce41c
>>>>>>> 93a97b8d17b48bd94db20f640fc22feb874e307d
  .then(res=>{
    setArticle(res.data)
})

},[search])

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSearch(searchText)
    
}


  return (
    <Box className="overflow-hidden" style={{ background: 'linear-gradient(to right, #FFFFFF, #87CEEB)', padding:'10px' }}>
      <DrawerAppBar></DrawerAppBar>
      <Typography variant="h3" sx={{color:"black", textAlign:"center", fontWeight:700}} className="mt-5"> Knowledge Revolution </Typography>
      
      <Typography variant="h6" sx={{color:"black", textAlign:"center", mt:3}} >Explore practical strategies for continuous <br/> learning and adapting to the ever-evolving world of information</Typography>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 93a97b8d17b48bd94db20f640fc22feb874e307d
      {/* <Stack justifyContent='center' alignItems='center' >
      <form  style={{ display: 'flex', gap: '4px',marginTop:'8px' }}>
      <Box
            sx={{
                  width: 500,
                  maxWidth: '100%',
                  backgroundColor: 'white',
                  outline: 'none',
                  border: 'none'
            }}>
            <TextField type='text' fullWidth onKeyUp={handleSearch}  placeholder='Search category ' id="fullWidth" />
<<<<<<< HEAD
=======
=======
        <Typography variant="h6" sx={{ color: "#CD5C08", textAlign: "center", mt: 3 }} >Explore practical strategies for continuous <br /> learning and adapting to the ever-evolving world of information</Typography>

        <Stack justifyContent='center' alignItems='center' >
          <form style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
            <Box
              sx={{
                width: { xs:400, md:500},
                maxWidth: '100%',
                backgroundColor: 'white',
                outline: 'none',
                border: 'none'
              }}>
              <TextField type='text' fullWidth onKeyUp={handleSearch} placeholder='Search category ' id="fullWidth" />
            </Box>
          </form>
        </Stack>
        <Grid mt={5} container spacing={2}>
          {blogs && blogs.length > 0 ? (
            blogs.map((item, i) => (
              <Grid key={i} item xs={12} md={6}>
                <Card className="card w-auto h-[400px]" >
                  <CardMedia
                    component="img"
                    height="294"
                    image={item.image}
                    alt="Paella dish"
                   
                  />
                  <CardContent>
                    <Typography style={{ color: 'black', margin: '10px 0px' }} variant="h5" color="text.secondary">
                      {item.title}
                    </Typography>

                    <Typography style={{ color: 'black', margin: '5px 5px' }} variant="body" color="text.secondary">
                      Category: {item.category}
                    </Typography>

                    <Typography style={{ fontSize: '18px' }} variant="body2" color="text.secondary">
                      {item.details}
                    </Typography>
                  </CardContent>
                  {/*  <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions> */}
                </Card>
              </Grid>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </Grid>
>>>>>>> 1afe671e7a2358060cd8a37bdeb722c1145ce41c
>>>>>>> 93a97b8d17b48bd94db20f640fc22feb874e307d
      </Box>
      </form>
      </Stack> */}
       {/* <Grid mt={5} container  spacing={2}>
        {blogs && blogs.length > 0 ? (
          blogs.map((item, i) => (
             <Grid key={i} item xs={12} md={6}>
            <Card className="card" >
              <CardMedia
                component="img"
                height="294"
                image={item.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography style={{ color: 'black', margin: '10px 0px'}} variant="h5" color="text.secondary">
                  {item.title}
                </Typography>

                <Typography style={{ color: 'black', margin: '5px 5px' }} variant="body" color="text.secondary">
                  Category: {item.category}
                </Typography>

                <Typography style={{ fontSize: '18px' }} variant="body2" color="text.secondary">
                  {item.details}
                </Typography>
              </CardContent>
             {/*  <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions> }
            </Card>
          </Grid>
        
            
          ))
        ) : (
          <p>No data available.</p>
        )}
      </Grid>
       */}

    <div className="container w-xl m-auto  grid grid-cols-12 gap-2 my-12  ">
      {/* Left side colum */}
     
      <div className=" col-span-12 md:col-span-4 space-y-6 ">
      <div className="flex">
      <Box 
            sx={{
                  width:500,
                  maxWidth:'100%',
                  backgroundColor:red,
                  outline:'none',
                  border:'none',
                  borderRadius:0,
            }}>
            <TextField style={{borderRadius:0}} type='text' fullWidth onKeyUp={handleSearch}  placeholder='Search category ' id="fullWidth" />
        </Box>
          <Button className="bg-[#8BD0EC] hover:bg-[#8BD0EC]" variant="contained" sx={{borderRadius:0}} endIcon={<FaSearchLocation style={{ color: 'black' }}  />}>
          </Button>

          
      </div>

      <Typography component="div" variant="h6"  sx={{ letterSpacing: 6 , fontWeight:800}}>
      CATEGORIES
      </Typography>


      <div>
        {article.map((category,i)=>(
        <Typography key={i} component="div" mt={2} variant="body1" className="font-bold" >
             {/* Use the actual title from the blog */}
             {category.category}
             
          </Typography>
          ))}

      </div>
      </div>

      {/* Right side colum */}
      <div className=" col-span-12 md:col-span-8 ">
       <div className="grid grid-cols-1 gap-6 ">
       {article.map((blog,index)=>( 
        
          
          <Card key={index} style={{ borderRadius: 0, boxShadow: '0px 2px 4px rgba(0, 0, 0, 1.8)' }} className="flex flex-col lg:flex-row lg:items-end space-x-2 sh " >
         <CardMedia
        component="img"
        sx={{ width:'40%', height:'100%'}}
        image={blog.image}
        alt="Live from space album cover"
        
      />
      
        <CardContent className=" flex flex-col space-y-4" >

          <Box className=" flex  space-x-6 uppercase" >
          <Typography component="div" variant="subtitle">
           {blog.date}
        </Typography>
            <Typography component="div" variant="subtitle," >
            {blog.name}
            </Typography>
          </Box>
          <Typography component="div" variant="h5" sx={{ fontWeight:700}}  >
             {/* Use the actual title from the blog */}
             {blog.title}
             
          </Typography>
          {
          blog.details.length> 140 ?
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {blog.details.slice(0,128)}
          </Typography>:
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {blog.details}
         </Typography>

          }
         
          <Box className="flex justify-end items-end " >
          <Button className=" w-4 bg-[#8BD0EC] hover:bg-[#8BD0EC]" variant="contained" sx={{borderRadius:0}} endIcon= {<ArrowRightIcon  style={{ color: 'black',fontSize:'38px' }}  />}>

          </Button>
          </Box>
        </CardContent>
    </Card>
      ) )}
       </div>
      </div>
    </div>
    <Footer></Footer>
    </Box>
    






  );
};

<<<<<<< HEAD
export default page;
=======
<<<<<<< HEAD
export default page;
=======
export default page;

>>>>>>> 1afe671e7a2358060cd8a37bdeb722c1145ce41c
>>>>>>> 93a97b8d17b48bd94db20f640fc22feb874e307d
