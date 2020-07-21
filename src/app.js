import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import {AppHeader} from './js/header/header';
import {Search} from './js/search/search';
import {Results} from './js/results/results';

ReactDOM.render(
    <React.Fragment>
        <AppHeader></AppHeader>
        <div className="app-body">
            <Search></Search>
            <Results></Results>
        </div>
        <footer className="footer">
            &copy; 2020 Anonymous
        </footer>
    </React.Fragment>,
    document.getElementById('App'));
