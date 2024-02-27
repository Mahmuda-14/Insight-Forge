/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { TextField } from '@mui/material';
import React, { useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';


const image_hosting_key = process.env.NEXT_PUBLIC_Image_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Update = ({ blog }) => {
    console.log(blog)
    const axiosPublic = useAxiosPublic()
    const [newImg, setNewImg] = useState()
    const [newTitle, setNewTitle] = useState()
    const [newCategory, setNewCategory] = useState()
    const [newDetails, setNewDetails] = useState()

    const { image, title, details, category } = blog || []

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {

            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                body: imageFile
            })
        

        const blogItem = {
            title: data.title,
            category: data.category,
            details: data.details,
            image:  res?.data?.data?.display_url|| image
        }

        console.log(blogItem)
        // const blogRes = await axiosPublic.put('/blog', blogItem)
        // console.log(blogRes)
        // if (blogRes.status = 200) {
        // 	reset()
        // 	toast.success("Your blog has been publish");
        // }
    }

    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto'>
                <input className='hidden text-3xl font-semibold mb-3'  {...register("image")} type="file" id='coverImg' />
                <label required htmlFor='coverImg' className='text-gray-500 flex mb-3 items-end cursor-pointer'>
                    <AddPhotoAlternateIcon sx={{ width: '50px', height: '50px' }} className='w-50 text-gray-500' />
                    <p className='font-semibold'>add your blog cover</p>
                </label>

                <input className='w-full border p-2 rounded-md outline-none text-3xl font-semibold mb-3' defaultValue={title} {...register("title")} placeholder="Title" type="text" />

                <TextField defaultValue={details} {...register("details")}
                    className='input w-full'
                    placeholder="Details"
                    multiline
                    rows={10}
                />

                <select defaultValue={category} className='w-full border p-2 rounded-md outline-none my-3'  {...register("category")} >
                    <option disabled value=''>Select blog category</option>
                    <option value="angular">angular</option>
                    <option value="apache">apache</option>
                    <option value="babel">babel</option>
                    <option value="css">css</option>
                    <option value="docker">docker</option>
                    <option value="django">django</option>
                    <option value="express js">express js</option>
                    <option value="flask">flask</option>
                    <option value="javascript">javascript</option>
                    <option value="kubernetes">kubernetes</option>
                    <option value="mongodb">mongodb</option>
                    <option value="mongoose">mongoose</option>
                    <option value="next js">next js</option>
                    <option value="nginx">nginx</option>
                    <option value="node js">node js</option>
                    <option value="npm">npm</option>
                    <option value="PostgreSQL">PostgreSQL</option>
                    <option value="react">react</option>
                    <option value="restful apis">restful apis</option>
                    <option value="Ruby on Rails">Ruby on Rails</option>
                    <option value="SQL database">SQL database</option>
                    <option value="version control">version control</option>
                    <option value="vue js">vue js</option>
                    <option value="webpack">webpack</option>
                </select>


                <button type='submit' class="bg-[#4F675B] text-white py-2 px-3 rounded-md">Update</button>
            </form>
        </div>
    );
};

export default Update;