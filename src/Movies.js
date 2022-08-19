import React, { useEffect, useState } from 'react';
import './movie.css'
import sample from './feed/sample'

function Movies() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(1);
            console.log('This will run after 1 second!')
            console.log(count)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        count === 1 ?
            <div className="movie-body" >
                <div className='movie-body-inner'>
                    {
                        sample.entries.filter(entry1 => entry1.programType === 'movie').slice(0, 18).map((entry, key) => {
                            return (
                                <div className='movie-column' key={key}>
                                    <div className='movie-image-container'>
                                        <img src={entry.images.PosterArt.url} className="image" alt="movie Image" />
                                    </div>
                                    <div className='movie-title'>
                                        <h1>{entry.title}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            :
            <h1 className='loder'>Loading.... </h1>
    )
}
export default Movies;