import React from 'react';
import scss from './jobshort.module.scss';

export function JobShort() {
   return (
       <div className={scss.jobOfferShort}>
           <div className={scss.img}></div>
           <div className={scss.description}>
               <h3 className={scss.companyName}>Akme</h3>
               <p className={scss.jobTitle}>Front-End Software Engineer</p>
               <span className={scss.isFullTime}>Full time</span>
           </div>
           <div className={scss.summary}>
               <span className={scss.icon}>public</span>
               <span className={scss.info}>New York, Berlin</span>
               <span className={scss.icon}>schedule</span>
               <span className={scss.info}>5 days ago</span>
           </div>
       </div>
   )
}
