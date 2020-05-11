import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Categories.scss';
import CategoryList from '../../components/categoryList/CategoryList';

export function Categories(props) {

    return (
        <Fragment>
            <CategoryList />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(Categories));