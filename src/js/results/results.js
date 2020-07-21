import React from 'react';
import scss from './results.module.scss';
import {JobShort} from '../jobShort/jobShort';
import {PaginationControl} from '../paginationControl/paginationControl';

export function Results() {
   return (
       <div className={scss.searchResults}>
           <JobShort></JobShort>
           <JobShort></JobShort>
           <JobShort></JobShort>
           <JobShort></JobShort>
           <JobShort></JobShort>
           <JobShort></JobShort>
           <JobShort></JobShort>
           <PaginationControl></PaginationControl>
       </div>
   )
}
