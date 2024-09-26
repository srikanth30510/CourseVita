import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'; 
const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); 
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  sx={{ backgroundColor: '#640D6B' ,fontFamily:"serif"}}>
        <Toolbar >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,fontFamily:"serif"}}>
            Resume Wizard
          </Typography>
          {!isAuthenticated && (
            <>
              <NavLink to="/signup" style={{ color: "white", marginRight: "3em", textDecoration: "none", fontSize: "20px" }} >Signup</NavLink>
              <NavLink to="/login" style={{ color: "white", marginRight: "2em", textDecoration: "none", fontSize: "20px" }}>Login</NavLink>
            </>
          )}
          {isAuthenticated && (
             <NavLink to="/logout" style={{ color: "white", marginRight: "2em", textDecoration: "none", fontSize: "20px" }}>Logout</NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
