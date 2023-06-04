import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as Scroll from 'react-scroll';

import logo from '../../image/logo.png';
import pictures from '../../image/picture.png';
import { fetchUsers, updateUser } from '../../api/users';
import css from './Cards.module.css';

export const Cards = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [noUsers, setNoUsers] = useState(false);
    const [followStatus, setFollowStatus] = useState({});
    const scroll = Scroll.animateScroll;

    useEffect(() => {
        const getUsers = async page => {
            try {
                const data = await fetchUsers(page);

                if (data.length === 0) {
                    setNoUsers(true);
                    return;
                }

                setUsers(prevUsers => [...prevUsers, ...data]);
            } catch (error) {
                toast.error(error.message);
            } finally {
                scroll.scrollMore(300, {});
            }
        };

        getUsers(page);
    }, [page, scroll]);

    useEffect(() => {
        const storedFollowStatus = localStorage.getItem('followStatus');
        if (storedFollowStatus) {
            setFollowStatus(JSON.parse(storedFollowStatus));
        } else {
            const initialFollowStatus = {};
            users.forEach(user => {
                initialFollowStatus[user.id] = false;
            });
            setFollowStatus(initialFollowStatus);
        }
    }, [users]);

    const saveFollowStatusToLocalStorage = followStatus => {
        localStorage.setItem('followStatus', JSON.stringify(followStatus));
    };

    const toggle = async (id, followers) => {
        try {
            const newFollowStatus = { ...followStatus };
            if (newFollowStatus[id]) {
                await updateUser(id, followers - 1);
                newFollowStatus[id] = false;
            } else {
                await updateUser(id, followers + 1);
                newFollowStatus[id] = true;
            }
            setFollowStatus(newFollowStatus);
            saveFollowStatusToLocalStorage(newFollowStatus);

            const updatedUsers = users.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        followers: newFollowStatus[id] ? user.followers + 1 : user.followers - 1,
                    };
                }
                return user;
            });
            setUsers(updatedUsers);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <ul className={css.userCards}>
                {users.length > 0 ? (
                    users.map(item => (
                        <li className={css.userCard} key={item.id}>
                            <div className={css.imgWrapper}>
                                <img className={css.logo} src={logo} alt="logo" />
                                <img className={css.picture} src={pictures} alt="pictures" />
                                <div className={css.avatarWrapper}>
                                    <img
                                        className={css.userAvatar}
                                        src={item.avatar}
                                        alt="аватар пользователя"
                                    />
                                </div>
                            </div>
                            <div className={css.userInfo}>
                                <p className={css.userText}>{item.tweets} tweets</p>
                                <p className={css.userText}>
                                    {item.followers.toLocaleString('en-US')} followers
                                </p>
                                <button
                                    type="button"
                                    className={`${css.btn} ${
                                        followStatus[item.id] ? css.followingBtn : ''
                                    }`}
                                    onClick={() => toggle(item.id, item.followers)}
                                >
                                    {followStatus[item.id] ? 'Following' : 'Follow'}
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p style={{ color: 'red', fontSize: '32px', fontWeight: 'bold' }}>LOADING...</p>
                )}
            </ul>
            {users.length > 0 && (
                <button
                    className={css.loadMoreBtn}
                    type="button"
                    disabled={noUsers}
                    onClick={() => setPage(prevPage => prevPage + 1)}
                >
                    {!noUsers ? 'Load More' : 'No More Users'}
                </button>
            )}
        </>
    );
};
