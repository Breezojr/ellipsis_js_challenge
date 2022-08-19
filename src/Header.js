import './Header.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Header(props) {
    return (
        <div className='header'>
            <div className='main-header'>
                <div className="header-container">
                    <h1 onClick={() => props.changeTitle1()}><Link to="/" className="link">DEMO Streaming</Link></h1>
                    <div className="container-right">
                        <a href='' className="Login">Log in</a>
                        <a href="" className="Trial">Start your free trial</a>
                    </div>
                </div>
            </div>
            <div className='SubHeader'>
                <h1> {props.title}</h1>
            </div>
        </div>
    )
}

export default Header 