import { Avatar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const SingleComment = ({ comment }) => {
    const { _id, userPhoto, userName, text, date } = comment || []

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

    return (
        <div className='my-5 border-b-2 pb-2' key={_id}>
            <div className='flex items-center gap-2 mb-2'>
                <img className="w-12 h-12 rounded-full" src={userPhoto} alt="athor image" />
                <div>
                    <p className='font-bold'>{userName}</p>
                    <h6 className='text-sm text-gray-500'>{formattedTimestamp}</h6>
                </div>
            </div>

            <Typography className='mt-0' color="text.secondary">
                {text}
            </Typography>

        </div>
    );
};

export default SingleComment;