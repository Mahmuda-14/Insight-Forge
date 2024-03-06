/* eslint-disable react-hooks/rules-of-hooks */
 /* eslint-disable react-hooks/exhaustive-deps */


"use client"

import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import useMyPaymentData from '@/app/hooks/useMyPaymentData';
import { Box, InputLabel, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const page = ({ params }) => {
    
    const axiosPublic = useAxiosPublic();
    const [myPayment] = useMyPaymentData()
  const hackathon = myPayment.find(hackathon=> hackathon._id === params.id)
  console.log(hackathon)
// eslint-disable-next-line react-hooks/rules-of-hooks
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();

    //

    const onSubmit = (data) => {

        const name = hackathon.order[0].name;
        const email = hackathon.email;
        const title = hackathon.order[0].title;
        const team = hackathon.order[0].team;
        const category = hackathon.order[0].category;
        const totalPrice = hackathon.order[0].totalPrice;
        const submission = data.link;
        const registerId = params.id;
        const submittedData = {
            name,email,title,team,category,totalPrice, submission, registerId
        }

        console.log(submittedData)
        axiosPublic.post('/submission', submittedData)
            .then(res => {
                console.log(res.data)
                if(res.data){
                    toast.success("your submission has been saved")
                    reset();
                }
            })

    }

    return (
        <div>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{mt:20, width:{xs:400, sm:600, lg:800}}}
            >
                <InputLabel id="demo-simple-select-helper-label" sx={{fontWeight:700, fontSize:18}} >Submit your live link, github link and necessary information here</InputLabel>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Submit your link here"
                    fullWidth
                    multiline
                    rows={6}
                    {...register("link", { required: true })}
                    sx={{ backgroundColor: "white", mt: 2 }}
                />

                <button
                    className=" font-semibold w-full py-2 rounded mt-8 mb-2 bg-[#4f675b] text-white"
                > send
                </button>
            </Box>

        </div>
    );
};

export default page;