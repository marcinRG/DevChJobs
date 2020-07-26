import React, {useContext} from 'react';
import scss from './results.module.scss';
import {JobShort} from '../jobShort/jobShort';
import {PaginationControl} from '../paginationControl/paginationControl';
import {DataContext} from '../../data/DataProvider';

export function Results() {

    const dataContext = useContext(DataContext);

    return (
        <div className={scss.searchResults}>
            {dataContext.getJobs().map(job =>
                <JobShort key={job.id} {...job} />
            )}
            <PaginationControl></PaginationControl>
        </div>
    )
}
