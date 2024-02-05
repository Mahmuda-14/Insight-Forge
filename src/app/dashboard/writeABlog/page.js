// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/rules-of-hooks */
'use client'
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import HTMLReactParser from 'html-react-parser'
import React, { useCallback, useState } from 'react';
import { Jodit } from 'jodit/es2018/jodit.fat.min';
import JoditEditor from 'jodit-react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import useAuth from '@/app/hooks/useAuth';
import '../writeABlog/writeABlog.css'

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
		console.log(title, details, image)

		const data = new FormData()
		data.append('image', image)

		const res = await axiosPublic.post(image_hosting_api, data, {
			headers: {
				'content-type': 'multipart/form-data'
			}
		})

		if (res.data.success) {
			const blogItem = {
				name: user?.displayName,
				userImg: user?.photoURL,
				title,
				category,
				details,
				image: res?.data?.data?.display_url
			}
			console.log(blogItem)
		}
	}


	return (
		<div className='mt-20 min-h-screen'>

			<DashboardTitle subTitle="What's new blog?" headerTitle='Write a blog'></DashboardTitle>

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

				<input className='w-full border p-2 rounded-md outline-none my-3' name='category' placeholder="Blog category" type="text" />
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