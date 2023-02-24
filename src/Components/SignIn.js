import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn(props) {
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
        <div>
            <title>{"Sign In"}</title>
            <form onSubmit={handleSubmit}>
                <label>Email: </label>
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignIn;