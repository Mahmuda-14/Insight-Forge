"use client";


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from "react-hook-form";
import useAuth from '@/app/hooks/useAuth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Chip, Divider } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import useAxiosPublic from '../hooks/useAxiosPublic';



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
        InsightForge
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LogInPage() {
  const { signIn, googleLogIn } = useAuth();
  const axiosPublic = useAxiosPublic()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const router = useRouter();
  // const from = router.pathname || '/'

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const loggedUser = result.user;

      router.push("/");
      toast.success("User logged in");

    });
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

          })

        router.push('/')
      })
      .catch((error => toast.error("Something was wrong")
      ))



  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        style={{ padding: '10px' }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#2e7d32" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            color="primary.main"
            sx={{ fontWeight: 700, color: "#2e7d32" }}
          >
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              {...register("email", { required: true })}
              sx={{ backgroundColor: "#a8f0cc" }}
            />
            {errors.email && <span>Email field is required</span>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: true })}
              sx={{ backgroundColor: "#a8f0cc" }}
            />
            {errors.password && <span>Password field is required</span>}
            <button

              className='font-semibold w-full py-2 rounded mt-3 mb-2 bg-[#4f675b] text-white'
            >
              Sign In
            </button>
            <Grid container>
              <Grid item>
                <Link href="/register" sx={{ color: "#2e7d32", textDecoration: "none", fontWeight: 600 }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

          </Box>
          <Divider sx={{ mt: 5, border: 'black' }}>
            <Chip label="OR" size="small" />
          </Divider>
          <button onClick={handleGoogleLogIn} className=" font-semibold w-full py-2 rounded mt-7 mb-2 text-lg bg-[#4f675b] text-white">
            <GoogleIcon sx={{ mr: 3, color: "white" }} />
            Google Log In
          </button>
          <Copyright sx={{ mt: 5 }} />
        </Box>

      </Grid>
    </Grid>
  );
}
