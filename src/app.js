import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import {AppHeader} from './js/components/header/header';
import {MainPage} from './js/components/mainPage/mainPage';
import {DetailsPage} from './js/components/detailsPage/detailsPage';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {DataProvider} from './js/data/DataProvider';

export const PageTitles = {
    HOME_PAGE: '',
    DETAILS_PAGE: 'details'
}

ReactDOM.render(
    <DataProvider>
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
        </Router>
    </DataProvider>,
    document.getElementById('App'));
