import React from 'react';
import './Footer.css'
import placeholder from './assets/placeholder.png';


function Footer() {
    return (
        <div className='Footer'>
            <div className="nav">
                <ul>
                    <li>Home <span> |</span></li>
                    <li> Terms and Conditions <span> |</span></li>
                    <li> Privacy Policy <span> |</span></li>
                    <li>Collection Statement <span> |</span></li>
                    <li>Help <span> |</span></li>
                    <li>Manage Account</li>
                </ul>
            </div>
            <div className="Copyright">
                <h1> Copyright @ 2022 DEMO Streaming All Right Reserved</h1>
            </div>
            <div className="icons">
                <img src={placeholder} className="image-placeholder" alt="placeholder" />
                <img src={placeholder} className="image-placeholder" alt="placeholder" />
                <img src={placeholder} className="image-placeholder" alt="placeholder" />
                <img src={placeholder} className="image-placeholder" alt="placeholder" />
            </div>
        </div>

    )
}

export default Footer;