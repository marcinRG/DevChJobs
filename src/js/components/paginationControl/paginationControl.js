import React, {useContext} from 'react';
import scss from './paginationControl.module.scss'
import {PageButton} from './pageButton';
import {DataContext} from '../../data/DataProvider';
import {operations} from '../../data/operations';

export function PaginationControl() {

    const dataContext = useContext(DataContext);

    const onClickAction = (event) => {
        const operation = event.target.getAttribute('data-operation');
        dataContext.changePage(operation);
    }

    return (
        <div className={scss.pages}>
            <div className={scss.buttonWrapper}>
                <button className={`${scss.pageButton} ${scss.control}`} data-operation={operations.PREVIOUS}
                        onClick={onClickAction}>chevron_left
                </button>
                {createButtons(Math.ceil(dataContext.jobs.length / dataContext.pagination.itemsPerPage))}
                <button className={`${scss.pageButton} ${scss.control}`} data-operation={operations.NEXT}
                        onClick={onClickAction}>chevron_right
                </button>
            </div>
        </div>);
}

function createButtons(length) {
    let buttons = [];
    for (let i = 1; i <= length; i++) {
        buttons.push(<PageButton key={i} value={i}/>)
    }
    return buttons;
}

