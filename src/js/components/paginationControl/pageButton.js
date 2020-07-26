import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import scss from './paginationControl.module.scss';
import {DataContext} from '../../data/DataProvider';

export function PageButton(props) {

    const dataContext = useContext(DataContext);

    const onClick = () => {
        dataContext.changePage(props.value);
    }

    return (
        <button className={getButtonClass(props.value, dataContext.pagination.currentPage)} onClick={onClick}>
            {props.value}
        </button>
    );
}

PageButton.propTypes = {
    value: PropTypes.number.isRequired,
}

function getButtonClass(selected, value) {
    if (selected === value) {
        return `${scss.pageButton} ${scss.selected}`;
    }
    return scss.pageButton;
}
