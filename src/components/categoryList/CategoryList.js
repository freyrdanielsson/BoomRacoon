import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List, ListItem, ListItemText, Collapse } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import './CategoryList.scss';

export function CategoryList(props) {

    // The paper tag and everything between should be a list of those objects that's generated when fetching people to match with

    const sports = require('../../assets/images/sports.jpg');
    const animals = require('../../assets/images/animals.jpg');
    const entertainment = require('../../assets/images/entertainment.jpg');
    const [collapse, setCollapse] = useState([false, false, false]);

    function changeCollapse(index) {
        let temp = [...collapse];
        temp[index] = !temp[index];
        setCollapse(temp);
    }

    return (
        <div className='categories'>

            <div className="head-category" style={{backgroundImage: "url(" + sports + ")"}} onClick={() => changeCollapse(0)}>
                <div className="tint">
                    <h1 className="category-title">Sports</h1>
                </div>
            </div>
            <Collapse in={collapse[0]}>
                <List>
                    <ListItem button><ListItemText primary="Tennis" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Football" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Fighting" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Badminton" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Volleyball" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Workout" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Running" className="sub-category"/></ListItem>
                </List>
            </Collapse>

            <div className="head-category" style={{backgroundImage: "url(" + animals + ")"}} onClick={() => changeCollapse(1)}>
                <div className="tint">
                    <h1 className="category-title">Animals</h1>
                </div>
            </div>
            <Collapse in={collapse[1]}>
                <List>
                    <ListItem button><ListItemText primary="Dogs" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Cats" className="sub-category"/></ListItem>
                </List>
            </Collapse>

            <div className="head-category" style={{backgroundImage: "url(" + entertainment + ")"}} onClick={() => changeCollapse(2)}>
                <div className="tint">
                    <h1 className="category-title">Movies</h1>
                </div>
            </div>
            <Collapse in={collapse[2]}>
                <List>
                    <ListItem button><ListItemText primary="Singing" className="sub-category"/></ListItem>
                    <ListItem button><ListItemText primary="Movies" className="sub-category"/></ListItem>
                </List>
            </Collapse>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(CategoryList));