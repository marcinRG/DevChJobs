import React from 'react';
import {Search} from '../search/search';
import {Results} from '../results/results';

export function  MainPage() {
   return (
       <React.Fragment>
           <Search></Search>
           <Results></Results>
       </React.Fragment>
   )
}
