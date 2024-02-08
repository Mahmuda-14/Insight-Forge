'use client'
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { Avatar, Box, Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import useAuth from '@/app/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const page = ({params}) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { user } = useAuth();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const axiosPublic = useAxiosPublic();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const {data,refetch } = useQuery({
      queryKey: ['blog'],
      queryFn: async () => {
      const res = await axiosPublic.get(`/blog/${params.id}`);
      return res.data
      }
      })

      const submitComment=(e)=>{
      e.preventDefault();
      const from = e.target;
      const text = from.comment.value;
      const postedId= data._id;
      const commentIn= {
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      userEmail: user?.email,
      text,
      postedId

      }
      axiosPublic.put("/commentBlog",commentIn)
      .then(res=>{
      console.log(res.data)
      refetch()
      })
      .catch(error => {
      console.error("Error:", error);
      });

      }

      return (
            <div className="container w-lg m-auto space-x-6 grid grid-cols-12 gap-2 my-12  ">
            <Box className="col-span-12 md:col-span-8 border-none shadow-none ">
            <Card  style={{ border:0 }} className=" space-x-2 shadow-none " >
            <CardMedia
            component="img"
            sx={{ width:'100%', height:'100%', borderRadius:2}}
            image={data?.image}
            alt="Live from space album cover"
            />
            <CardContent className=" flex flex-col space-y-4 " >
            <Box className="flex justify-between ">
            {/* Date and user name */}
            <Box className=" flex  space-x-6 uppercase mt-4" >
            <Typography component="div" variant="subtitle">
            {data?.date}
            </Typography>
            <Typography component="div" variant="subtitle," >
            {data?.name}
            </Typography>
            <Avatar alt="Remy Sharp" className="w-8 h-8" src={data?.userImg} />
            </Box>
            {/* Like and comment icon */}
            <Box className="flex  justify-items-center gap-8 mr-8 mt-4 ">
            <Box className="flex space-x-2">
            <FavoriteBorderOutlinedIcon className='text-black'></FavoriteBorderOutlinedIcon>
           <Typography>
           {data?.likes?.length}
           </Typography>
            </Box>
            <Box className="pt-1 flex space-x-2">
            <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
            <Typography>
            {data?.comments?.length}
            </Typography>
            </Box>
            </Box>
            </Box>
            <Typography className=' text-lg md:text-4xl' component="div"  sx={{ fontWeight:700}}  >
            {/* Use the actual title from the blog */}
            {data?.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
            {data?.details}
            </Typography>
            </CardContent>
            </Card>
            </Box>
                  {/* Comment section */}
          <Box className="col-span-12 md:col-span-4 mt-8 md:my-0 ">
          <form onSubmit={submitComment} className='px-6 lg:px-0'>
           <Box 
           className=""
          sx={{
          width:"100%",
          maxWidth:'100%',
          outline:'none',
          border:'none',
          }}>
          <TextField  type='text' fullWidth placeholder='Added a Comment ...' id="fullWidth" name="comment" />
          </Box> 
          <Button className=" w-full text-md  bg-[#DCF1F9] hover:bg-[#8BD0EC] my-6  font-bold py-2" type='submit' variant="contained" sx={{borderRadius:0}}>
          Post
          </Button>
          </form>
          <Box className="space-y-6">
          {data?.comments?.map((item, i)=>(
          <Box key={i} className="flex space-x-4 ">
          <Avatar alt="Remy Sharp" src={item?.userPhoto} />
          <Box className="">
          <Typography className=' text-lg md:text-xl  ' >
          {item?.userName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary"component="div">
          {item.text}
          </Typography>
          <hr className='w-full'></hr>
          </Box>
          </Box>
          ))}
          </Box>
          </Box>
            </div>
      );
};
export default page;