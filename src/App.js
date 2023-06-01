import { Route, Routes } from 'react-router-dom';

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
            </Routes>
        </Container>
    );
}

export default App;
