// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/rules-of-hooks */
'use client'
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import React, { useCallback, useEffect, useState } from 'react';
import { Jodit } from 'jodit/es2018/jodit.fat.min';
import JoditEditor from 'jodit-react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import useAuth from '@/app/hooks/useAuth';
import '../writeABlog/writeABlog.css'
import toast from 'react-hot-toast';

/**
 * @param {Jodit} jodit
 */
function preparePaste(jodit) {
	jodit.e.on(
		'paste',
		e => {
			if (confirm('Change pasted content?')) {
				jodit.e.stopPropagation('paste');
				jodit.s.insertHTML(
					Jodit.modules.Helpers.getDataTransfer(e)
						.getData(Jodit.constants.TEXT_HTML)
						.replace(/a/g, 'b')
				);
				return false;
			}
		},
		{ top: true }
	);
}
Jodit.plugins.add('preparePaste', preparePaste);

const image_hosting_key = process.env.NEXT_PUBLIC_Image_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Form = () => {
	const [isSource, setSource] = useState(false);
	const axiosPublic = useAxiosPublic()
	const { user } = useAuth();

	const [config, setConfig] = useState({
		readonly: false,
		toolbar: true,
		buttons: ['bold', 'italic', 'underline', 'ul', 'ol', 'font', 'brush', 'fontsize', 'align', 'image', 'undo', 'redo', 'link', 'unlink', 'source']
	});

	const [textAreaValue, setTextAreaValue] = useState('');

	const [inputValue, setInputValue] = useState('');


	const handleWYSIWYGChange = useCallback(newTextAreaValue => {

		setTextAreaValue(newTextAreaValue);
		setInputValue(newTextAreaValue);

		return setTextAreaValue(() => newTextAreaValue);
	}, []);

	const handleNativeTextAreaChange = useCallback(e => {
		setTextAreaValue(e.target.value);
		setInputValue(e.target.value);
	}, []);

	const handlePost = async (e) => {
		e.preventDefault()
		const from = new FormData(e.target)
		const title = from.get("title")
		const image = from.get("image")
		const category = from.get("category")
		const details = textAreaValue
		console.log(title, details, category)

		const data = new FormData()
		data.append('image', image)

		const res = await axiosPublic.post(image_hosting_api, data, {
			headers: {
				'content-type': 'multipart/form-data'
			}
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


			// // Parse the timestamp string
			// const timestamp = new Date(timestampStr);

			// // Convert to a different timezone, for example, US/Eastern
			// const easternTimezoneOffset = -5 * 60; // UTC offset in minutes
			// const convertedTimestamp = new Date(timestamp.getTime() + easternTimezoneOffset * 60000);

			// // Format the result
			// const formattedResult = convertedTimestamp.toISOString().replace(/T/, ' ').replace(/\..+/, '');

			// Set the formatted timestamp in the state
			setFormattedTimestamp(formattedResult);
		};

		convertTimestamp();
	}, []);


	return (
		<div className='mt-20 min-h-screen min-w-full'>

			<div>
				<p>Original Timestamp: {timestampStr}</p>
				<p>Converted Timestamp (US/Eastern): {formattedTimestamp}</p>
			</div>

			<DashboardTitle subTitle="What is the new blog?" headerTitle='Write a blog'></DashboardTitle>

			<form onSubmit={handlePost} className='w-full mx-auto'>
				<input className='hidden text-3xl font-semibold mb-3' required name='image' type="file" id='coverImg' />
				<label required htmlFor='coverImg' className='text-gray-500 flex mb-3 items-end cursor-pointer'>
					<AddPhotoAlternateIcon sx={{ width: '50px', height: '50px' }} className='w-50 text-gray-500' />
					<p className='font-semibold'>add your blog cover</p>
				</label>
				<input className='w-full border p-2 rounded-md outline-none text-3xl font-semibold mb-3' name='title' placeholder="Title" type="text" />

				{!isSource ? (
					<JoditEditor
						config={config}
						onChange={handleWYSIWYGChange}
						value={textAreaValue}
					/>
				) : (
					<textarea
						className={'simple-textarea'}
						onChange={handleNativeTextAreaChange}
						value={textAreaValue}
					/>
				)}

				<select className='w-full border p-2 rounded-md outline-none my-3' defaultValue='' name='category'>
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