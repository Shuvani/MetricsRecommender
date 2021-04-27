import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";

import './index.css';
import Goals from './Pages/Goals';
import Questions from './Pages/Questions';
import Metrics from './Pages/Metrics';
import Auth from './Pages/Auth/Auth'


function Router(){

    return(
        <React.StrictMode>
            <CookiesProvider>
                <BrowserRouter>
                    <Route exact path="/" component={Auth} />
                    <Route exact path="/goals" component={Goals} />
                    <Route exact path="/questions" component={Questions} />
                    <Route exact path="/metrics" component={Metrics} />
                </BrowserRouter>
            </CookiesProvider>
          </React.StrictMode>
    )
}


ReactDOM.render(<Router />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
