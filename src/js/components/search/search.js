import React, {useContext, useState} from 'react';
import scss from './search.module.scss';
import {SearchOption} from './searchOption';
import {DataContext} from '../../data/DataProvider';

export function Search() {

    const dataContext = useContext(DataContext);
    const [fullTime, setFullTime] = useState(false);
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const resetState = () => {
        setFullTime(false);
        setLocation('');
        setDescription('');
    }

    const changeLocation = (event) => {
        setLocation(event.target.value);
    }

    const changeDescription = (event) => {
        setDescription(event.target.value);
    }

    const changeFullTime = () => {
        setFullTime(!fullTime);
    };

    const searchAction = () => {
        const reqPrams = {
            full_time: fullTime.toString(),
            location: location,
            description: description,
        };
        resetState();
        dataContext.sendRequest({...reqPrams});
    }

    return (
        <div className={scss.searchPanel}>
            <SearchOption title={'Full Time'} value={fullTime} action={changeFullTime}/>
            <h3 className={scss.subtitle}>Location</h3>
            <div className={scss.searchInput}>
                <span className={scss.icon}>public</span>
                <input className={scss.input} type="text" placeholder="City, state, zip code or country"
                       value={location} onChange={changeLocation}/>
            </div>
            <h3 className={scss.subtitle}>Description</h3>
            <div className={scss.searchInput}>
                <span className={scss.icon}>work_outline</span>
                <input className={scss.input} type="text" placeholder="Title, companies, expertise or benefits"
                       value={description} onChange={changeDescription}/>
            </div>
            <div>
                <button className={scss.button} onClick={searchAction}>Search</button>
            </div>
            {/*<div className={scss.optionsWrapper}>*/}
            {/*    <SearchOption value={'London'}/>*/}
            {/*    <SearchOption value={'Paris'}/>*/}
            {/*    <SearchOption value={'New York'}/>*/}
            {/*    <SearchOption value={'Berlin'}/>*/}
            {/*</div>*/}
        </div>
    )
}
