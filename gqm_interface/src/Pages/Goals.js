import React, {useState, useEffect} from 'react';
import {API} from '../api-service';
import './Goals.css'
import { useCookies} from "react-cookie";

function Goals(props){

    const [token, setToken, deleteToken] = useCookies(['mr-token']);
    const [goals, setGoals] = useState([])
    const [content, setContent] = useState('')
    const [isAddGoal, setIsAddGoal] = useState(false)
    const [user_id, setUserId] = useState(1)

    useEffect(() => {
        getGoals()
    }, [])

    const logoutUser = () => {
        deleteToken('mr-token');
        localStorage.removeItem('user_id');
    }

    const getGoals = () => {
        return API.getGoal(token['mr-token'])
            .then( resp => {
                setGoals(resp)
                let id = localStorage.getItem('user_id')
                id = Number(id)
                setUserId(id)
            })
    }

    const deleteClicked = goal => {
        API.deleteGoal(goal.id, token['mr-token'])
            .then( () => {
                const newGoals = goals.filter( go => go.id !== goal.id);
                setGoals(newGoals);
            })
    }

    const newGoal = goal => {
        setIsAddGoal( false)
        const newGoals = [...goals, goal];
        setGoals(newGoals);
    }

    const saveNewGoal = () => {
        API.createGoal({content, user_id}, token['mr-token'])
            .then( resp => newGoal(resp))
    }
    
    const goalClicked = (goal_id) => {
        localStorage.setItem('goal_id', goal_id)
        window.location.href = '/questions';
    }

    return (
        <div className="GoalsPage">
            <a className="LogOut" href="/" onClick={logoutUser}>Log out</a>
            <div className="GoalsContainer">
                <ol className="GoalsList">
                    {goals.map(goal => {
                        return (
                            <div className="GoalButtonContainer">
                                <li className="GoalsItem">
                                    <a className="LinkToQuestions" onClick={() => goalClicked(goal.id)}>
                                        {goal.content}
                                    </a>
                                    <button className="DeleteButton Button" onClick={() => deleteClicked(goal)}>Delete</button>
                                </li>
                            </div>
                        )
                    })}
                </ol>
                {isAddGoal ?
                    <div className="NewGoalContainer">
                        <textarea className="TextNewGoal" type="text" placeholder="Enter your goal"
                            value={content} onChange={evt => setContent(evt.target.value)}/>
                        <button className="SaveButton Button" onClick={saveNewGoal}>Save</button>
                    </div>
                        : null
                }
                {isAddGoal ?
                    <button className="UndoButton Button" onClick={() => setIsAddGoal(false)}>&#10005;</button>
                     :
                    <button className="AddButton Button" onClick={() => setIsAddGoal(true)}>+</button>
                }
            </div>
        </div>
    )
}

export default Goals;