import {useEffect} from "react";

const API_BASE = 'http://127.0.0.1:8000'

export class API {

    static loginUser(body) {
        return fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static registerUser(body) {
        return fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static getGoal (token) {
        return fetch(`http://127.0.0.1:8000/api/users/goals/1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then( resp => resp.json())
    }
}