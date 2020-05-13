import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Collapse, Button } from '@material-ui/core';
import './CategoryList.scss';

export default function CategoryList(props) {
    const { categories, profile, updateHeader } = props;
    const [collapse, setCollapse] = useState([false, false, false]);

    useEffect(() => {
        updateHeader(true);
        return () => updateHeader(false);
    });

    // The paper tag and everything between should be a list of those objects that's generated when fetching people to match with

    const assets = {
        Sports: require('../../assets/images/sports.jpg'),
        Animals: require('../../assets/images/animals.jpg'),
        Entertainment: require('../../assets/images/entertainment.jpg'),
    }


    function changeCollapse(index) {
        let temp = [...collapse];
        temp[index] = !temp[index];
        setCollapse(temp);
    }

    function handleCategoryClick(category, index) {
        if (category === profile.category) {
            return changeCollapse(index);
        }
    }

    function changeCategory(e, category) {
        e.stopPropagation();
        setCollapse([false, false, false]);
        props.changeCategory(category);
    }

    function changeInterest(e, interest) {
        e.stopPropagation();
        const idx = profile.interests.indexOf(interest);

        if (idx < 0) {
           return props.changeInterest([...profile.interests, interest]);
        } else {
            return props.changeInterest(profile.interests.filter(item => item !== interest))
        }
    }

    return (
        <div className='categories'>

            {Object.keys(categories).map((category, i) => {
                return (
                    <div key={categories[category].name}>
                        <div className="head-category" style={{ backgroundImage: "url(" + assets[categories[category].name] + ")" }} onClick={() => handleCategoryClick(categories[category].name, i)}>
                            <div className="tint">
                                <h1 className="category-title">{categories[category].name}</h1>
                                {categories[category].name !== profile.category
                                    && <Button onClick={(e) => changeCategory(e, categories[category].name)} className="category-set">Set category</Button>
                                }
                            </div>
                        </div>
                        <Collapse in={collapse[i]}>
                            <List className="sub-category-items">
                                {categories[category].sub_categories.map(interest => {
                                    return (
                                        <ListItem key={interest} button className={`sub-category-item ${profile.interests.includes(interest) ? 'on' : ''}`}>
                                            <ListItemText primary={interest} className="sub-category-text" onClick={(e) => changeInterest(e, interest)} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Collapse>
                    </div>
                );
            })}
        </div >
    );
}
