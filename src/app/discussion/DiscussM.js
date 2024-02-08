/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { QuestionAnswer } from "@mui/icons-material";
import './discus.css'
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import useDiscussData from '../hooks/useDiscussData';
import '../../components/banner/banner.css'

const DiscussM = ({ question }) => {
    const { photo, title, _id, likes } = question;
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const router = useRouter();
    const [ reload] = useDiscussData()



    const likePost = (id) => {
        if (user && user?.email) {
            const uId = {
                postId: id
            }
            axiosSecure.put('/questionLike', uId)
                .then(res => {
                    console.log(res.data)
                    if (res.data) {
                        toast.success("You like this question");
                        reload();
                    }
                })
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }




    return (
        <div className="qusContainer card card2 flex flex-row justify-between my-2">
            <div key={question?._id} className='p-6'>
                <div className='flex gap-4 mb-5'>
                    <img className='w-12 h-12 rounded-full' src={question.photo} />
                    <div>
                        <p>{question.name}</p>
                        <p>Posted on 21 august 2012</p>
                    </div>
                </div>

                <Link href={`/discussion/${question?._id}`}><h3 className='text-xl font-bold my-1 w-[35rem]'>{question.title}</h3></Link>


                <p>50 Answers · 10 hours ago</p>
                <div className="btnIcon my-3">
                    <Link href={`/discussion/${question?._id}`}><Button> <QuestionAnswer /> Answer</Button></Link>
                    <div className="like">
                        <Button
                            onClick={() => { likePost(question?._id) }}
                        ><ThumbUpOffAltIcon /></Button>
                        <span>{question?.likes?.length} likes</span>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-[15rem] h-[13rem] mt-4 rounded-2xl' src="https://i.ibb.co/RNmQ9dJ/7.webp" />
            </div>
        </div>
    );
};

export default DiscussM;