import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Movies from './Movies';

function App() {
    
    const data = "Popular Movies";
    return (
        <div className='Home'>
            <Router>
                <Header data={data} />
                <Routes>
                    <Route exact path='/' element={< Home />}></Route>
                    <Route exact path='/movies' element={< Movies />}></Route>
                    <Route exact path='/series' element={< Movies />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>

    )
}

export default App;