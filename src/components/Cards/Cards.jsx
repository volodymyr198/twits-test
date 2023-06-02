import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import logo from '../../image/logo.png';
import pictures from '../../image/picture.png';
import { fetchUsers } from '../../api/users';
import css from './Cards.module.css';

export const Cards = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    const limit = 3;
    useEffect(() => {
        const getUsers = async (page, limit) => {
            try {
                const data = await fetchUsers(page);

                setUsers([...users, ...data]);

            } catch (error) {
                toast(error.message);
            }
        };

        getUsers(page, limit);
    }, [page]);

    const loadMore = () => {
        setPage(page + 1);
    };
    console.log(users);
    return (
        <>
            <ul className={css.userCards}>
                {users && users.length > 0 ? (
                    users.map(item => (
                        <li className={css.userCard} key={item.id}>
                            <div className={css.imgWrapper}>
                                <img className={css.logo} src={logo} alt="logo" />
                                <img className={css.picture} src={pictures} alt="pictures" />
                                <div className={css.avatarWrapper}>
                                    <img
                                        className={css.userAvatar}
                                        src={item.avatar}
                                        alt="user avatar"
                                    />
                                </div>
                            </div>
                            <div className={css.userInfo}>
                                <p className={css.userText}>{item.tweets} tweets</p>
                                <p className={css.userText}>
                                    {item.followers.toLocaleString('en-US')} followers
                                </p>
                                <button type="button" className={css.btn}>
                                    follow
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>LOADING...</p>
                )}
            </ul>
            {users && users.length >0 &&(
                <button className={css.loadMoreBtn} type="button" onClick={loadMore}>
                    Load More
                </button>
            )}
        </>
    );
};
