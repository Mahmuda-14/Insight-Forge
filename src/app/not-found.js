import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex  justify-center items-center">
           
            <Image src="https://i.ibb.co/pvZhLdQ/k.gif" alt="wire-removebg-preview" width={350} height={350}></Image>
            <div>
            <div className="flex justify-center items-center gap-[-50px]">
            <Image src="https://i.ibb.co/pR6mgf3/44-removebg-preview.png" alt="wire-removebg-preview" width={200} height={200}></Image>
            <Image src="https://i.ibb.co/Rc4tNRb/bomb-removebg-preview.png" alt="wire-removebg-preview" width={200} height={200}></Image>
            <Image src="https://i.ibb.co/pR6mgf3/44-removebg-preview.png" alt="wire-removebg-preview" width={200} height={200}></Image>
            </div>
            <p className='text-center text-[30px] text-black font-bold my-[40px]'>PAGE NOT FOUND</p>
            <div className='flex justify-center items-center'>
            <Link href="/">
            <button className="bg-white hover:bg-[#4f675b] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " style={{ border: '1px solid black' }}>Go back to home page</button>
            </Link>
            </div>
           
            </div>
          <div>
          
          </div>
        </div>
      );
};

export default NotFoundPage;