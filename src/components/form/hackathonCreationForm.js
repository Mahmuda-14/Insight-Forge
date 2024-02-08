/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import useAxiosSecure from "@/app/hooks/useAxiosSecure";
import { Box, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const HackathonCreationForm = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
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
        const category = data.category

        const hackathonInfo = {
            title: title,
            totalPrice: totalPrice,
            description: description,
            category: category

        }

        axiosSecure.post('/hackathonInfo', hackathonInfo)
        .then(res=>{
            console.log(res.data)
            if(res.data.__v === 0) {
                toast.success("Hackathon Created Successfully")
                reset()

            }
        })
            
    }

    return (
        <div>
            <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, mt: 10, mb: 3, color: "black" }}>Create Hackathon</Typography>

            <Paper elevation={5} sx={{ p: 3 }}>
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
                                sx={{ backgroundColor: "#C5FFF8", mt: 2 }}
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
                                sx={{ backgroundColor: "#C5FFF8", mt: 2 }}
                            />


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
                                sx={{ backgroundColor: "#C5FFF8", mt: 2 }}
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
                                sx={{ backgroundColor: "#C5FFF8", mt: 2 }}
                            >
                                <MenuItem value={"beginner"}>Beginner</MenuItem>
                                <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                                <MenuItem value={"advance"}>Advance</MenuItem>
                            </Select>

                        </Grid>
                        {/* <Grid item xs={12}>
                        <InputLabel id="demo-simple-select-helper-label">Dead Line</InputLabel>
                        <DatePicker
                             sx={{ backgroundColor: "#C5FFF8", mt: 2 }}
                            label='Select Date'
                            value={value}
                            fullWidth
                            onChange={(newValue) => setValue(newValue)}
                            {...register("deadline", {
                                required: true,
                                
                            })}>

                        </DatePicker>
                    </Grid> */}
                    </Grid>
                    <button

                        className=" font-semibold w-full py-2 rounded mt-8 mb-2 bg-[#C5FFF8] text-black"
                    >
                        Create Hackathon
                    </button>
                </Box>
            </Paper>

        </div>
    );
};

export default HackathonCreationForm;