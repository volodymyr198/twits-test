import React from 'react';
import { Link } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer/MainContainer';
import { Cards } from '../../components/Cards/Cards';
import css from '../../components/NavBar/NavBar.module.css'

export const TweetsPage = () => {
    return (
        <MainContainer>
            <Link to={'/'} className={css.link} >
                Back
            </Link>
            <Cards/>
        </MainContainer>
    );
};
