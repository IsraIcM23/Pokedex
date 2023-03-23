// import * as React from 'react';
import '../../src/App.css';
import React, { useContext } from 'react';
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

export default function Header() {
  const activeStyle = { color: "#F15B2A" };
  const data = useContext(ThemeContext); 

  return (
    <Box sx={{ flexGrow: 1 }} className={data.theme}>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button color="inherit"><Link to="/pokedex">Pokedex</Link></Button>
          <Button color="inherit"><Link to="/favorites">Favorites</Link></Button>
          <Button color="inherit"><Link to="/login">Login</Link></Button>
          <FormControlLabel
            control={
              <Switch
                onChange={data.handleTheme}
                aria-label="Theme"
              />
            }
          label={data.handleTheme ? 'Dark' : 'Light'}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}


// import React, { useContext } from 'react';
// import ThemeContext from '../Context/ThemeContext';

// const Header = () => {

//   const activeStyle = { color: "#F15B2A" };
//   const data = useContext(ThemeContext); 

//   return (
//     <div className={data.theme}>
//       <input type="radio" name="theme" id="light" value="light" onClick={data.handleTheme}/>
//       <label htmlFor='light'>Light</label>
//       <input type="radio" name="theme" id="dark" value="dark" onClick={data.handleTheme}/>
//       <label htmlFor='dark'>Dark</label>
//     </div>
//   )
// }

// export default Header;