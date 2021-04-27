import React, {useState, useEffect} from 'react';
import {API} from '../../api-service';
import './Metrics.css'
import { useCookies} from "react-cookie";

function Metrics(props){

    const [token, setToken, deleteToken] = useCookies(['mr-token']);
    const [metrics, setMetrics] = useState([])
    const [question, setQuestion] = useState([])
    const question_id = localStorage.getItem('question_id')

    useEffect(() => {
        // getMetrics(question_id)
        getQuestionById()
    }, [])

    // const getMetrics = (question_id) => {
    //     return API.getMetrics(question_id, token['mr-token'])
    //         .then( resp => setMetrics(resp))
    // }

    const logoutUser = () => {
        deleteToken('mr-token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('goal_id');
        localStorage.removeItem('question_id');
    }

    const goToQuestions = () => {
        localStorage.removeItem('question_id');
        window.location.href = '/questions';
    }

    const getQuestionById = () => {
        return API.getQuestionById(question_id, token['mr-token'])
            .then( resp => setQuestion(resp))
    }

    return (
        <div className="MetricsPage">
            <div className="HeaderContainer">
                <a className="Navigation BackToQuestions" onClick={goToQuestions}>Back to questions</a>
                <h1 className="QuestionHeader">Question: {question.content}</h1>
                <a className="Navigation MetricsLogOut" href="/" onClick={logoutUser}>Log out</a>
            </div>
            <div className="MainPartContainer">
                <div className="MetricsContainer">
                    <ol className="MetricsList">
                        {/*{metrics.map(met => {*/}
                        {/*    return (*/}
                        {/*        <div className="MetricsButtonContainer">*/}
                        {/*            <li className="MetricsItem">*/}
                        {/*                <p>{met.name}</p>*/}
                        {/*                <p>{met.description}</p>*/}
                        {/*                <button className="DeleteButton Buttons" onClick={() => deleteClicked(question)}>Delete</button>*/}
                        {/*            </li>*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </ol>
                    {/*{isAddQuestion ?*/}
                    {/*    <div className="NewQuestionContainer">*/}
                    {/*        <textarea className="TextNewQuestion" type="text" placeholder="Enter your question"*/}
                    {/*            value={content} onChange={evt => setContent(evt.target.value)}/>*/}
                    {/*        <button className="SaveButton Buttons" onClick={saveNewQuestion}>Save</button>*/}
                    {/*    </div>*/}
                    {/*        : null*/}
                    {/*}*/}
                    {/*{isAddQuestion ?*/}
                    {/*    <button className="UndoButton Buttons" onClick={() => setIsAddQuestion(false)}>&#10005;</button>*/}
                    {/*     :*/}
                    {/*    <button className="AddButton Buttons" onClick={() => setIsAddQuestion(true)}>+</button>*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    )

}

export default Metrics;