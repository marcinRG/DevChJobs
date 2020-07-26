import React from 'react';
import PropTypes from 'prop-types';
import scss from './search.module.scss';

export function SearchOption(props) {

    const onClickAction = () => {
        props.action();
    }

    return (
        <div className={scss.option} onClick={onClickAction}>
            <span className={scss.optionIcon}>{getCheckbox(props.value)}</span>
            <span className={scss.optionDescription}>{props.title}</span>
        </div>
    )
}

SearchOption.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    action: PropTypes.func
}

function getCheckbox(value) {
    if (value) {
        return 'check_box';
    }
    return 'check_box_outline_blank';
}




