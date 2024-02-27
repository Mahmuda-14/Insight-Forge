import { Avatar, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const SingleComment = ({ comment, refetch }) => {
    const { _id, userPhoto, userName, text, date, postedId } = comment || []
    const axiosSecure = useAxiosSecure()

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

    const handleDelete = (id, athorId) =>{
        const deleteItem = {
            id,
            athorId
        }
        console.log(deleteItem)

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
                onClick={() => { handleDelete(_id, postedId) }}
                    sx={{ color: '#646464', cursor: "pointer" }}>
                    <CloseIcon sx={{ fontSize: '18px' }} />
                </IconButton>
            </div>
            </div>

            <Typography className='mt-0' color="text.secondary">
                {text}
            </Typography>

        </div>
    );
};

export default SingleComment;