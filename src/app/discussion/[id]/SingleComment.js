import { Avatar, IconButton, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useAuth from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';

const SingleComment = ({ comment, refetch, data }) => {
    const { _id, userPhoto, userName, userEmail, text, date, postedId } = comment || []
    const axiosSecure = useAxiosSecure()
    const [show, setShow] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const { user } = useAuth();
    const router = useRouter()
    console.log(data.email)

    const [formattedTimestamp, setFormattedTimestamp] = useState('');

    useEffect(() => {
        const convertTimestamp = () => {

            const timestamp = new Date(date);

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

            const formattedResult = formatter.format(timestamp);

            setFormattedTimestamp(formattedResult);
        };

        convertTimestamp();
    }, [date]);

    const handleDot = () => {
        if (user && user?.email) {
            setShow(!show)
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }

    const handleUpdate = () => {
        setShow(!show)
        setShowUpdate(!showUpdate)
    }

    const handleCancel = () => {
        setShowUpdate(!showUpdate)
    }

    const handleReport = () => {
        toast.success("You report this user");
        setShow(!show)
    }



    const handleDelete = (id, athorId) => {
        const deleteItem = {
            id,
            athorId
        }

        axiosSecure.put('/deleteComment', deleteItem)
            .then(res => {
                console.log(res.data)
                if (res.data) {
                    refetch()
                    toast.success("Comment deleted successfully");
                }
            })
            .catch(error => {
                toast.error("Something is wrong");
                console.error("Error:", error);
            });
    }

    const updateAns = (text, updatedId) => {
        if (user && user?.email) {
            if (user?.email === userEmail) {
                const updateInfo = {
                    text,
                    updatedId,
                }
                console.log(updateInfo)
                axiosSecure.put('/updateComment', updateInfo)
                    .then(res => {
                        console.log(res, res.data)
                        if (res.status == 200) {
                            toast.success("Answer update successfully");
                            refetch()
                            setShowUpdate(!showUpdate)
                        }
                    }).catch(error => {
                        toast.error("Something is wrong");
                    });
            } else {
                toast.error("Something is wrong");
            }
        } else {
            toast.success("You are not Logged In!");
            router.push("/login");
        }
    }

    return (
        <div className='my-5 border-b-2 pb-2' key={_id}>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 mb-2'>
                    <img className="w-12 h-12 rounded-full" src={userPhoto} alt="athor image" />
                    <div>
                        <p className='font-bold'>{userName}</p>
                        <h6 className='text-sm text-gray-500'>{formattedTimestamp}</h6>
                    </div>
                </div>
                <div>
                    <IconButton
                        onClick={handleDot}
                        sx={{ color: '#646464', cursor: "pointer" }}>
                        <MoreHorizIcon sx={{ fontSize: '18px' }} />
                    </IconButton>

                    <div className='absolute'>
                        {
                            show ? <div className='w-20 h-full bg-gray-100 relative -ml-10 mt-1 rounded-md p-2'>
                                <div>
                                    {
                                        user?.email === userEmail ?
                                            <button onClick={() => { handleDelete(_id, postedId) }} className='hover:bg-gray-200 p-1 rounded-sm w-full'>
                                                delete
                                            </button> :
                                            <button onClick={handleReport}
                                                className='hover:bg-gray-200 p-1 rounded-sm w-full'>
                                                report
                                            </button>
                                    }
                                </div>
                                <div>
                                    {
                                        user?.email === userEmail && <button onClick={() => { handleUpdate(_id) }} className='hover:bg-gray-200 p-1 rounded-sm w-full'>
                                            edit
                                        </button>
                                    }
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>

            {
                showUpdate ?
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            const from = e.target
                            const text = from.answer.value
                            updateAns(text, _id)
                        }} className='from mt-5'>
                            <div className='mb-3'>
                                <TextField name='answer'
                                    defaultValue={text}
                                    className='input w-full'
                                    id="outlined-multiline-static"
                                    rows={3}
                                />
                            </div>
                            <button type='submit' className="bg-[#4F675B] text-white p-2 rounded-md hover:bg-[#6c897b]">update</button>
                            <button onClick={handleCancel} className="text-[#4F675B] p-2 rounded-md hover:bg-[#6c897b] hover:text-white ml-3 border border-[#6c897b]">cancel</button>
                        </form>
                    </div> :
                    <Typography className='mt-0' color="text.secondary">
                        {text}
                    </Typography>
            }


        </div>
    );
};

export default SingleComment;