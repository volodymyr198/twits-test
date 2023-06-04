import { PropTypes } from 'prop-types';
import React from 'react';

import logo from '../../image/logo.png';
import pictures from '../../image/picture.png';
import css from './Card.module.css';

export const Card = ({ item, followStatus, toggle }) => {
    const { avatar, tweets, followers, id } = item;

    return (
        <li className={css.userCard}>
            <div className={css.imgWrapper}>
                <img className={css.logo} src={logo} alt="logo" />
                <img className={css.picture} src={pictures} alt="pictures" />
                <div className={css.avatarWrapper}>
                    <img className={css.userAvatar} src={avatar} alt="аватар пользователя" />
                </div>
            </div>
            <div className={css.userInfo}>
                <p className={css.userText}>{tweets} tweets</p>
                <p className={css.userText}>{followers.toLocaleString('en-US')} followers</p>
                <button
                    type="button"
                    className={`${css.btn} ${followStatus ? css.followingBtn : ''}`}
                    onClick={() => toggle(id, followers)}
                >
                    {followStatus ? 'Following' : 'Follow'}
                </button>
            </div>
        </li>
    );
};

Card.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        tweets: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    followStatus: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};
