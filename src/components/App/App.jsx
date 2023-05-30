import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from '../Header/Header';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));


function App() {
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path='/' element={<Header />}>
                        <Route index element={<Home />}></Route>
                        <Route path="movies" element={<Movies />}></Route>
                        <Route path="movies/:moviesId/*" element={<MovieDetails />}></Route>
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace={true} />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
