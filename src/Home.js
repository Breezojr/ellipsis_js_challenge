import React from 'react';
import placeholder from './assets/placeholder.png';
import { Link } from "react-router-dom";
import './Home.css'

function Home(props) {
    return (
        <div className="main-body">
            <div className="column-container">
                <div className='column-body'>
                    <div className='Placeholder'>
                        <img src={placeholder} className="image" alt="placeholder" />
                        <h1 onClick={() => props.newFunc("series")}> <Link to="/series" className="link">SERIES</Link></h1>
                    </div>
                    <h2>Popular Series</h2>
                </div>
                <div className='column-body'>
                    <div className='Placeholder'>
                        <img src={placeholder} className="image" alt="placeholder" />
                        <h1 onClick={() => props.newFunc("movie")}><Link to="/movies" className="link">MOVIES</Link></h1>
                    </div>
                    <h2>Popular Movies</h2>
                </div>
            </div>

        </div>
    )
}

export default Home;