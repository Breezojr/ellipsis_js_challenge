import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Movies from './Movies';


export default function App() {
    return (
        <Child />
    )
}

function Child() {
    const [title, setTitle] = useState('Popular Title')
    const changeTitle = (data) => {
        data === "series"? setTitle("Popular Series") : setTitle("Popular Movies")
    }

    const changeTitle1 = () => {
        setTitle("Popular Title") 
    }

    return (
        <div className='Home'>
            <Router>
                <Header title={title}  changeTitle1={changeTitle1} />
                <Routes>
                    <Route exact path='/' element={< Home newFunc={changeTitle} />}></Route>
                    <Route exact path='/movies' element={< Movies title={title} />}></Route>
                    <Route exact path='/series' element={< Movies title={title} />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    )

}


