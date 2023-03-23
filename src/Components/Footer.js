import * as React from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Copyright Israel-2023</Button>  
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit"><Link to="https://www.facebook.com/israel.casanova">Facebook</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}