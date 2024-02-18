/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { Avatar, Box, Button, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import useAuth from '@/app/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useSingleUser from '@/app/hooks/useSingleUser';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';
import { useForm } from 'react-hook-form';
import BlogShare from '@/components/blogShare/modal';

const page = ({ params }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { user } = useAuth();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const axiosPublic = useAxiosPublic();
      const axiosSecure = useAxiosSecure();
      const [users] = useSingleUser()
      // eslint-disable-next-line react-hooks/rules-of-hooks
      
      const { data: blog, refetch } = useQuery({
            queryKey: ['blog'],
            queryFn: async () => {
                  const res = await axiosPublic.get(`/blog/${params.id}`);
                  return res.data
            }
      })

      const submitLike = (id) => {
            if (user && user?.email) {

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
            } else {
                  toast.success("You are not Logged In!");
                  router.push("/login");
            }
      }
      const {
            register,
            handleSubmit,
            reset
      } = useForm();


      const onSubmit = (data) => {


            const text = data.comment;
            const postedId = blog._id;
            const commentIn = {
                  userName: user?.displayName,
                  userPhoto: user?.photoURL,
                  userEmail: user?.email,
                  text,
                  postedId

            }
            console.log(commentIn)
            axiosPublic.put("/commentBlog", commentIn)
                  .then(res => {
                        console.log(res.data)
                        refetch()
                        reset()

                  })
                  .catch(error => {
                        console.error("Error:", error);
                  });

      }

      return (
            <div>
                  <DrawerAppBar></DrawerAppBar>
                  <div className="container w-lg m-auto space-x-6 grid grid-cols-12 gap-2 my-4  ">
                        <div className="col-span-12 md:col-span-8 border-none shadow-none ">
                              <Card style={{ border: 0 }} sx={{ marginX: 2, boxShadow: 'none' }} >
                                    <CardMedia
                                          component="img"
                                          sx={{ width: '100%', height: '100%', borderRadius: 2 }}
                                          image={blog?.image}
                                          alt="Live from space album cover"
                                    />
                                    <CardContent className=" flex flex-col space-y-4 " >
                                          <div className="flex
                  justify-between ">
                                                {/* Date and user name */}
                                                <div className=" flex  space-x-6 uppercase mt-4" >
                                                      <Typography component="div" variant="subtitle">
                                                            {blog?.date}
                                                      </Typography>
                                                      <Typography component="div" variant="subtitle," >
                                                            {blog?.name}
                                                      </Typography>
                                                      <Avatar alt="Remy Sharp" className="w-8 h-8" src={blog?.userImg} />
                                                </div>
                                                {/* Like and comment icon */}
                                                <div className="flex  justify-items-center gap-8 mr-8 mt-4 ">
                                                      <div className="flex space-x-2">
                                                            <BlogShare></BlogShare>
                                                            {
                                                                  blog?.likes?.includes(users[0]?._id) ? <ThumbUpAltIcon className='ml-2' /> :
                                                                        <Button onClick={() => submitLike(blog._id)} className="text-black w-10" ><ThumbUpOffAltIcon></ThumbUpOffAltIcon></Button>
                                                            }
                                                            <Typography>
                                                                  {blog?.likes?.length}
                                                            </Typography>
                                                      </div>
                                                      <Box className="pt-1 flex space-x-2">
                                                            <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
                                                            <Typography>
                                                                  {blog?.comments?.length}
                                                            </Typography>
                                                      </Box>
                                                </div>
                                          </div>
                                          <Typography className=' text-lg md:text-4xl' component="div" sx={{ fontWeight: 700 }}  >
                                                {/* Use the actual title from the blog */}
                                                {blog?.title}
                                          </Typography>
                                          <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {blog?.details}
                                          </Typography>
                                    </CardContent>
                              </Card>
                        </div>
                        {/* Comment section */}
                        <div className="col-span-12 md:col-span-4 mt-8 md:my-0 ">

                              <Box
                                    component="form"
                                    noValidate
                                    onSubmit={handleSubmit(onSubmit)}
                                    sx={{ mt: 3 }}
                              >
                                    <TextField type='text' fullWidth placeholder='Added a Comment ...' id="fullWidth" name="comment"
                                          {...register("comment", { required: true })}
                                          sx={{ backgroundColor: "#a8f0cc", mt: 2 }}
                                    />
                                    <button

                                          className=" font-semibold w-full py-2 rounded mt-8 mb-2 bg-[#4f675b] text-white"
                                    >
                                          Comment
                                    </button>

                              </Box>

                              <Box className="space-y-6">
                                    {blog?.comments?.map((item, i) => (
                                          <Box key={i} className="flex space-x-4 ">
                                                <Avatar alt="Remy Sharp" src={item?.userPhoto} />
                                                <Box className="">
                                                      <Typography className=' text-lg md:text-xl  ' >
                                                            {item?.userName}
                                                      </Typography>
                                                      <Typography variant="subtitle1" color="text.secondary" component="div">
                                                            {item.text}
                                                      </Typography>
                                                      <hr className='w-full'></hr>
                                                </Box>
                                          </Box>
                                    ))}
                              </Box>
                        </div>
                  </div>
                  <Footer></Footer>
            </div>
      );
};
export default page;