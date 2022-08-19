
import './series.css'
import sample from './feed/sample'

function Series() {
    return (
        <div className="movie-body" >
            <div className='movie-body-inner'>
                {
                    sample.entries.filter(entry1 => entry1.programType === 'series').slice(0, 18).map((entry, key) => {
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
    )
}
export default Series;