import { PropTypes } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import css from './Filter.module.css';

export const Filter = ({ handleChangeValue, filterValue }) => {
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

Filter.propTypes = {
    handleChangeValue: PropTypes.func.isRequired,
    filterValue: PropTypes.string.isRequired,
};
