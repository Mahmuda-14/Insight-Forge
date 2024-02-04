/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import { Avatar, Box, Button, CardContent, CardHeader, IconButton, TextField, Typography } from '@mui/material';
import useAuth from '@/app/hooks/useAuth';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import DrawerAppBar from '@/components/shared/Navbar/Navbar';
import Footer from '@/components/shared/footer/Footer';

const page = ({ params }) => {
    console.log(params.id)
    const { user } = useAuth();
    const router = useRouter();
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { refetch, data } = useQuery({
        queryKey: ['discuss'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/discuss/${params.id}`);
            return res.data
        }
    })


    const postAns = (text, postedId) => {
        if (user && user?.email) {
            const ansInfo = {
                text,
                userName: user?.displayName,
                userEmail: user?.email,
                userPhoto: user?.photoURL,
                postedId
            }
            console.log(ansInfo)
            axiosSecure.put('/postAnswer', ansInfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        toast.success("You answer this question");
                        refetch()
                    }
                })
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }


    return (
        <Box className="" style={{ background: 'linear-gradient(to right, #FFFFFF, #87CEEB)', padding: '10px' }}>
            <DrawerAppBar></DrawerAppBar>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-8 min-h-screen'>
                <div className=' md:col-span-2'>
                    <div>
                        <h3 className='text-xl font-bold'>How do I break a string into words and track the index of is a each word (within the original string)?</h3>
                        <p className='text-base text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus laboriosam sunt tempore minima laudantium praesentium, ducimus reiciendis aut iste dolores labore animi quas quibusdam. At qui repudiandae ducimus facilis officiis.</p>
                    </div>
                    {
                        data?.comments && data?.comments?.length > 0 ? (
                            <div className='max-h-[400px] overflow-y-auto'>
                                {
                                    data?.comments?.map(comment => <div className='my-5 border-b-2 pb-2' key={comment?._id}>
                                        <div className='flex gap-2 mb-2'>
                                            <Avatar className='' aria-label="user image">
                                                {comment?.userPhoto}
                                            </Avatar>
                                            <p>{comment?.userName}</p>
                                        </div>

                                        <Typography className='mt-0' color="text.secondary">
                                            {comment?.text}
                                        </Typography>

                                    </div>)
                                }
                            </div>
                        ) : ''
                    }

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        const from = e.target
                        const text = from.answer.value
                        postAns(text, data?._id)
                    }} className='from mt-5'>
                        <div className='mb-3'>
                            <TextField name='answer'
                                required
                                className='input w-full'
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={3}
                            />
                        </div>
                        <Button type='submit' className="" variant="outlined">Post Answer</Button>
                    </form>
                </div>
                <div className='bg-gray-300'></div>
            </div>
            <Footer></Footer>
        </Box>
    );
};

export default page;
