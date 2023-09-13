import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TopBar from "../Components/TopBar";
import { Outlet, Link, useNavigate } from "react-router-dom";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import QrCodeOutlinedIcon from '@mui/icons-material/QrCodeOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InitialContext from "../Context/InitialContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from 'react-redux';

const drawerWidth = 240;
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Layout(props) {
  const user = useSelector(state => state.user)
  console.log('user', user)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  
  const history = useNavigate();
  const initial = React.useContext(InitialContext)

  
React.useEffect(()=>{

  const authLogin = JSON.parse(localStorage.getItem("user") || "{}")
  if (Object.keys(authLogin).length === 0 ) {
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

    initial.setSnacky((prev) => ({
      ...prev, open: false
    }))
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

 
  const icons = (link) => {
    switch (link) {
      case '/':
        return <DashboardOutlinedIcon />
      case '/viewjob':
        return <CasesOutlinedIcon />
      case '/createjob':
        return <AccountBalanceWalletOutlinedIcon />
      case '/modifyjob':
        return <WorkHistoryOutlinedIcon />
      case '/alldocument':
        return <PictureAsPdfOutlinedIcon />
      case '/documentTypes':
        return <PictureAsPdfOutlinedIcon />
      case '#':
        return <QrCodeOutlinedIcon />
      default:
        return <AccountBalanceWalletOutlinedIcon />
    }
  }

  const menus = [
    { text: "Jobs Overview", link: "/" },
    { text: "Create Job", link: "/createjob" },
    { text: "Document Types", link: "/documentTypes" },
    { text: "Modal Training", link: "/fileupload" },
    { text: "QR Scanning", link: "#" },
  ];
  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    history("/login");

  }
  const drawer = (
    <div>
      <Toolbar sx={{ flexDirection: "column", paddingTop: "10px" }}>
        <Typography component={"h1"} variant="button" sx={{ mb: "10px" }}>
          XYZ Title Company
        </Typography>
        <Box
          component="span"
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "40px",
            backgroundColor: "#FBEBB8",
            lineHeight: "80px",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <img src="/assets/img/avatar6.png" />
        </Box>
        <Typography color="primary" variant="caption" component="span">Welcome Back!</Typography>
        <Typography paragraph={true} variant="subtitle2">{user?.username}</Typography>
      </Toolbar>

      <List>
        {menus.map((menu, index) => (
          <ListItem key={menu.text} disablePadding>
            <ListItemButton
              selected={menu.link === location.pathname ? true : false}
              component={Link}
              // onClick={()=>handleRouteChange(menu)}
              to={menu.link}
              sx={{
                "&.Mui-selected": {
                  background:
                    "linear-gradient(90deg, rgba(242, 116, 5, 0.15) 28.69%, rgba(242, 116, 5, 0) 100%)",
                  //   borderRight: "8px solid #F27405",
                  color: "#F27405",
                  fontWeight: "600",
                  "& .MuiSvgIcon-root": {
                    color: "#F27405",
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    height: "100%",
                    width: "8px",
                    background: "#F27405",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  },
                },
                "&:hover": {
                  background: "#F27405",
                  color: "#FFFFFF",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {icons(menu.link)}
              </ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <TopBar
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRightColor: "primary",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {loggedIn && <Container disableGutters>
          <Toolbar />
          <Outlet />
        </Container>}
      </Box>
      {/* Snackbar */}
      <Snackbar open={initial.snacky.open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
        <Alert onClose={handleClose} severity={initial.snacky.color} sx={{ width: '100%' }}>
          {initial.snacky.message}
        </Alert>
      </Snackbar>
      {/* loading */}
      {initial.loading && <div className="d-flex justify-content-center align-items-center mt-2">
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}
          open={initial.loading}
        >
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress color="primary" disableShrink />

          </Box>
        </Backdrop>
      </div>}
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
