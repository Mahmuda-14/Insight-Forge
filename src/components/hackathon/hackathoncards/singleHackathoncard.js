/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import './hackathoncard.css'
import '../../../utils/button/theme_button.css'
import { Backdrop, Box, Fade, Grid, InputLabel, MenuItem, Modal, Paper, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '@/app/hooks/useAuth';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';

const SingleHackathoncard = ({ hackathon }) => {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();

    const onSubmit = (data) => {

        const team = data.team;
        const address = data.address;
        const phone = data.phone;
        const currency = data.currency

        const registerInfo = {
            id: hackathon._id,
            name: user.displayName,
            email: user.email,
            title: hackathon.title,
            totalPrice: hackathon.fee,
            priceMoney:hackathon.totalPrice,
            description: hackathon.description,
            category: hackathon.category,
            team: team,
            address: address,
            phone: phone,
            currency: currency

        }

        axiosSecure.post('/register', registerInfo)
            .then(res => {
                window.location.replace(res.data.url)
                if (res.data.success === "success") {
                    toast.success("Your Payment has been done")
                    reset()

                }
            })

    }

    return (
        <div className="container">
            <div className="cardH flex flex-col p-3">
                <p className='font-bold text-center text-lg '>{hackathon.title}</p>
                <p className='text-xs mt-2 text-center'>{hackathon.description}</p>
                <p className='text-base mt-2  font-bold text-center'>{hackathon.category}</p>
                <div className='flex justify-between'>
                    <p className='text-sm mt-2  text-center'>Prize Money: <span className=' font-bold mr-6 text-lg'>${hackathon.totalPrice}</span></p>
                    <p className='text-sm mt-2 text-center'>Registration Fee: <span className=' font-bold text-lg'>${hackathon.fee}</span></p>
                </div>
                <button onClick={handleOpen} className='blog-button mt-3'>Register</button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}

                >
                    <Fade in={open}>

                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            sx={style}
                        >
                            <Grid container spacing={2} sx={{ width: "sm" }}>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="demo-simple-select-helper-label">Team Name</InputLabel>
                                    <TextField
                                        autoComplete="Team Name"
                                        name="TeamName"
                                        required
                                        fullWidth
                                        id="team"
                                        label="TeamName"
                                        autoFocus
                                        {...register("team", { required: true })}
                                        sx={{ backgroundColor: "white", mt: 2 }}
                                    />


                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="demo-simple-select-helper-label">Phone Number</InputLabel>
                                    <TextField
                                        required
                                        fullWidth
                                        id="Phone Number"
                                        label="Phone Number"
                                        name="Phone Number"
                                        autoComplete="Phone Number"
                                        {...register("phone", { required: true })}
                                        sx={{ backgroundColor: "white", mt: 2 }}
                                    />


                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="demo-simple-select-helper-label">address</InputLabel>
                                    <TextField
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        autoComplete="address"
                                        {...register("address", { required: true })}
                                        sx={{ backgroundColor: "white", mt: 2 }}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <InputLabel id="demo-simple-select-helper-label">Currency</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Currency"
                                        fullWidth
                                        {...register("currency", { required: true })}
                                        sx={{ backgroundColor: "white", mt: 2 }}
                                    >
                                        <MenuItem value={"BDT"}>BDT</MenuItem>
                                        <MenuItem value={"USD"}>USD</MenuItem>

                                    </Select>

                                </Grid>


                            </Grid>
                            <button

                                className=" font-semibold w-full py-2 rounded mt-8 mb-2 bg-[#4f675b] text-white"
                            >
                                Pay
                            </button>
                        </Box>

                    </Fade>
                </Modal>
            </div>
        </div>
    );
};

export default SingleHackathoncard;