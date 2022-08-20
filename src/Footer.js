import './footer.css';
import React from 'react';
import facebookWhite from './assets/social/facebookWhite.svg'
import instagramWhite from './assets/social/instagramWhite.svg'
import twitterWhite from './assets/social/twitterWhite.svg'
import appStore from './assets/store/appStore.svg'
import playStore from './assets/store/playStore.svg'
import windowsStore from './assets/store/windowsStore.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-main'>
                <div className='navs'>
                    <ul>
                        <li>Home <span> |</span></li>
                        <li>Terms and Conditions <span> |</span></li>
                        <li>Privacy Policy <span> |</span></li>
                        <li>Collection Statement <span> |</span></li>
                        <li>Help <span> |</span></li>
                        <li>Manage Account</li>
                    </ul>
                </div>
                <div className="copyright">
                    <h1> Copyright @ 2022 DEMO Streaming All Right Reserved</h1>
                </div>
                <div className='icons'>
                    <div className='icons-left'>
                        <div className='image-container'>
                            <img src={facebookWhite} className="image" alt="placeholder" />
                        </div>
                        <div className='image-container'>
                            <img src={twitterWhite} className="image big" alt="placeholder" />
                        </div>
                        <div className='image-container'>
                            <img src={instagramWhite} className="image big" alt="placeholder" />
                        </div>
                    </div>
                    <div className='icons-right'>
                        <div className='image-container'>
                            <img src={appStore} className="image" alt="placeholder" />
                        </div>
                        <div className='image-container'>
                            <img src={playStore} className="image" alt="placeholder" />
                        </div>
                        <div className='image-container'>
                            <img src={windowsStore} className="image small" alt="placeholder" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer 