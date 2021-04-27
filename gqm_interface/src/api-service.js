import {useEffect} from "react";

const API_BASE = 'http://127.0.0.1:8000'

export class API {

    static loginUser(body) {
        return fetch('http://127.0.0.1:8000/api/auth/', {
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
        return fetch(`http://127.0.0.1:8000/api/user/goals/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then( resp => resp.json())
    }

    static deleteGoal (goal_id, token) {
        return fetch(`http://127.0.0.1:8000/api/goals/${goal_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
    }

    static createGoal (body, token) {
        return fetch(`http://127.0.0.1:8000/api/goals/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static getQuestions (goal_id, token) {
        return fetch(`http://127.0.0.1:8000/api/goals/questions/${goal_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then( resp => resp.json())
    }

    static deleteQuestion (question_id, token) {
        return fetch(`http://127.0.0.1:8000/api/questions/${question_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
    }

    static createQuestion (body, token) {
        return fetch(`http://127.0.0.1:8000/api/questions/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
    }

    static getGoalById (goal_id, token) {
        return fetch(`http://127.0.0.1:8000/api/goals/${goal_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        }).then( resp => resp.json())
    }

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