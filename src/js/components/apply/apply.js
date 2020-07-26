import React, {useRef, useEffect} from 'react';
import scss from './apply.module.scss';
import {Link} from 'react-router-dom';
import {PageTitles} from '../../../app';
import PropTypes from 'prop-types';

export function Apply(props) {

    const applyRef = useRef();

    useEffect(()=>{
        applyRef.current.innerHTML = props.item.how_to_apply;
    },[]);

    return (
        <div className={scss.applyPanel}>
            <Link to={'/' + PageTitles.HOME_PAGE} className={scss.link}><span
                className={scss.icon + ' ' + scss.gap}>keyboard_backspace</span>Back to search</Link>
            <h3 className={scss.subtitle}>How to Apply</h3>
            <div className={scss.description} ref={applyRef}></div>
        </div>
    )
}

Apply.propTypes = {
    item: PropTypes.object
}
