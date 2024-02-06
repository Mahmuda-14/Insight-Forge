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
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ListItemButton, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@emotion/react';
import bg2 from "../../assets/Insight Forge (3).png"
import Image from 'next/image';
import GroupsIcon from '@mui/icons-material/Groups';
import DevicesIcon from '@mui/icons-material/Devices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAdmin from '../hooks/useAdmin';
import useRecruiter from '../hooks/useRecruiter';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
               InsightForge
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 220;

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
            position: 'relative',
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
    const [isAdmin] = useAdmin();
    const [isRecruiter] = useRecruiter();
    const [open, setOpen] = React.useState(true);

    console.log(isAdmin, isRecruiter);

    const toggleDrawer = () => {
        setOpen(!open);
    };
    const theme = useTheme()
    const mainListItemsAdmin = [
        {
            id: "1",
            route: "AdminProfile",
            pathname: "/dashboard",
            icon: <AccountCircleIcon />,
        }

    ]
    const mainListItemsUser = [
        {
            id: "1",
            route: "UserProfile",
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

    ]
    const mainListItemsRecruiter = [
        {
            id: "1",
            route: "RecruiterProfile",
            pathname: "/dashboard",
            icon: <AccountCircleIcon />,
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
            route: "Blogs",
            pathname: "blogs",
            icon: <EditNoteIcon />,
        },
        {
            id: "3",
            route: "Register",
            pathname: "register",
            icon: <AppRegistrationIcon />,
        },
        {
            id: "4",
            route: "Contact",
            pathname: "contact",
            icon: <PhoneIcon />,
        },
        {
            id: "5",
            route: "Discussion ",
            pathname: "discussion ",
            icon: <GroupsIcon/>,
        }
        ,
        {
            id: "6",
            route: "VirtualHackathon",
            pathname: "/hackathon",
            icon: <DevicesIcon />,
        },
    ];

    return (
        <ThemeProvider theme={themeColor}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} style={{ background: theme.palette.primary.mainGradient }}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}  >
                        <IconButton
                            edge="start"
                            color="black"
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
                            color="black"
                            noWrap
                            sx={{ flexGrow: 1, fontWeight:600, color: 'white' }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} >
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                            background: theme.palette.primary.mainGradient
                        }}
                    >
                        <Image  src={bg2} alt='company' width={50} height={50} /> <Typography  variant="h7" sx={{ml:2, fontWeight:600}}>Insight <br/> Forge</Typography>
                        <IconButton onClick={toggleDrawer} sx={{ mr: 2 }}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav" sx={{ background: theme.palette.primary.mainGradient }}>
                       
                       {
                        isAdmin ?
                        <>
                        {mainListItemsAdmin.map((item) => (
                            <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'black' }}>
                                <ListItemIcon sx={{ color: 'black' }}>
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
                            <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'black' }}>
                                <ListItemIcon sx={{ color: 'black' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.route} />
                            </ListItemButton>
                        ))}
                       </>
                        :
                        <>
                        {mainListItemsUser.map((item) => (
                            <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'black' }}>
                                <ListItemIcon sx={{ color: 'black' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.route} />
                            </ListItemButton>
                        ))}
                        </>
                       }

                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems.map((item) => (
                            <ListItemButton href={item.pathname} key={item.id} sx={{ color: 'black' }}>
                                <ListItemIcon sx={{ color: 'black' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.route} />
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
               
                    <Container maxWidth="xl">
                        {children}
                        <Copyright />
                    </Container>

                
            </Box>
        </ThemeProvider>
    );
}