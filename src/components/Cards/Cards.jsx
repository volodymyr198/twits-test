import React from 'react'

import logo from "../../image/logo.png"
import pictures from "../../image/picture.png"
import css from './Cards.module.css'

export const Cards = () => {
  return (
      <div className={css.card}>
          <img src={logo} alt="logo" />
          <img src={pictures} alt="pictures" />
          <div>
            <img src="" alt="user avatar" />
          </div>
      </div>
  );
}
