import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavBar } from './components/NavBar/NavBar';
import { Loading } from './components/Loading/Loading';
import './App.css';
import { Container } from './components/Container/Container';

const HomePage = lazy(()=> import("./pages/HomePage/HomePage.jsx"))
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage.jsx'));

function App() {
    return (
        <Container>
            <NavBar />
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tweets" element={<TweetsPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </Suspense>
            <ToastContainer position="top-center" />
        </Container>
    );
}

export default App;
