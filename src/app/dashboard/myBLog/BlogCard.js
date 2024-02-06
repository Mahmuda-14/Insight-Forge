/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import HTMLReactParser from 'html-react-parser'
import '../myBLog/blog.css'
import Image from 'next/image';

const BlogCard = ({ item }) => {
    console.log(item)
    const { title, image, details, createdAt } = item || []
    return (
        <div>
            <div class="e-card playing w-[240px] h-[330px] lg:w-80 lg:h-[440px]">
                <div class="image"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="infotop p-5">
                <Image width={320} height={400} alt='blog image' className='' src={image}></Image>

                <h1 className='mt-3'>
                    {title}
                </h1>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;