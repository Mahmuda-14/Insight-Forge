'use client';


import Avatar from "@mui/material/Avatar";

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import LogInAnimation from "../../assets/LogInAnimation.json";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useTheme } from "@emotion/react";
import GoogleIcon from '@mui/icons-material/Google';
import { Chip, Divider, InputLabel, MenuItem, Select } from "@mui/material";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        insightForge
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const image_hosting_key = process.env.NEXT_PUBLIC_Image_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

export default function RegistrationPage() {
  const axiosPublic = useAxiosPublic()


  const { registration, updateUser, logOut, googleLogIn } = useAuth();
  const router = useRouter();
  const theme = useTheme()



  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();

  const onSubmit = async (data) => {
    const uEmail = data.email;
    const uName = data.name;
    const uPassword = data.password;
    const uPhoto = data.photo;

    const imageFile = { image: data.photo[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      },
      body: imageFile
    })


   



    if (res.data.success) {

      registration(uEmail, uPassword).then((result) => {
        const loggedUser = result.user;
        updateUser(data.name, res?.data?.data?.display_url)
          .then(() => {
            reset();
            toast.success("user updated successfully")
          });
        logOut()
          .then()
          .catch()
        router.push('/login')
      })

      const userInfo = {
        uEmail: data.email,
        uName: data.name,
        uPhoto: res?.data?.data?.display_url,
        role: data.role
      }

      axiosPublic.post('/users', userInfo)
        .then(res => {
          if (res.data.__v === 0) {
            updateUser(uName, uPhoto).then(() => {
              reset();
              toast.success("User Updated Successfully");
              logOut().then().catch();
              router.push("/login");
            });
          }
        }).catch(err => {
          toast.error("Something was wrong");
        })
    }else{
      toast.error("Something was wrong")
    }


  };

  const handleGoogleLogIn = () => {

    googleLogIn()
      .then(result => {

        const userInfo = {
          uEmail: result?.user?.email,
          uName: result?.user?.displayName,
          uPhoto: result?.user?.photoURL,
          role: "user"
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            toast.error("Something was wrong");
          })

        router.push('/')
      })
      .catch()

  }

  return (
    <Box
      component="main"
      style={{ background: theme.palette.primary.mainGradient, padding: "100px", maxWidth: "xl" }}
    >

      <CssBaseline />
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Lottie animationData={LogInAnimation}></Lottie>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#2e7d32" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h4" sx={{ color: "#2e7d32", fontWeight: 600 }}>
              Sign up
            </Typography>
            <Typography component="h1" variant="h7" sx={{ color: "#2e7d32", fontWeight: 500, mt: 4, textAlign: "center" }}>
              If you are a recruiter then we are requesting you to Sign Up through registration field to experience some extra benefit
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="demo-simple-select-helper-label">Name</InputLabel>
                  <TextField
                    autoComplete="Name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    {...register("name", { required: true })}
                    sx={{ backgroundColor: "#a8f0cc", mt:2 }}
                  />
                  {errors.name && (
                    <Typography> Name field is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="demo-simple-select-helper-label">Photo URL</InputLabel>
                  <input className='hidden text-3xl font-semibold mb-3' {...register("photo", { required: true })} type="file" id='coverImg' />
                  <label required htmlFor='coverImg' className='text-gray-500 flex mb-3 items-end cursor-pointer pt-3'>
                    <AddPhotoAlternateIcon sx={{ width: '50px', height: '50px' }} className='w-50 text-gray-500' />
                    <p className='font-semibold'>add your blog cover</p>
                  </label>
                  {errors.photo && (
                    <Typography sx={{color: 'red'}}> Photo Field is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="demo-simple-select-helper-label">Email Address</InputLabel>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...register("email", { required: true })}
                    sx={{ backgroundColor: "#a8f0cc", mt:2  }}
                  />
                  {errors.email && (
                    <Typography> Email Field is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <InputLabel id="demo-simple-select-helper-label">User Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="user"
                    fullWidth
                    {...register("role", { required: true })}
                    sx={{ backgroundColor: "#a8f0cc" , mt:2 }}
                  >
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"recruiter"}>Recruiter</MenuItem>
                  </Select>
                  {errors.role && (
                    <Typography> User Role Field is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="demo-simple-select-helper-label">Password</InputLabel>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 25,
                      pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/,
                    })}
                    sx={{ backgroundColor: "#a8f0cc" , mt:2 }}
                  />
                  {errors.password?.type === "required" && (
                    <Typography>Password is required </Typography>
                  )}
                  {errors.password?.type === "minLength" && (
                    <Typography>Password must be 6 characters </Typography>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <Typography>
                      {" "}
                      Password can not be more than 20 characters
                    </Typography>
                  )}
                  {errors.password?.type === "pattern" && (
                    <Typography>
                      Password must have one uppercase character, one lowercase
                      character, one digit, one special character
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <button

                className=" font-semibold w-full py-2 rounded mt-8 mb-2 bg-[#4f675b] text-white"
              >
                Sign Up
              </button>
            </Box>

            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link href="/login" sx={{ color: "#2e7d32", textDecoration: "none", fontWeight: 600 }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 5 }}>
              <Chip label="OR" size="small" />
            </Divider>

            <button onClick={handleGoogleLogIn} className=" font-semibold w-full py-2 rounded mt-7 mb-2 text-lg bg-[#4f675b] text-white">
              <GoogleIcon sx={{ mr: 3, color: "white" }} />
              Google Log In
            </button>
          </Box>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />

    </Box>
  );
}
