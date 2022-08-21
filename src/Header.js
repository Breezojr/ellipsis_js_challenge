import './header.css';
import { Link } from "react-router-dom";
import React from 'react';

function Header(props) {
    return (
        <div className='header'>
            <div className='main-header'>
                <div className="header-container">
                    <h1 onClick={() => props.changeTitle1()}><Link to="/" className="link">DEMO Streaming</Link></h1>
                    <div className="container-right">
                        <a  className="Login">Log in</a>
                        <a  onClick={() => props.oops()} className="Trial"><Link to="/oops" className="link">Start your free trial</Link></a>
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