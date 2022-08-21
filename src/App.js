import React, { useState} from 'react';
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
    const [count, setCount] = useState(0)

    const changeTitle = (data) => {
        data === "series"? setTitle("Popular Series") : setTitle("Popular Movies")
    }

    const changeTitle1 = () => {
        setTitle("Popular Title") 
    }

    const oops = () => {
        setTitle("Popular Title") 
        const timer = setTimeout(() => {
            setCount(1);
        }, 2000);
        return () => clearTimeout(timer);
    }

    return (
        <div className='Home'>
            <Router>
                <Header title={title} oops={oops}  changeTitle1={changeTitle1} />
                <Routes>
                    <Route exact path='/' element={< Home newFunc={changeTitle} />}></Route>
                    <Route exact path='/movies' element={< Movies title={title} />}></Route>
                    <Route exact path='/series' element={< Movies title={title} />}></Route>
                    <Route exact path='/oops' element={<Oops count={count} />}></Route>
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}


function Oops(props){
    return (
        props.count === 1?
        <div className='oops'><p>Ooops Something went wrong...</p></div>
:
        <div className='oops'><p>Loading...</p></div>
    )
}


