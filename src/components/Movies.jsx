import { Movie } from './Movie';
import cinemaico from '../img/cinema.svg';

function Movies(props) {
    const { movies } = props;

    return (
        <div className='movies'>
            {movies && movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
                <div className='not-found-block'>
                    <h4 className='not-found-text'>NOT FOUND</h4>
                    <img className='animated-logo' src={cinemaico}/>
                </div>
            )}
        </div>
    )
}

export { Movies };