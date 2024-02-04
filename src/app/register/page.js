'use client';


import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import LogInAnimation from "../../assets/LogInAnimation.json";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useTheme } from "@emotion/react";
import GoogleIcon from '@mui/icons-material/Google';
import { Chip, Divider } from "@mui/material";

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

  const onSubmit = (data) => {
    console.log(data, data.name);
    const uEmail = data.email;
    const uName = data.name;
    const uPassword = data.password;
    const uPhoto = data.photo;

    registration(uEmail, uPassword).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser)
      updateUser(data.name, data.photo)
        .then(() => {
          console.log('User profile Updated')
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
      uPhoto: data.photo,
      role: "user"
    }

    axiosPublic.post('/users', userInfo)
      .then(res => {
        console.log(res.data)
        if (res.data.__v === 0) {
          console.log(loggedUser);
          updateUser(uName, uPhoto).then(() => {
            console.log("User profile Updated");
            reset();
            toast.success("User Updated Successfully");
            logOut().then().catch();
            router.push("/login");
          });
        }
      }).catch(err => { console.log(err) })

  };

  const handleGoogleLogIn = () => {

    googleLogIn()
      .then(result => {
        console.log(result.user)

        const userInfo = {
          uEmail: result?.user?.email,
          uName: result?.user?.displayName,
          role: "user"
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            console.log(res.data);

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
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    {...register("name", { required: true })}
                    sx={{ backgroundColor: "#C5FFF8" }}
                  />
                  {errors.name && (
                    <Typography> Name field is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Photo URL"
                    label="Photo URL"
                    name="Photo URL"
                    autoComplete="Photo URL"
                    {...register("photo", { required: true })}
                    sx={{ backgroundColor: "#C5FFF8" }}
                  />
                  {errors.photo && (
                    <Typography> Photo URL Field is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...register("email", { required: true })}
                    sx={{ backgroundColor: "#C5FFF8" }}
                  />
                  {errors.email && (
                    <Typography> Email Field is required</Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
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
                    sx={{ backgroundColor: "#C5FFF8" }}
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

                className=" font-semibold w-full py-2 rounded mt-3 mb-2 bg-[#C5FFF8] text-black"
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
              
            <button onClick={handleGoogleLogIn} className=" font-semibold w-full py-2 rounded mt-7 mb-2 text-lg bg-[#C5FFF8] text-black">
              <GoogleIcon sx={{ mr: 3, color: "blue" }} />
              Google Log In
            </button>
          </Box>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />

    </Box>
  );
}
