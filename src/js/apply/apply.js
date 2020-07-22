import React from 'react';
import scss from './apply.module.scss';
import {Link} from 'react-router-dom';
import {PageTitles} from '../../app';

export function Apply() {
    return (
        <div className={scss.applyPanel}>
            <Link to={'/' + PageTitles.HOME_PAGE} className={scss.link}><span
                className={scss.icon + ' ' + scss.gap}>keyboard_backspace</span>Back to search</Link>
            <h3 className={scss.subtitle}>How to Apply</h3>
            <p className={scss.description}>Please email a copy of your resume and online portfolio to
                <a href="mailto:wes@kasisto.com" className={scss.link + ' ' + scss.smallGap}>wes@kasisto.com</a>
                 & CC <a href="mailto:eric@kasisto.com" className={scss.link + ' ' + scss.smallGap }>eric@kasisto.com</a>
            </p>
        </div>
    )
}
