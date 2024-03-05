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
import useDiscussData from '@/app/hooks/useDiscussData';
import SingleComment from './SingleComment';
import useSingleUser from '@/app/hooks/useSingleUser';
import { useForm } from 'react-hook-form';

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

    console.log(data)


    const [discuss, reload ] = useDiscussData()
    const [, singleUserReload ] = useSingleUser()

    const { register, handleSubmit, reset } = useForm()


    const postAns = (text, postedId, athorId) => {
        if (user && user?.email) {
            const ansInfo = {
                text,
                userName: user?.displayName,
                userEmail: user?.email,
                userPhoto: user?.photoURL,
                postedId,
                athorId
            }
            reset()
            console.log(ansInfo)
            axiosSecure.put('/postAnswer', ansInfo)
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        toast.success("You answer this question");
                        reload()
                        refetch()
                        singleUserReload()
                    }
                }).catch(error => {
                    toast.error("Something is wrong");
                });
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }


    return (
        <div>

        <Box className="mt-16" style={{ padding: '', }}>
            <DrawerAppBar></DrawerAppBar>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-10 mt-8 min-h-[60vh] mb-4'>
                <div className=' '>
                    <div>
                        <h3 className='text-xl font-bold'>{discuss.title}</h3>
                        <p className='text-base text-gray-500'>{discuss?.description}</p>
                    </div>
                    

                    <form  onSubmit={(e) => {
                        e.preventDefault()
                        const from = e.target
                        const text = from.answer.value
                        postAns(text, data?._id, data?.userId)
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
                        <button type='submit' className="bg-[#042030] text-white p-3 rounded-md hover:bg-[#3f515b]">Post Answer</button>
                    </form>
                </div>
                <div className=''>
                {
                        data?.comments && data?.comments?.length > 0 ? (
                            <div className='max-h-[400px] overflow-y-auto'>
                                {
                                    data?.comments?.map(comment => <SingleComment key={comment._id} comment={comment} refetch={refetch} data={data}></SingleComment>)
                                }
                            </div>
                        ) : <p>No answer available.</p>
                    }
                </div>
            </div>
            <Footer></Footer>
        </Box>
        </div>
    );
};

export default page;