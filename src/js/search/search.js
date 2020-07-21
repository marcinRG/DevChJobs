import React from 'react';
import scss from './search.module.scss';
import {SearchOption} from './searchOption';

export function Search() {
    return (
        <div className={scss.searchPanel}>
            <SearchOption value={'Full Time'} />
            <h3 className={scss.subtitle}>Location</h3>
            <div className={scss.searchInput}>
                <span className={scss.icon}>public</span>
                <input className={scss.input} type="text" placeholder="City, state, zip code or country"/>
            </div>
            <div className={scss.optionsWrapper}>
                <SearchOption value={'London'} />
                <SearchOption value={'Paris'} />
                <SearchOption value={'New York'} />
                <SearchOption value={'Berlin'} />
            </div>
        </div>
    )
}
