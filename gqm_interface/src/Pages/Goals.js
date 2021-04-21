import React, {useState, useEffect} from 'react';
import {API} from '../api-service';
import './Goals.css'
import { useCookies} from "react-cookie";

function Goals(props){

    const [token, setToken, deleteToken] = useCookies(['mr-token']);

    const logoutUser = () => {
        deleteToken(['mr-token']);
    }

    const getGoals = () => {
        API.getGoal(token)
            .then( resp => console.log(resp))
    }

    return (
        <div className="GoalsPage">
            <a className="LogOut" href="/" onClick={logoutUser}>Log out</a>
            <div className="GoalsContainer" onClick={getGoals}>
                Goals
            </div>
        </div>
    )
}

export default Goals;