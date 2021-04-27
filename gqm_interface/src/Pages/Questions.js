import React, {useState, useEffect} from 'react';
import {API} from '../api-service';
import './Questions.css'
import { useCookies} from "react-cookie";

function Questions(props){

    const [token, setToken, deleteToken] = useCookies(['mr-token']);
    const [questions, setQuestions] = useState([])
    const [content, setContent] = useState('')
    const [isAddQuestion, setIsAddQuestion] = useState(false)
    const [goal, setGoal] = useState([])
    const goal_id = localStorage.getItem('goal_id')


    useEffect(() => {
        getQuestions(goal_id)
        getGoalById()
    }, [])

    const logoutUser = () => {
        deleteToken('mr-token');
        localStorage.removeItem('user_id');
    }

    const getQuestions = (goal_id) => {
        return API.getQuestions(goal_id, token['mr-token'])
            .then( resp => setQuestions(resp))
    }

    const deleteClicked = question => {
        API.deleteQuestion(question.id, token['mr-token'])
            .then( () => {
                const newQuestions = questions.filter( qe => qe.id !== question.id);
                setQuestions(newQuestions);
            })
    }

    const newQuestion = question => {
        setIsAddQuestion( false)
        const newQuestions = [...questions, question];
        setQuestions(newQuestions);
    }

    const saveNewQuestion = () => {
        API.createQuestion({content, goal_id}, token['mr-token'])
            .then( resp => newQuestion(resp))
    }

    const questionClicked = (question_id) => {
        localStorage.setItem('question_id', question_id)
        window.location.href = '/metrics';
    }

    const goToGoals = () => {
        localStorage.removeItem('goal_id');
        window.location.href = '/goals';
    }

    const getGoalById = () => {
        return API.getGoalById(goal_id, token['mr-token'])
            .then( resp => setGoal(resp))
    }

     return (
        <div className="QuestionsPage">
            <div className="HeaderContainer">
                <a className="Navigation BackToGoals" onClick={goToGoals}>Back to goals</a>
                <h1 className="GoalHeader">Goal: {goal.content}</h1>
                <a className="Navigation QuestionLogOut" href="/" onClick={logoutUser}>Log out</a>
            </div>
            <div className="MainPartContainer">
                <div className="QuestionsContainer">
                    <ol className="QuestionsList">
                        {questions.map(question => {
                            return (
                                <div className="QuestionButtonContainer">
                                    <li className="QuestionsItem">
                                        <a className="LinkToMetrics" onClick={() => questionClicked(question.id)}>
                                            {question.content}
                                        </a>
                                        <button className="DeleteButton Button" onClick={() => deleteClicked(question)}>Delete</button>
                                    </li>
                                </div>
                            )
                        })}
                    </ol>
                    {isAddQuestion ?
                        <div className="NewQuestionContainer">
                            <textarea className="TextNewQuestion" type="text" placeholder="Enter your question"
                                value={content} onChange={evt => setContent(evt.target.value)}/>
                            <button className="SaveButton Button" onClick={saveNewQuestion}>Save</button>
                        </div>
                            : null
                    }
                    {isAddQuestion ?
                        <button className="UndoButton Button" onClick={() => setIsAddQuestion(false)}>&#10005;</button>
                         :
                        <button className="AddButton Button" onClick={() => setIsAddQuestion(true)}>+</button>
                    }
                </div>
            </div>
        </div>
    )

}

export default Questions;
