import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { TweetsPage } from './pages/TweetsPage/TweetsPage';
import './App.css';
import { Container } from './components/Container/Container';

function App() {
    return (
        <Container>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="tweets" element={<TweetsPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            <ToastContainer position="top-center" />
        </Container>
    );
}

export default App;
