import {useEffect} from "react";

const API_BASE = 'http://127.0.0.1:8000'

export class API {

    static getQuestionById (question_id, token) {
        return fetch(`http://127.0.0.1:8000/api/questions/${question_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then( resp => resp.json())
    }

    static getMetrics (question_id, token) {
        return fetch(`http://127.0.0.1:8000/api/goals/questions/${question_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then( resp => resp.json())
    }

}