import React, {useState} from 'react';
import scss from './paginationControl.module.scss'
import {PageButton} from './pageButton';

export function PaginationControl() {

    const [pages, setPages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const onClickAction = (item) => {
        console.log(item);
    }

    return (
        <div className={scss.pages}>
            <div className={scss.buttonWrapper}>
                <button className={`${scss.pageButton} ${scss.control}`}>chevron_left</button>
                {pages.map((elem, index) =>
                    <PageButton key={index} value={elem} action={onClickAction}/>
                )}
                <button className={`${scss.pageButton} ${scss.control}`}>chevron_right</button>
            </div>
        </div>);
}
