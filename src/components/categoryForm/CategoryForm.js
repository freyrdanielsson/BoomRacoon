import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Typography, Container, Slider } from '@material-ui/core';
import './CategoryForm.scss';

export function CategoryForm(props) {

    // Add or update category view

    return (
        <div className='update-category'>
            <Container component="main" maxWidth="md">
                <div className="paper-paper">
                    <Typography component="h1" variant="h4" className="category-choice">
                        Football
                    </Typography>
                    <form className="category-form" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            multiline
                            id="description"
                            label="Description"
                            name="description"
                            type="text"
                        />
                        <Typography component="h1" variant="h6" className="">
                            Skill level (if applicable)
                        </Typography>
                         <Slider
                            className="skill-slider"
                            defaultValue={1}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="on"
                            step={1}
                            marks
                            min={1}
                            max={10}
                        />
                        <div className="category-submit-container">
                            <Button fullWidth variant="contained" className="cancel-category-update">Cancel</Button>
                            <div className="gap"></div>
                            <Button fullWidth variant="contained" className="confirm-category">Add/Update</Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default withRouter(connect(mapStateToProps)(CategoryForm));