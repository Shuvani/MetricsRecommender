import React, { useState, useEffect } from 'react';
import {API} from '../api-service';
import './Auth.css'
import { useCookies } from 'react-cookie';

function Auth(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginView, setIsLoginView] = useState(true)
    const [token, setToken] = useCookies(['mr-token']);

    useEffect( () => {
        if(token['mr-token']) window.location.href = '/goals';
    }, [token])

    const loginClicked = () => {
        API.loginUser({username, password})
            .then( resp => setToken('mr-token', resp.token))
    }

    const registerClicked = () => {
        API.registerUser({username, password})
            .then( () => loginClicked())
    }

    return (
        <div className="AuthPage">
            <div className="AuthContainer">

                {isLoginView ?
                    <h1 className="AuthHeader">LogIn</h1> :
                    <h1 className="AuthHeader">Register</h1>
                }

                <div className="AuthInputContainer">
                    <input className="AuthInput" type="text" placeholder="username"
                           onChange={evt => setUsername(evt.target.value)}/>
                </div>
                <div className="AuthInputContainer">
                <input className="AuthInput" type="password" placeholder="password"
                       onChange={evt => setPassword(evt.target.value)}/>
                </div>

                {isLoginView ?
                    <button className="AuthButton" onClick={loginClicked}>LogIn</button> :
                    <button className="AuthButton" onClick={registerClicked}>Register</button>
                }

                {isLoginView ?
                    <a className="AuthText" onClick={() => setIsLoginView(false)}>
                        You don't have an account? Register here!
                    </a> :
                    <a className="AuthText" onClick={() => setIsLoginView(true)}>
                        You already have an account? Login here!
                    </a>
                }

            </div>
        </div>
    )
}

export default Auth;