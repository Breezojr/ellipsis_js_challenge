import React from 'react';
import Header from './Header';
import Footer from './Footer';
import placeholder from './assets/placeholder.png';
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="main-body">
                <div className='Series'>
                    <div className='Placeholder'>
                        <img src={placeholder} className="image-placeholder" alt="placeholder" />
                        <h1>SERIES</h1>
                    </div>
                    <h2>Popular Series</h2>
                </div>
                <div className='Movies'>
                    <div className='Placeholder'>
                        <img src={placeholder} className="image-placeholder" alt="placeholder" />
                        <h1>MOVIES</h1>
                    </div>                        
                    <h2>Popular Movies</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;