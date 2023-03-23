import { useState, useContext } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ThemeContext from "../Context/ThemeContext";
import Footer from "./Footer";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../src/App.css'

function SignIn(props) {

    const data = useContext(ThemeContext); 
    //Routes
    const navigate = useNavigate();
    const pokedexPage = () => {
        navigate("/pokedex");
    }

    // Add states
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [rememberMe, setRemeberMe]=useState(false);
    const [emailErrors, setEmailErrors]=useState();
    const [passwordErrrors, setPasswordErrors]=useState();

    // Add handlers
    const handleEmailInputChange = function (e){
        setEmail(e.target.value);
    }
    const handlePasswordInputChange = function (e){
        setPassword(e.target.value);
    }
    const handleRememberMeInputChange = function (e){
        setRemeberMe(!rememberMe);
    }
    // Add validation
    const handleSubmit = function(e){
        let emailError = "";
        let passwordError = "";

        if(!email){
            emailError="Email cant be empty";
        }

        if(!password){

        }else if(password.length<8){
            console.log(password.length)
            passwordError = "Password should be at least 8 characters";
        }

        if(emailError || passwordError){
            setEmailErrors(emailError);
            setPasswordErrors(passwordError);
            alert(JSON.stringify({emailError: emailError, passwordError: passwordError}));
            e.preventDefault();
        }else{
            // alert(JSON.stringify({email: email, password: password, rememberMe: rememberMe}));
            pokedexPage();
        }

        

    }
    // For Email:  not empty
    // For Password: not empty and greather than 8
    return (
        <div className={data.theme}>
            <Header/>
            <title>{"Sign In"}</title>
            <Box
                component="form"
                autoComplete="off"
                >
            
            <form onSubmit={handleSubmit}>

                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={handleEmailInputChange} margin="dense" autoComplete="off"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" onChange={handlePasswordInputChange} margin="dense" autoComplete="off"/>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Button variant="contained" onClick={handleSubmit}>Log In</Button>
                {/* <label>Email: </label>
                <input type={"email"}
                       value={email}
                       onChange={handleEmailInputChange} 
                />
                <br></br>
                <label>Password: </label>
                <input type={"password"}
                       value={password}
                       onChange={handlePasswordInputChange} 
                />
                <br></br>
                <label>
                    <input type="checkbox"
                       checked={rememberMe}
                       onChange={handleRememberMeInputChange} 
                    />
                    Remember me
                </label>
                <br></br>
                <input type="submit" value="Submit" /> */}
            </form>
            </Box>
            <Footer/>
        </div>
    )
}

export default SignIn;