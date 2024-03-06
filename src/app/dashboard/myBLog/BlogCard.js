/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import HTMLReactParser from 'html-react-parser'
import '../myBLog/blog.css'
import Image from 'next/image';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import useMyBlog from '@/app/hooks/useMyBlog';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Link from 'next/link';



const BlogCard = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const [myBlog, refetch] = useMyBlog()
    const { title, image, details, createdAt, _id } = item || []

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

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteMyBlog/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This food has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    }).catch(error => {
                        toast.error("Something was wrong");
                      });
            }
        });
    }

    return (
        <div>
            <div class="e-card playing w-[310px] h-[450px]">
                <div class="image"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="infotop p-5">
                    <img alt='blog image' className='rounded-md w-80 h-[160px] mx-auto' src={image} />

                    <h1 className='mt-3'>
                        {title}
                    </h1>
                    <p className='text-gray-300 text-sm '>Posted Data: {formattedTimestamp}</p>
                    <div className='bg-none text-base text-gray-50'>
                        {
                            details.length > 87 ?
                                <p className='bg-none text-base text-gray-50'>
                                    {details.slice(0, 88)}
                                </p> :
                                <p variant="subtitle1" className='bg-none text-base text-gray-50'>
                                    {details}
                                </p>

                        }
                    </div>
                    <div className='flex justify-end items-center gap-5 mt-4'>
                        {/* <Link href={`/dashboard/updateBlog/${_id}`}>
                        <button class="bg-[#263238] hover:bg-[#4e5356] px-4 py-2 rounded-md">
                            <FaEdit />
                        </button>
                        </Link> */}
                        <button onClick={() => handleDelete(_id)} class="bg-red-600 hover:bg-red-500 px-4 pb-2 rounded-md">
                            <DeleteForeverIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;