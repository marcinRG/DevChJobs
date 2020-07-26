import React from 'react';
import PropTypes from 'prop-types';
import scss from './search.module.scss';

export function SearchOption(props) {
    return(
        <div className={scss.option}>
            <span className={scss.optionIcon}>check_box_outline_blank</span>
            <span className={scss.optionDescription}>{props.value}</span>
        </div>
    )
}

SearchOption.propTypes = {
    value: PropTypes.string.isRequired,
}

