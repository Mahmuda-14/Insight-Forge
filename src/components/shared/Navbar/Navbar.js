" use client"
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import CloseIcon from "@mui/icons-material/Close";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Image from 'next/image';
import useAuth from '@/app/hooks/useAuth';
import { useTheme } from '@emotion/react';
// import bg2 from "../../../assets/Insight Forge.png"
import bg2 from "../../../assets/logo3.png"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GroupsIcon from '@mui/icons-material/Groups';


const drawerWidth = 240;
const navItems = [
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
    route: "Contact",
    pathname: "contact",
    icon: <PhoneIcon />,
  },
  // {
  //   id: "4",
  //   route: "Discussion ",
  //   pathname: "discussion ",
  //   icon: <GroupsIcon />,
  // },
  {
    id: "5",
    route: "VirtualHackathon",
    pathname: "/hackathon",
    icon: <EditNoteIcon />,
  },
  {
    route: "Job Board",
    pathname: "/job",
    icon: < PhoneIcon />,
  }
];

const settings = [
  {
    id: "1",
    route: "Dashboard ",
    pathname: "dashboard",

  }]

const DrawerAppBar = (props, item) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logOut } = useAuth()
  const theme = useTheme();
  const router = useRouter();
  console.log(user)

  const handleLogOut = () => {
    logOut()
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: "black" }}>
      
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton href={item.pathname} sx={{ textAlign: 'start' }}>
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  justifyContent: "center",
                  color: "black"
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.route} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const isActive = router.pathname === item.pathname;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
  
    <Box sx={{ display: 'flex', color: "white" }}>
      
      <CssBaseline />
      <AppBar component="nav" style={{ background: theme.palette.primary.mainGradient }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Image src={bg2} alt='company' width={109} height={100} style={{ marginLeft: '107px', marginRight: '184px' }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, ml: 3 }}>
            {navItems.map((item) => (

              <Button variant="outlined"  href={item.pathname} key={item} sx={{  color: 'white',right:'10px'}} >
                {item.route}
              </Button>

              
           

             



            ))}
    </Box>
          {
    user && user?.email ? <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={user?.photoURL} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
            <Button href={setting.pathname} key={setting.id} sx={{ color: 'black' }}>
              {setting.route}
            </Button>
          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseUserMenu}>
          <Button onClick={handleLogOut} sx={{ color: 'black' }}>
            Log Out
          </Button>
        </MenuItem>
      </Menu>
    </Box>
      :
      <Box sx={{ flexGrow: 0 }}>
        <Button variant="contained" href='/login' sx={{ color: 'white', background: '#607d8b', right: '12px' }}>
          Login
        </Button>
        <Button variant="outlined" href='/register' sx={{ color: 'white', border: '2px solid #546e7a', borderRadius: '10px' }}>
          Register
        </Button>

      </Box>
  }
        </Toolbar >
      </AppBar >
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
        <Typography>
        </Typography>
      </Box>
    </Box >
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;