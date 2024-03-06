"use client"

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@emotion/react';
import bg2 from "../../assets/logo3.png"
import Image from 'next/image';
import DevicesIcon from '@mui/icons-material/Devices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAdmin from '../hooks/useAdmin';
import useRecruiter from '../hooks/useRecruiter';
import PeopleIcon from '@mui/icons-material/People';
// import bgdashboard from '../../assets/dashboard-bg.jpg'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BugReportIcon from '@mui/icons-material/BugReport';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Loader from '@/components/loader/loader';
import LogoutIcon from '@mui/icons-material/Logout';
import PaidIcon from '@mui/icons-material/Paid';
import {  FolderSpecialRounded, PostAdd } from '@mui/icons-material';
import { QuestionAnswer } from '@mui/icons-material';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Navlink from '@/components/shared/Navbar/Navlink';
import { usePathname } from 'next/navigation';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props} sx={{mt:10}}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
               InsightForge
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'fixed',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const themeColor = createTheme({
    palette: {
        primary: {
          main: '#263238',
          // mainGradient: "linear-gradient(to right, #3c3c3c, #ffffff)",
          contrastText:"black"
        },
        secondary: {
          main:"#C5FFF8"
        }
        // ...
      },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1480,
          xl: 1536,
        },
      },
})

export default function Dashboard({ children }) {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isRecruiter, isRecruiterLoading] = useRecruiter();
    const [open, setOpen] = React.useState(true);
    const { logOut } = useAuth()
    const router = useRouter();
    const path = usePathname();

    console.log(isAdmin, isRecruiter);
    const theme = useTheme()
    if(isAdminLoading && isRecruiterLoading){
        return <Loader></Loader>
    }
    

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleLogOut = () => {
        router.push("/");
        logOut()
        toast.success("User logged in");
    }

   
    const mainListItemsAdmin = [
        {
            id: "1",
            route: "AdminProfile",
            pathname: "/dashboard",
            icon: <AccountCircleIcon />,
        },
        {
            id: "2",
            route: "User Management",
            pathname: "/dashboard/user",
            icon: <PeopleIcon />,
        },
        {
            id: "3",
            route: "All Discuss",
            pathname: "/dashboard/allDiscuss",
            icon: <Diversity3Icon />,
        },
        {
            id: "4",
            route: "Hackathon Creation",
            pathname: "/dashboard/createHackathon",
            icon: <BugReportIcon />,
        },
        {
            id: "5",
            route: "All Hackathon",
            pathname: "/dashboard/allHackathon",
            icon: <DevicesIcon />,
        },
        {
            id: "6",
            route: "All Payment",
            pathname: "/dashboard/allPayment",
            icon: <ReceiptIcon />,
        },
        {
            id: "7",
            route: "Analytics",
            pathname: "/dashboard/analytics",
            icon: <AccountCircleIcon />,
        },
        {
            id: "8",
            route: "Add Quiz",
            pathname: "/dashboard/quizz",
            icon: <AccountCircleIcon />,
        },
        {
            id: "9",
            route: "Submitted Hackathon",
            pathname: "/dashboard/submittedHackathon",
            icon: <AccountCircleIcon />,
        },


    ]
    const mainListItemsUser = [
        {
            id: "1",
            route: "User Profile",
            pathname: "/dashboard",
            icon: <AccountCircleIcon />,
        },
        {
            id: "2",
            route: "Write a blog",
            pathname: "/dashboard/writeABlog",
            icon: <EditNoteIcon />,
        },
        {
            id: "3",
            route: "My blog",
            pathname: "/dashboard/myBLog",
            icon: <EditNoteIcon />,
        },
        {
            id: "4",
            route: "My Payment",
            pathname: "/dashboard/myPayment",
            icon: <PaidIcon />,
            
        },
        {
            id:"5",
            route: "My Question",
            pathname: "/dashboard/myQuestion",
            icon: <QuestionAnswer />,
        }
        ,
        {
            id: "6",
            route: "My Hackathon",
            pathname: "/dashboard/myHackathon",
            icon: <PaidIcon />,
            
        },

    ]
    const mainListItemsRecruiter = [
        {
            id: "1",
            route: "Profile",
            pathname: "/dashboard",
            icon: <AccountCircleIcon />,
        },
        {
            id: "2",
            route: "Post Job",
            pathname: "/dashboard/postJob",
            icon: <PostAdd />,
        },
        {
            id: "3",
            route: "Post",
            pathname: "/dashboard/post",
            icon: <FolderSpecialRounded/>,
        }

    ]
    
    const secondaryListItems = [
        {
            id: "1",
            route: "Home",
            pathname: "/",
            icon: <HomeIcon />,
        },
        {
            id: "2",
            route: "Contact",
            pathname: "/contact",
            icon: <PhoneIcon />,
        }
    ];
    

    return (
        <ThemeProvider theme={themeColor}>
            <Box sx={{ display: 'flex' }} position="">
                <CssBaseline />
                <AppBar position="fixed" open={open} style={{ background: theme.palette.primary.main }}>
                {/* <AppBar position="absolute" open={open} style={{ background: "#263238", color:"white" }}> */}
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}  >
                        <IconButton
                            edge="start"
                            color="white"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon className='text-white' />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h5"
                            color="white"
                            noWrap
                            sx={{ flexGrow: 1, fontWeight:600, color: 'white' }}
                        >
                            Dashboard
                        </Typography>
                        {/* <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}
                    </Toolbar>
                </AppBar>
                <Drawer position="fixed" variant="permanent" open={open} >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                            background:"#4f675b",
                           
                        }}
                    >
                        <Image  src={bg2} alt='company' width={50} height={50} /> <Typography  variant="h7" sx={{ml:2, fontWeight:600, color:"white"}}>Insight <br/> Forge</Typography>
                        <IconButton onClick={toggleDrawer} sx={{ mr: 2, color: 'white' }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" sx={{ background: "#4f675b",  height:800 }}>
                       
                       {
                        isAdmin ?
                        <>
                        {mainListItemsAdmin.map((item) => (
                            <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'white' }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.route} />
                            </ListItemButton>
                        ))}
                        </>
                        :
                        isRecruiter?
                       <>
                        {mainListItemsRecruiter.map((item) => (
                            <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'white' }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.route} />
                            </ListItemButton>
                        ))}
                       </>
                        :
                        <>
                        {mainListItemsUser.map((item) => (
                            <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'white' }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.route} />
                            </ListItemButton>
                        ))}
                        </>
                       }

                        {/* {
                            isAdmin ?
                                <>
                                    {mainListItemsAdmin.map((item) => (
                                        <Navlink key={item.id} href={item.pathname}>
                                            {item.pathname === path ?
                                                (<ListItemButton variant="contained" style={{ color: 'white', background: '#6f817a' }}>
                                                    <ListItemIcon sx={{ color: 'white' }}>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText primary={item.route} />
                                                </ListItemButton>) : (
                                                    <ListItemButton sx={{ color: 'white' }}>
                                                        <ListItemIcon sx={{ color: 'white' }}>
                                                            {item.icon}
                                                        </ListItemIcon>
                                                        {item.route}

                                                    </ListItemButton>

                                                )}
                                        </Navlink>
                                    ))}
                                </>
                                :
                                isRecruiter ?
                                    <>
                                        {mainListItemsRecruiter.map((item) => (
                                            <Navlink key={item.id} href={item.pathname}>
                                                {item.pathname === path ?
                                                    (<ListItemButton variant="contained" style={{ color: 'white', background: '#6f817a' }}>
                                                        <ListItemIcon sx={{ color: 'white' }}>
                                                            {item.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.route} />
                                                    </ListItemButton>) : (
                                                        <ListItemButton sx={{ color: 'white' }}>
                                                            <ListItemIcon sx={{ color: 'white' }}>
                                                                {item.icon}
                                                            </ListItemIcon>
                                                            {item.route}

                                                        </ListItemButton>

                                                    )}
                                            </Navlink>
                                        ))}
                                    </>
                                    :
                                    <>
                                        {mainListItemsUser.map((item) => (
                                            <Navlink key={item.id} href={item.pathname}>
                                                {item.pathname === path ?
                                                    (<ListItemButton variant="contained" style={{ color: 'white', background: '#6f817a' }}>
                                                        <ListItemIcon sx={{ color: 'white' }}>
                                                            {item.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.route} />
                                                    </ListItemButton>) : (
                                                        <ListItemButton sx={{ color: 'white' }}>
                                                            <ListItemIcon sx={{ color: 'white' }}>
                                                                {item.icon}
                                                            </ListItemIcon>
                                                            {item.route}

                                                        </ListItemButton>

                                                    )}
                                            </Navlink>
                                        ))}
                                    </>
                        } */}

                        <Divider sx={{ my: 1, color: "white", mt: 2 }} />
                        <div className='flex flex-col'>
                            <div className='grow'>
                                {secondaryListItems.map((item) => (
                                    <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'white' }}>
                                        <ListItemIcon sx={{ color: 'white' }}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.route} />
                                    </ListItemButton>
                                ))}
                            </div>
                            <div className='grow-0'>
                                <ListItemButton onClick={handleLogOut} sx={{ color: 'white' }}>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary='Logout' />
                                </ListItemButton>
                            </div>
                        </div>
                    </List>
                </Drawer>
               
                    <div className=' mx-auto overflow-x-auto overflow-y-auto'>
                        {children}
                        <Copyright />
                    </div>
                    {/* md:min-w-[600px] ml-16 md:ml-16 
                    lg:ml-52 */}

                    {/* md:min-w-[600px] ml-16 md:ml-16    lg:ml-52 mx-auto overflow-x-auto overflow-y-auto" */}

                
            </Box>
        </ThemeProvider>
    );
}