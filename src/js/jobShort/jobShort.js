import React from 'react';
import scss from './jobshort.module.scss';
import {Link} from 'react-router-dom';
import {PageTitles} from '../../app';

export function JobShort() {
    return (
        <Link to={'/' + PageTitles.DETAILS_PAGE + '/' + '1'} className={scss.link}>
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
        </Link>
    )
}
