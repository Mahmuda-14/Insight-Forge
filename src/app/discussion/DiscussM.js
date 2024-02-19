/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { QuestionAnswer } from "@mui/icons-material";
import './discus.css'
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useDiscussData from '../hooks/useDiscussData';
import '../../components/banner/banner.css'
import useSingleUser from '../hooks/useSingleUser';

const DiscussM = ({ question }) => {
    const { name, photo, title, _id, userId, likes, comments, createdAt } = question || []
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const router = useRouter();
    const [, reload] = useDiscussData()
    const [users, singleUserReload] = useSingleUser()

    const [formattedTimestamp, setFormattedTimestamp] = useState('');

    console.log(question)

    useEffect(() => {
        const convertTimestamp = () => {

            const timestamp = new Date(createdAt);

            // Use the Intl.DateTimeFormat object with timeZone option
            const formatter = new Intl.DateTimeFormat('en-US', {
                //   timeZone: targetTimezone,
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                //   second: 'numeric',
                //   timeZoneName: 'short',
            });

            const formattedResult = formatter?.format(timestamp);

            setFormattedTimestamp(formattedResult);
        };

        convertTimestamp();
    }, [createdAt]);

    const likePost = (id, userId) => {
        if (user && user?.email) {
            const uId = {
                postId: users[0]?._id,
                postedId: id,
                userName: user?.displayName,
                userEmail: user?.email,
                userPhoto: user?.photoURL,
                athorId:userId
            }
            console.log(uId)
            axiosSecure.put('/questionLike', uId)
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        reload();
                        singleUserReload()
                        toast.success("You like this question");
                    }
                })
                .catch(error => {
                    toast.error("Something is wrong");
                    console.error("Error:", error);
                });
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }




    return (
        <div className=''>
            <div className="qusContainer card card2 flex flex-row justify-between my-2">
                <div key={_id} className='p-6'>
                    <div className='flex gap-4 mb-5'>
                        <img className='w-12 h-12 rounded-full' src={photo} />
                        <div>
                            <p className='font-bold'>{name}</p>
                            <p className='text-sm text-gray-500'>{formattedTimestamp}</p>
                        </div>
                    </div>

                    <Link href={`/discussion/${_id}`}><h3 className='text-xl font-bold my-1 w-[35rem]'>{title}</h3></Link>


                    <p>{comments?.length} Answers </p>
                    <div className="btnIcon my-3">
                        <Link href={`/discussion/${_id}`}><Button> <QuestionAnswer /> Answer</Button></Link>
                        <div className="like">
                            {
                                likes?.includes(users[0]?._id) ? <ThumbUpAltIcon className='ml-2' /> :
                                    <Button
                                        onClick={() => { likePost(_id, userId) }}
                                    ><ThumbUpOffAltIcon /></Button>
                            }
                            <span>{likes?.length} likes</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscussM;