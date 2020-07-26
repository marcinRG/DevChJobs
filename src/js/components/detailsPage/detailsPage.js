import React, {useEffect, useContext, useState} from 'react';
import {Apply} from '../apply/apply';
import {Details} from '../details/details';
import {DataContext} from '../../data/DataProvider';
import PropTypes from 'prop-types';

export function DetailsPage(props) {

    const dataContext = useContext(DataContext);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        dataContext.changeShowForm(false);
        const id = props.match.params.offerId;
        const items = dataContext.jobs.filter((job) => {
            return job.id === id;
        });
        if (items.length === 1) {
            setSelectedItem(items[0]);
        }

    }, [dataContext.jobs]);

    return (
        <React.Fragment>
            {selectedItem &&
            <React.Fragment>
                <Apply item={selectedItem}></Apply>
                <Details item={selectedItem}></Details>
            </React.Fragment>
            }
        </React.Fragment>
    );
}

DetailsPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            offerId: PropTypes.string
        })
    })
}
