import React from 'react';
import scss from './jobshort.module.scss';
import {Link} from 'react-router-dom';
import {PageTitles} from '../../../app';
import PropTypes from 'prop-types';
import {dateAsString} from '../../utils/utils';

export function JobShort(props) {

    return (
        <Link to={'/' + PageTitles.DETAILS_PAGE + '/' + props.id} className={scss.link}>
            <div className={scss.jobOfferShort}>
                <div className={scss.img}>
                    {props.company_logo && <img src={props.company_logo} alt={props.company} />}
                </div>
                <div className={scss.description}>
                    <h3 className={scss.companyName}>{props.company}</h3>
                    <p className={scss.jobTitle}>{props.title}</p>
                    {props.type && <span className={scss.isFullTime}>Full time</span>}
                </div>
                <div className={scss.summary}>
                    <span className={scss.icon}>public</span>
                    <span className={scss.info}>{props.location}</span>
                    <span className={scss.icon}>schedule</span>
                    <span className={scss.info}>{dateAsString(props.created_at)}</span>
                </div>
            </div>
        </Link>
    )
}

JobShort.propTypes = {
    id: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    company_logo: PropTypes.string,
    type: PropTypes.string,
    created_at: PropTypes.string
}
