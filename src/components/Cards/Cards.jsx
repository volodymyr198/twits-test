import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { toast } from 'react-toastify';
import * as Scroll from 'react-scroll';

import { Filter } from '../../components/Filter/Filter';
import { Card } from '../../components/Card/Card';
import {Loading} from '../../components/Loading/Loading';
import { fetchUsers, updateUser } from '../../api/users';
import css from './Cards.module.css';

export const Cards = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [noUsers, setNoUsers] = useState(false);
    const [followStatus, setFollowStatus] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(Scroll.animateScroll);
    const [filterValue, setFilterValue] = useState('all');

    useEffect(() => {
        const getUsers = async page => {
            try {
                setIsLoading(true);
                const data = await fetchUsers(page);

                if (data.length === 0) {
                    setNoUsers(true);
                    return;
                }

                setUsers(prevUsers => [...prevUsers, ...data]);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsLoading(false);
                scrollRef.current.scrollMore(300, {});
            }
        };

        getUsers(page);
    }, [page]);

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

    const saveFollowStatusToLocalStorage = useCallback(followStatus => {
        localStorage.setItem('followStatus', JSON.stringify(followStatus));
    }, []);

    const toggle = useCallback(
        async (id, followers) => {
            try {
                const newFollowStatus = { ...followStatus };
                const updatedFollowers = newFollowStatus[id] ? followers - 1 : followers + 1;
                setIsLoading(true);
                await updateUser(id, updatedFollowers);
                newFollowStatus[id] = !newFollowStatus[id];
                setFollowStatus(newFollowStatus);
                saveFollowStatusToLocalStorage(newFollowStatus);

                setUsers(prevUsers =>
                    prevUsers.map(user => {
                        if (user.id === id) {
                            return {
                                ...user,
                                followers: newFollowStatus[id]
                                    ? user.followers + 1
                                    : user.followers - 1,
                            };
                        }
                        return user;
                    })
                );
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsLoading(false);
            }
        },
        [followStatus, saveFollowStatusToLocalStorage]
    );

    const filteredUsers = useMemo(() => {
        if (filterValue === 'all') {
            return users;
        }
        if (filterValue === 'follow') {
            return users.filter(user => !followStatus[user.id]);
        }
        if (filterValue === 'followings') {
            return users.filter(user => followStatus[user.id]);
        }
        return users;
    }, [filterValue, followStatus, users]);

    const handleChangeValue = e => {
        setFilterValue(e.target.value);
    };

    return (
        <>
            <Filter handleChangeValue={handleChangeValue} filterValue={filterValue} />
            <ul className={css.userCards}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(item => (
                        <Card
                            key={item.id}
                            item={item}
                            followStatus={followStatus[item.id]}
                            toggle={toggle}
                        />
                    ))
                ) : (
                    <Loading />
                )}
            </ul>
            {users.length > 0 && isLoading ? (
                <Loading />
            ) : (
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
