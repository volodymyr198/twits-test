import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import css from './Filter.module.css';

export const Filter = ( {filteredUsers} ) => {
    const [filterValue, setFilterValue] = useState('all');

    const handleChangeValue = e => {
        setFilterValue(e.target.value);
        // filteredUsers(filterValue);
    };
    console.log(filterValue);
    return (
        <div className={css.wrapper}>
            <Link to={'/'} className={css.link}>
                Back
            </Link>
            <label className={css.link}>
                Filter
                <select className={css.select} value={filterValue} onChange={handleChangeValue}>
                    <option value="all">all</option>
                    <option value="follow">follow</option>
                    <option value="followings">followings</option>
                </select>
            </label>
        </div>
    );
};
