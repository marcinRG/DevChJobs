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
    </React.Fragment>,
    document.getElementById('App'));
