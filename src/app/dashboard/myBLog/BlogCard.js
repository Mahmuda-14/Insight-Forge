/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser'
import '../myBLog/blog.css'
import Image from 'next/image';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FaEdit } from "react-icons/fa";



const BlogCard = ({ item }) => {
    console.log(item)
    const { title, image, details, createdAt } = item || []

	const [formattedTimestamp, setFormattedTimestamp] = useState('');
	
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
		
			const formattedResult = formatter.format(timestamp);
		
			setFormattedTimestamp(formattedResult);
		};

		convertTimestamp();
	}, [createdAt]);

    return (
        <div>
            <div class="e-card playing w-[240px] h-[330px] lg:w-80 lg:h-[400px]">
                <div class="image"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="infotop p-5">
                    <Image width={320} height={400} alt='blog image' className='rounded-md' src={image}></Image>
                    <img />

                    <h1 className='mt-3'>
                        {title}
                    </h1>
                    <p className='text-gray-300 text-base '>Posted Data: {formattedTimestamp}</p>
                    {/* <div className='bg-none text-xs text-white'>
                    {
                        details.length > 140 ?
                            <Typography className='bg-none text-xs text-white' variant="subtitle1" color="text.secondary" component="div">
                                {HTMLReactParser(details).slice(0, 128)}
                            </Typography> :
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {HTMLReactParser(details)}
                            </Typography>

                    }
                    </div> */}
                    {/* <div className='flex justify-end items-center gap-5 mt-4'>
                    <button class="bg-[#263238] hover:bg-[#4e5356] px-4 py-2 rounded-md">
                    <FaEdit />
                        </button>
                    <button class="bg-red-600 hover:bg-red-500 px-4 pb-2 rounded-md">
                    <DeleteForeverIcon />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;