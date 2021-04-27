import React from 'react';

import style from './Header.css'

function Header(props){
	return (
        <div className="HeaderContainer">
            <a className="Navigation" onClick={props.goBack}><span>Back to goals</span></a>
            <h1 className="HeaderText">{props.header}: {props.text}</h1>
            <a className="Navigation" href="/" onClick={props.logOut}><span>Log out</span></a>
        </div>
	)
}

export default Header
