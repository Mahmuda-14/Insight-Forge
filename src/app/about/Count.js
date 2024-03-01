import Image from 'next/image';
import React from 'react';
import useUsersData from '../hooks/useUsersData';
import useBlogs from '../hooks/useBlogs';
import useDiscussData from '../hooks/useDiscussData';

const Count = () => {
  const [users] = useUsersData();
  const [blogs] = useBlogs();
  const [discuss] = useDiscussData();

  return (
    <div className="mt-20 mb-10">
      <div className="bg-cover bg-fixed bg-center bg-no-repeat h-[350px]" style={{ backgroundImage: 'url("https://i.ibb.co/0hMFwqH/paul-volkmer-f-X-q-Ws-Xl5x8-unsplash.jpg")' }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 px-[150px] py-[80px] ">
        

            <div className="flex flex-col items-center">
             <div className='h-[55px] w-[55px] mb-[20px]'>
             <Image src="https://i.ibb.co/D7TFD1q/aa-removebg-preview.png" alt="cover" width={55} height={55} />
             </div>
              <p className='text-white text-[30px] text-center'>{users.length}</p>
              <p className='text-white text-[20px] text-center'>Happy Client</p>
            </div>

            <div className=" flex flex-col items-center">
              <div className='h-[55px] w-[55px] mb-[20px]'>
              <Image src="https://i.ibb.co/jzsQGkB/a-removebg-preview-1.png" alt="cover" width={55} height={55} />
              </div>
              <p className='text-white text-[30px] text-center'>0</p>
              <p className='text-white text-[20px] text-center'>Client Reviews</p>
            </div>

            <div className=" flex flex-col items-center">
              <div className='h-[55px] w-[55px] mb-[20px]'>
              <Image src="https://i.ibb.co/D4kywBK/qu-removebg-preview.png" alt="cover" width={55} height={55} />
              </div>
              <p className='text-white text-[30px] text-center'>{discuss.length}</p>
              <p className='text-white text-[20px] text-center'>Posted Question</p>
            </div>

            <div className="flex flex-col items-center">
              <div className='h-[55px] w-[55px] mb-[20px]'>
              <Image src="https://i.ibb.co/80jhCMm/a-removebg-preview-4.png" alt="cover" width={55} height={55} />
              </div>
              <p className='text-white text-[30px] text-center'>{blogs.length}</p>
              <p className='text-white text-[20px] text-center'>Blog Post</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;