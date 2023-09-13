import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import CreateJob from '../Features/CreateJob';
import OrdersOverview from '../Features/OrdersOverview';
import OrderDetails from '../Features/OrderDetails';
import TopBar from '../Components/TopBar';
import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from '../Components/SideBar';
import { setLoading } from '../Store/Reducers/overviewSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setSnacky } from '../Store/Reducers/overviewSlice';
import { Alert, Snackbar } from '@mui/material';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));



export default function Layout() {
  const theme = useTheme()
  const history = useNavigate();
  const dispatch = useDispatch()
  let loading = useSelector((state) => state.overview.loading)
  let snacky = useSelector((state) => state.overview.snacky)

  // const loading = useSelector((state) => state.store)
  const [loggedIn, setLoggedIn] = React.useState(false);

  console.log('loading state: ', loading)
  React.useEffect(() => {
    const authLogin = JSON.parse(localStorage.getItem("user") || "{}")
    if (Object.keys(authLogin).length === 0) {
      return history('/login')
    } else {
      setLoggedIn(true)
      console.log('loggedin', loggedIn)
    }
  }, [])
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setSnacky({
      open: false,
      color: "success",
      message: "nothing"
    }))
  };
  React.useEffect(()=>{
    console.log('snacky', snacky)
  }, [snacky.open])
  return (
    <>
      <TopBar />
      <Grid container spacing={2}>
        <Grid xs={10}>
          <Box component={'div'} sx={{ pl: '50px', pt: '20px', }}>
            {/* <Typography component={'a'} href="/" display={'flex'} alignItems='center' color={theme.palette.grey[900]}>
              <HomeIcon fontSize='large' />
              <Typography variant='subtitle2' component={'h6'}>Home</Typography>
            </Typography>
            <Divider light sx={{}} /> */}
            <Box component={'div'}>
              <Grid container spacing={1}>
                <Outlet />
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid xs={2} position='relative'>
          <SideBar />
        </Grid>
      </Grid>
      {/* Snackbar */}
      <Snackbar open={snacky.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
        <Alert onClose={handleClose} severity={snacky.color} sx={{ width: '100%' }}>
          {snacky.message}
        </Alert>
      </Snackbar>
      {/* Loader backdrop */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}