import React from 'react';
import { Link } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer/MainContainer';
import css from "../../components/NavBar/NavBar.module.css"

export const HomePage = () => {
    return (
        <MainContainer>
            <h1 className={css.title}>Test task from GoIT</h1>
            <h2>
                <Link to="/tweets" className={css.link}>
                    Go to Tweet Cards
                </Link>
            </h2>
        </MainContainer>
    );
};
