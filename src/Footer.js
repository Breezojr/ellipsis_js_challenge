import React from 'react';
import './Footer.css'
import facebookWhite from './assets/social/facebookWhite.svg'
import instagramWhite from './assets/social/instagramWhite.svg'
import twitterWhite from './assets/social/twitterWhite.svg'
import appStore from './assets/store/appStore.svg'
import playStore from './assets/store/playStore.svg'
import windowsStore from './assets/store/windowsStore.svg'

function Footer() {
    return (
        <div className='Footer'>
            <div className='footer-container'>
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
                    <div className='icons-container'>
                        <div className='icons-left'>
                            <div className='image-container'>
                                <img src={facebookWhite} className="image" alt="placeholder" />
                            </div>
                            <div className='image-container big'>
                                <img src={twitterWhite} className="image" alt="placeholder" />
                            </div>
                            <div className='image-container big'>
                                <img src={instagramWhite} className="image" alt="placeholder" />
                            </div>
                        </div>
                        <div className='icons-right'>
                            <div className='icons-right-colum-container'>
                                <div className='image-container'>
                                    <img src={windowsStore} className="image" alt="placeholder" />
                                </div>
                                <div className='image-container'>
                                    <img src={playStore} className="image" alt="placeholder" />
                                </div>
                                <div className='image-container'>
                                    <img src={appStore} className="image" alt="placeholder" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;