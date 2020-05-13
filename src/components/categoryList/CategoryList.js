import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import './CategoryList.scss';

export function CategoryList(props) {
    const { categories } = props;


    // The paper tag and everything between should be a list of those objects that's generated when fetching people to match with

    const sports = require('../../assets/images/sports.jpg');
    const animals = require('../../assets/images/animals.jpg');
    const entertainment = require('../../assets/images/entertainment.jpg');

    const assets = {
        Sports: require('../../assets/images/sports.jpg'),
        Animals: require('../../assets/images/animals.jpg'),
        Entertainment: require('../../assets/images/entertainment.jpg'),
    }


    const [collapse, setCollapse] = useState([false, false, false]);

    function changeCollapse(index) {
        let temp = [...collapse];
        temp[index] = !temp[index];
        setCollapse(temp);
    }

    return (
        <div className='categories'>

            {Object.keys(categories).map((category, i) => {
                return (
                    <div key={categories[category].name}>
                        <div className="head-category" style={{ backgroundImage: "url(" + assets[categories[category].name] + ")" }} onClick={() => changeCollapse(i)}>
                            <div className="tint">
                                <h1 className="category-title">{categories[category].name}</h1>
                            </div>
                        </div>
                        <Collapse in={collapse[i]}>
                            <List className="sub-category-items">
                                {categories[category].sub_categories.map(interest => {
                                    return (
                                        <ListItem key={interest} button className="sub-category-item"><ListItemText primary={interest} className="sub-category-text" /></ListItem>
                                    );
                                })}
                            </List>
                        </Collapse>
                    </div>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(CategoryList));