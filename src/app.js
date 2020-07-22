import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import {AppHeader} from './js/header/header';
import {MainPage} from './js/mainPage/mainPage';
import {DetailsPage} from './js/detailsPage/detailsPage';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

export const PageTitles = {
    HOME_PAGE: '',
    DETAILS_PAGE: 'details'
}

ReactDOM.render(
    <Router hashType="slash">
        <AppHeader></AppHeader>
        <div className="app-body">
            <Route exact path={'/' + PageTitles.HOME_PAGE}>
                <MainPage></MainPage>
            </Route>
            <Route path={'/'+ PageTitles.DETAILS_PAGE + '/:offerId'} component={DetailsPage}/>
        </div>
        <footer className="footer">
            &copy; 2020 Anonymous
        </footer>
    </Router>,
    document.getElementById('App'));
