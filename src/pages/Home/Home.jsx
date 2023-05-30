import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/services/api';
import PropTypes from 'prop-types';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MovieList, MainText} from './Home.styled';

const theMovieDbAPI = new TheMovieDbAPI();

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const getMovies = async () => {
            try {
                const { data } = await theMovieDbAPI.getPopularFilms();

                setMovies(data.results);
            } catch (error) {
                setError(error.message);
            }
        };
        getMovies();
    }, []);

    return (
        <>
            <MainText>Trending today:</MainText>
            <MovieList>
                {movies !== null &&
                    movies.map(movie => <MoviesList {...movie} key={movie.id} />)
                }
            </MovieList>
            {error && <p>Error{error}</p>}
        </>
    );

}

Home.propTypes = {
    movies: PropTypes.array,
};

export default Home;



