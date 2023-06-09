/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/services/api';
import { useParams } from 'react-router-dom';
import { Title, CastList, CastItem, Block, Image, Text } from './Cast.styled';
import PropTypes from 'prop-types';
// import { Loader } from 'components/Loader/Loader';

const theMovieDbAPI = new TheMovieDbAPI();

function Cast() {

    const [cast, setCast] = useState([]);
    const [error, setError] = useState('');
    
    const { moviesId } = useParams();

    useEffect(() => {
        const getCast = async () => {
            try {
                const { data } = await theMovieDbAPI.getCastInfo(moviesId);

                if (data.cast.length === 0) {
                    setError('Oooops! There is no cast info');
                } else {
                    setCast(data.cast);
                    setError(null);
                }
            } catch (error) {
                setError(error.message);
            }
        };
        getCast();
    }, [moviesId]);

    return (
        <Block>
            <Title>Cast</Title>
            <CastList>
                {cast.slice(0, 10).map(cast => (
                    <CastItem key={cast.id}>
                        {cast.profile_path ? (
                            <Image
                                src={`${TheMovieDbAPI.IMG_URL + cast.profile_path}`}
                                alt={cast.name}
                            />
                        ) : (
                            <Image src='https://via.placeholder.com/100x150' alt='image not found' />
                        )}
                        <h4>{cast.name}</h4>
                        <Text>{cast.character ? `Character:${cast.character}` : ''}</Text>
                    </CastItem>
                ))}
            </CastList>
            {error && <p>{error}</p>}
        </Block>
    );

}

Cast.propTypes = {
    moviesId: PropTypes.number,
};

export default Cast;