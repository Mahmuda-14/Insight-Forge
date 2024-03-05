// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/rules-of-hooks */
'use client'
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import React, { useCallback, useEffect, useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import useAuth from '@/app/hooks/useAuth';
import '../writeABlog/writeABlog.css'
import toast from 'react-hot-toast';
import { TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';


const image_hosting_key = process.env.NEXT_PUBLIC_Image_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Form = () => {
	const [isSource, setSource] = useState(false);
	const axiosPublic = useAxiosPublic()
	const { user } = useAuth();

	const { register, handleSubmit, formState: { errors }, reset } = useForm()

	const onSubmit = async (data) => {
		const title = data.title
		const category = data.category
		const details = data.details
		console.log(title, details, category)

		const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            },
            body: imageFile
        })

		console.log(res.data)

		if (res.data.success) {
			const blogItem = {
				name: user?.displayName,
				userImg: user?.photoURL,
				userEmail: user?.email,
				title,
				category,
				details,
				image: res?.data?.data?.display_url
			}
			console.log(blogItem)
			const blogRes = await axiosPublic.post('/blog', blogItem)
			console.log(blogRes)
			if (blogRes.status = 200) {
				reset()
				toast.success("Your blog has been publish");
			}
		}
	}

	const timestampStr = "2024-02-06T08:27:00.878+00:00";
	const [formattedTimestamp, setFormattedTimestamp] = useState('');
	const [targetTimezone, setTargetTimezone] = useState('America/New_York');
	
	useEffect(() => {
		const convertTimestamp = () => {

			const timestamp = new Date(timestampStr);

			// Use the Intl.DateTimeFormat object with timeZone option
			const formatter = new Intl.DateTimeFormat('en-US', {
			//   timeZone: targetTimezone,
			  year: 'numeric',
			  month: 'numeric',
			  day: 'numeric',
			  hour: 'numeric',
			  minute: 'numeric',
			  second: 'numeric',
			  timeZoneName: 'short',
			});
		
			const formattedResult = formatter.format(timestamp);
		
			setFormattedTimestamp(formattedResult);

			setFormattedTimestamp(formattedResult);
		};

		convertTimestamp();
	}, []);


	return (
		<div className='mt-20 min-h-screen min-w-full'>

			<DashboardTitle subTitle="What is the new blog?" headerTitle='Write a blog'></DashboardTitle>

			<form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto md:pr-3 md:pl-20 pl-[60px] pr-2'>
				<input className='hidden text-3xl font-semibold mb-3' {...register("image", { required: true })} type="file" id='coverImg' />
				<label required htmlFor='coverImg' className='text-gray-500 flex mb-3 items-end cursor-pointer'>
					<AddPhotoAlternateIcon sx={{ width: '50px', height: '50px' }} className='w-50 text-gray-500' />
					<p className='font-semibold'>add your blog cover</p>
				</label>
				{errors.image && (
                    <Typography sx={{color: 'red'}}> Photo Field is required</Typography>
                  )}

				<input className='w-full border p-2 rounded-md outline-none text-xl md:text-2xl lg:text-3xl font-semibold mb-3' {...register("title")} placeholder="Title" type="text" />

				<TextField {...register("details")}
                                required
                                className='input w-full'
                                placeholder="Details"
                                multiline
                                rows={10}
                            />

				<select className='w-full border p-2 rounded-md outline-none my-3' defaultValue='' {...register("category")} >
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

				<button type='submit' class="btn-53">
					<div class="original">PUBLISH</div>
					<div class="letters">

						<span>P</span>
						<span>U</span>
						<span>B</span>
						<span>L</span>
						<span>I</span>
						<span>S</span>
						<span>H</span>
					</div>
				</button>
			</form>



		</div>
	);
};

export default Form;