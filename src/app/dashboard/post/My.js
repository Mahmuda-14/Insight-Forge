// import Image from 'next/image';
import { Delete } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';
import '../../../utils/button/theme_button.css'
import Swal from 'sweetalert2';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import toast from 'react-hot-toast';
const My = ({ item }) => {

    const { _id,logo, jobtitle, description } = item;

    const axiosPublic = useAxiosPublic();


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
                axiosPublic.delete(`/job/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This food has been deleted.",
                                icon: "success"
                            });
                            
                        }
                    }).catch(error => {
                        console.error("Error:", error);
                        toast.error("Something was wrong");
                      });
            }
        });
    }




    return (
        <div className="card3 card4 w-[21rem] h-[15rem] bg-white border-y-2 shadow-xl p-5 my-5">
            <div className='flex flex-row justify-between'>

                <div>
                    <Image src={logo} alt='company'
                        width={40}
                        height={44}
                    />
                </div>
                <div>
                    <button onClick={() => handleDelete(_id)}type='submit'><Delete></Delete></button>
                </div>
            </div>
            <h2 className='text-2xl mt-6 mb-4 font-semibold text-black text-left'>{jobtitle}</h2>
            <p className='text-xl text-slate-400 text-left'>{description}</p>


        </div>
    );
};

export default My;