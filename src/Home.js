import React from "react";
import placeholder from './assets/placeholder.png';
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (
            <div className="main-body">
                <div className='Series'>
                    <div className='Placeholder'>
                        <img src={placeholder} className="image-placeholder" alt="placeholder" />
                        <h1> <Link to="/series" className="link">SERIES</Link></h1>
                        
                    </div>
                    <h2>Popular Series</h2>
                </div>
                <div className='Movies'>
                    <div className='Placeholder'>
                        <img src={placeholder} className="image-placeholder" alt="placeholder" />
                        <h1><Link to="/movies" className="link">MOVIES</Link></h1>
                    </div>                        
                    <h2>Popular Movies</h2>
                </div>

            </div>
            
    )
}

export default Home;