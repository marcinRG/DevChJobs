import React from 'react';
import scss from './header.module.scss';

export function AppHeader() {
    return (
        <header className={scss.appHeader}>
            <h1 className={scss.appTitle}>Github <span>Jobs</span></h1>
            <form className={scss.headerSearch}>
                <div className={scss.inputWrapper}>
                    <span className={scss.icon}>work_outline</span>
                    <input className={scss.searchInput} type="text" placeholder="Title, companies, expertise or benefits"/>
                    <button className={scss.searchButton}>Search</button>
                </div>
            </form>
        </header>
    );
}
