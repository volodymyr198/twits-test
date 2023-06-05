import React from 'react';
import { Link } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer/MainContainer';
import css from "./HomePage.module.css"

const HomePage = () => {
    return (
        <MainContainer>
            <h1 className={css.title}>Test task from GoIT</h1>
            
                <Link to="/tweets" className={css.link}>
                    Go to Tweet Cards
                </Link>
            
        </MainContainer>
    );
};

export default HomePage;