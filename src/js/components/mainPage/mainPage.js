import React, {useContext, useEffect} from 'react';
import {Search} from '../search/search';
import {Results} from '../results/results';
import {DataContext} from '../../data/DataProvider';

export function MainPage() {

    const dataContext = useContext(DataContext);

    useEffect(() => {
        dataContext.changeShowForm(true);
    },[]);

    return (
        <React.Fragment>
            <Search></Search>
            <Results></Results>
        </React.Fragment>
    )
}
