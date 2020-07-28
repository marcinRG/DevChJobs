import React from 'react';
import ReactDOM from 'react-dom';
import scss from './app.module.scss';
import {AppHeader} from './js/components/header/header';
import {MainPage} from './js/components/mainPage/mainPage';
import {DetailsPage} from './js/components/detailsPage/detailsPage';
import {HashRouter as Router, Route} from 'react-router-dom';
import {DataProvider} from './js/data/DataProvider';

export const PageTitles = {
    HOME_PAGE: '',
    DETAILS_PAGE: 'details'
}

ReactDOM.render(
    <div className={scss.app}>
        <DataProvider>
            <Router hashType="slash">
                <AppHeader></AppHeader>
                <div className={scss.appBody}>
                    <Route exact path={'/' + PageTitles.HOME_PAGE}>
                        <MainPage></MainPage>
                    </Route>
                    <Route path={'/' + PageTitles.DETAILS_PAGE + '/:offerId'} component={DetailsPage}/>
                </div>
                <footer className={scss.footer}>
                    &copy; 2020 MarcinRG
                </footer>
            </Router>
        </DataProvider>
    </div>,
    document.getElementById('App'));
