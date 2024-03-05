import useAxiosSecure from "@/app/hooks/useAxiosSecure";
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ProfileUpdate = ({ user }) => {

    const { uEmail, uName, uPhoto, country, permanentAddress, presentAddress, Workplace, post, birthday, phone, _id } = user || []
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, formState: { errors }, reset } = useForm()


    const onSubmit = async (data) => {

        const updateItem = {
            country: data.country,
            permanentAddress: data.permanentAddress,
            presentAddress: data.presentAddress,
            Workplace: data.workplace,
            post: data.post,
            birthday: data.dateOfBirth,
            phone: data.phone,
        }

        console.log(updateItem)

        const updateUser = await axiosSecure.patch(`/userUpdate/${_id}`, updateItem)
        if(updateUser.status === 200){
            toast.success("Update your profile")
        }else{
            toast.error("something was wrong")
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full mx-auto'>

                <div className="flex gap-3">
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        defaultValue={uEmail}
                        disabled
                        type="text"
                        autoComplete="email"
                        sx={{ backgroundColor: "#fff" }}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        id="country"
                        label="Country"
                        defaultValue={country}
                        type="text"
                        autoComplete="country"
                        {...register("country")}
                        sx={{ backgroundColor: "#fff" }}
                    />
                </div>
                <div className="flex gap-3 my-3">
                    <TextField
                        margin="normal"
                        fullWidth
                        id="presentAddress"
                        label="Present Address"
                        defaultValue={presentAddress}
                        type="text"
                        autoComplete="presentAddress"
                        {...register("presentAddress")}
                        sx={{ backgroundColor: "#fff" }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="permanentAddress"
                        label="Permanent Address"
                        defaultValue={permanentAddress}
                        type="text"
                        autoComplete="permanentAddress"
                        {...register("permanentAddress")}
                        sx={{ backgroundColor: "#fff" }}
                    />
                </div>
                <div className="flex gap-3">
                    <TextField
                        margin="normal"
                        fullWidth
                        id="workplace"
                        label="Workplace"
                        defaultValue={Workplace}
                        type="text"
                        autoComplete="workplace"
                        {...register("workplace")}
                        sx={{ backgroundColor: "#fff" }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="post"
                        label="Post"
                        defaultValue={post}
                        type="text"
                        autoComplete="post"
                        {...register("post")}
                        sx={{ backgroundColor: "#fff" }}
                    />
                </div>
                <div className="flex gap-3">
                    <TextField
                        margin="normal"
                        fullWidth
                        id="dateOfBirth"
                        label="Date Of Birth"
                        defaultValue={birthday}
                        focused
                        type="date"
                        autoComplete="dateOfBirth"
                        {...register("dateOfBirth")}
                        sx={{ backgroundColor: "#fff" }}
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Phone"
                        defaultValue={phone}
                        type="number"
                        autoComplete="phone"
                        {...register("phone")}
                        sx={{ backgroundColor: "#fff" }}
                    />
                </div>
                <button type='submit' className="bg-[#4F675B] text-white rounded-md p-3 mt-3">
                    Save Change
                </button>
            </form>

        </div>
    );
};

export default ProfileUpdate;