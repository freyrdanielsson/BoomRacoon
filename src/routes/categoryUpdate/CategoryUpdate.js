import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './CategoryUpdate.scss';
import CategoryForm from '../../components/categoryForm/CategoryForm';

export function CategoryUpdate(props) {

    return (
        <Fragment>
            <CategoryForm />
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(CategoryUpdate));