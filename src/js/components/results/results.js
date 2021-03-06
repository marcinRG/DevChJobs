import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import scss from './results.module.scss';
import {JobShort} from '../jobShort/jobShort';
import {PaginationControl} from '../paginationControl/paginationControl';
import {DataContext} from '../../data/DataProvider';
import {applicationStates} from '../../data/appStates';
import img from './../../../img/loading.gif';

export function Results() {

    const dataContext = useContext(DataContext);
    const clickRefresh = () => {
        dataContext.sendRequest({});
    }

    return (
        <div className={scss.searchResults}>
            {dataContext.appState === applicationStates.OK &&
            <React.Fragment>
                {dataContext.getJobs().map(job =>
                    <JobShort key={job.id} {...job} />
                )}
                {dataContext.jobs.length > 0 && <PaginationControl/>}
            </React.Fragment>
            }
            {dataContext.appState === applicationStates.LOADING &&
            <React.Fragment>
                <div className={scss.wrapper}>
                    <img src={img} alt="loading"/>
                    <p>Loading ....</p>
                </div>
            </React.Fragment>
            }
            {dataContext.appState === applicationStates.ERROR &&
            <React.Fragment>
                <div className={scss.wrapper}>
                    <p><span className={scss.icon}>error</span>Error ....</p>
                    <button className={scss.link} onClick={clickRefresh()}><span
                        className={scss.icon}>refresh</span><span
                        className={scss.txt}>refresh</span></button>
                </div>
            </React.Fragment>
            }
        </div>
    )
}
