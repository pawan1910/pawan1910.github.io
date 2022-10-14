import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"
import Api from "./chart"
import { Link } from 'react-router-dom';

const google= window.google;
function App() {
  
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
    
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    //Global Google
    google.accounts.id.initialize({
      client_id: "429149800229-dnlf6s65lg930v215m8i6nud2sf9042f.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large", }
    );

    google.accounts.id.prompt();
  }, []);

  // If we have no user: sign in button
  // if we have a user: show the log out Button
  return (
    <div className="App">
      <h2 className='heading'> Welcome to Google Login</h2>
      <div id="signInDiv"></div>

      { 
        <div className='detail'>
          {/* <img src={user.picture}></img> */}
          <h3 id='name'>{user.name}</h3>
          <p id='user'>{user.email}</p>

        </div>
      }

      {Object.keys(user).length != 0 &&
        <button className='logout-btn' onClick={(e) => handleSignOut(e)}><div className='text'>Sign out</div><Api /></button>

      
      }

    </div>
  );
}

export default App;
