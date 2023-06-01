import React from 'react'

import css from "./MainContainer.module.css"

export const MainContainer = ({ children }) => {
    return <main className={css.mainContainer}>{children}</main>;
};

