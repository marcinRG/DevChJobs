import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {operations} from './operations';
import {applicationStates} from './appStates';
import {currentPositionFromGeolocation} from '../utils/utils';

export const DataContext = React.createContext(null);
const corsBypass = 'https://api.allorigins.win/get?url=';
const githubJobsAddress = 'https://jobs.github.com/positions.json';

export function DataProvider(props) {

    const [jobs, setJobs] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const [appState, setAppState] = useState(applicationStates.LOADING);
    const [pagination, setPagination] = useState({
        itemsPerPage: 10,
        currentPage: 1
    });

    const setPageToFirst = () => {
        const newState = {...pagination, currentPage: 1};
        setPagination(newState);
    }

    const getJobs = () => {
        return sliceResultsArray(jobs, pagination);
    }

    const changeShowForm = (value) => {
        setShowForm(value);
    }

    const changePage = (value) => {
        let newValue = {...pagination};
        if (value === operations.NEXT) {
            if (pagination.currentPage < Math.ceil(jobs.length / pagination.itemsPerPage)) {
                newValue.currentPage = pagination.currentPage + 1;
            }
            if (pagination.currentPage === Math.ceil(jobs.length / pagination.itemsPerPage)) {
                //console.log('load more items');
            }
        }
        if (value === operations.PREVIOUS) {
            if (pagination.currentPage > 1) {
                newValue.currentPage = pagination.currentPage - 1;
            }
        }
        if (Number.isInteger(value)) {
            newValue.currentPage = value;
        }
        setPagination(newValue);
    }

    const sendRequest = (requestProperties) => {
        setAppState(applicationStates.LOADING);
        let url = corsBypass + encodeURIComponent(githubJobsAddress + getURLQuery(requestProperties));
        fetch(url)
            .then(response => {
                if (response.ok) {
                    response.json().then(data => {
                        const dataSet = JSON.parse(data.contents);
                        setJobs(dataSet);
                        setPageToFirst();
                        setAppState(applicationStates.OK);
                    });
                }
            }).catch(() => {
            setAppState(applicationStates.ERROR);
        })
    }

    useEffect(() => {
        currentPositionFromGeolocation().then(obj => {
            sendRequest({...obj});
        }).catch(() => {
            sendRequest({});
        });
    }, []);

    return (
        <DataContext.Provider
            value={{jobs, pagination, showForm, appState, changeShowForm, changePage, getJobs, sendRequest}}>
            {props.children}
        </DataContext.Provider>
    );
}

DataProvider.propTypes = {
    children: PropTypes.any,
};


//https://stackoverflow.com/questions/111529/how-to-create-query-parameters-in-javascript
function getURLQuery(obj) {
    const queryString = Object.entries(obj)
        .map(pair => pair.map(encodeURIComponent).join('='))
        .join('&');
    if (queryString && queryString.length > 0) {
        return '?' + queryString;
    } else {
        return '';
    }
}

function sliceResultsArray(itemsArray, settings) {
    return itemsArray.slice((settings.currentPage - 1) * settings.itemsPerPage,
        (settings.currentPage) * settings.itemsPerPage);
}
