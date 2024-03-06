"use client"
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */



import useAxiosSecure from "@/app/hooks/useAxiosSecure";
import { Box, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashboardTitle from "../shared/dashboardTitle/dashboardTitle";


const HackathonCreationForm = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();

    const onSubmit = (data) => {

        const title = data.title;
        const totalPrice = data.price;
        const description = data.description;
        const category = data.category;
        const fee = data.fee
        const date = data.date

        const hackathonInfo = {
            title: title,
            totalPrice: totalPrice,
            fee: fee,
            description: description,
            category: category,
            date: date

        }

        axiosSecure.post('/hackathonInfo', hackathonInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.__v === 0) {
                    toast.success("Hackathon Created Successfully")
                    reset()

                }
            })

    }

    return (
        <div className="md:min-w-[600px] ml-16 md:ml-16    lg:ml-52 mx-auto overflow-x-auto overflow-y-auto mt-10">
           <DashboardTitle subTitle='Create Hackathon Here' headerTitle='Create Hackathon'></DashboardTitle>

            <Paper elevation={10} sx={{ p: 3, m: 6 }}>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ mt: 3 }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-helper-label">Title</InputLabel>
                            <TextField
                                autoComplete="Title"
                                name="Title"
                                required
                                fullWidth
                                id="Title"
                                label="Title"
                                autoFocus
                                {...register("title", { required: true })}
                                sx={{ backgroundColor: "white", mt: 2 }}
                            />


                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-helper-label">Total Price</InputLabel>
                            <TextField
                                required
                                fullWidth
                                id="Total Price"
                                label="Total Price"
                                name="Total Price"
                                autoComplete="Total Price"
                                {...register("price", { required: true })}
                                sx={{ backgroundColor: "white", mt: 2 }}
                            />


                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-helper-label">Registration Fee</InputLabel>
                            <TextField
                                required
                                fullWidth
                                id="registrationFee"
                                label="Registration Fee"
                                name="registrationFee"
                                autoComplete="Registration Fee"
                                {...register("fee", { required: true })}
                                sx={{ backgroundColor: "white", mt: 2 }}
                            />


                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-helper-label">Dead Line</InputLabel>
                            <input className="mt-4 border-gray-300 border-2 w-full py-3 px-2 rounded" type="date"  id='date' {...register("date", { required: true })} />
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-helper-label">Description</InputLabel>
                            <TextField
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                name="description"
                                autoComplete="description"
                                {...register("description", { required: true })}
                                sx={{ backgroundColor: "white", mt: 2 }}
                            />

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                label="Category"
                                fullWidth
                                {...register("category", { required: true })}
                                sx={{ backgroundColor: "white", mt: 2 }}
                            >
                                <MenuItem value={"beginner"}>Beginner</MenuItem>
                                <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                                <MenuItem value={"advance"}>Advance</MenuItem>
                            </Select>

                        </Grid>

                    </Grid>
                    <button

                        className=" font-semibold w-full py-2 rounded mt-8 mb-2 bg-[#4f675b] text-white"
                    >
                        Create Hackathon
                    </button>
                </Box>
            </Paper>

        </div>
    );
};

export default HackathonCreationForm;