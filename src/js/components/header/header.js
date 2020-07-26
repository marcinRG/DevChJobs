import React, {useContext, useState} from 'react';
import scss from './header.module.scss';
import {DataContext} from '../../data/DataProvider';

export function AppHeader() {

    const dataContext = useContext(DataContext);
    const [description, setDescription] = useState('');

    const inputChange = (event) => {
        setDescription(event.target.value);
    }

    const buttonClick = (event) => {
        event.preventDefault();
        dataContext.sendRequest({description: description});
    }


    return (
        <header className={scss.appHeader}>
            <h1 className={scss.appTitle}>Github <span>Jobs</span></h1>
            <form className={setFormClassName(dataContext.showForm)}>
                <div className={scss.inputWrapper}>
                    <span className={scss.icon}>work_outline</span>
                    <input className={scss.searchInput} type="text"
                           placeholder="Title, companies, expertise or benefits"
                           onChange={inputChange} value={description}
                    />
                    <button className={scss.searchButton} onClick={buttonClick}>Search</button>
                </div>
            </form>
        </header>
    );
}

function setFormClassName(show) {
    if (show) {
        return scss.headerSearch;
    }
    return `${scss.headerSearch} ${scss.hide}`;
}
