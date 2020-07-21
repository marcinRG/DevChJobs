import React from 'react';
import PropTypes from 'prop-types';
import scss from './paginationControl.module.scss';

export function PageButton(props) {
    const onClick = () => {
       props.action(props.value);
    }

    return (
        <button className={scss.pageButton} onClick={onClick}>
            {props.value}
        </button>
    );
}

PageButton.propTypes = {
    value: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired
}
