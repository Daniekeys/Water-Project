import React,{useState,useContext} from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './styles.css' 
import { useHistory } from 'react-router';
// 

const GoogleAuth = () => {
    const history = useHistory();
   
    const [googleData, setGoogleData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);
    const clientId = "294593151688-schigqgmq0rujmp6arf4tl0mdn3p3d3k.apps.googleusercontent.com";
    const onLoginSuccess = (response) => { 
        console.log("Login success");
        console.log(response.profileObj);
        setGoogleData(response.profileObj);
        setShowLoginButton(false);
        const {name, email, imageUrl} = response.profileObj;
        localStorage.setItem('user', JSON.stringify({name, email, imageUrl})); 
        history.push('/dashboard'); 
        showLogoutButton(true);

    }
    const onFailureSuccess = (response) => { 
        console.log("Login failure");
        console.log(response); 
        setShowLoginButton(true);
            setShowLogoutButton (false);

    }
    const onSignOutSuccess = (response) => { 
        alert("You have Signout Successfully");  
            setShowLoginButton(true);
            setShowLogoutButton(false);
    }
    return (
        <div>
            {showLoginButton ? 
              <GoogleLogin
    clientId={clientId}
    buttonText="Login with Google"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
  /> : null}
            {showLogoutButton ?
<GoogleLogout
      clientId={clientId} 
      buttonText="Logout"
      onLogoutSuccess={onSignOutSuccess}
    >
    </GoogleLogout>
            : null}
        </div>
    )
}

export default GoogleAuth
