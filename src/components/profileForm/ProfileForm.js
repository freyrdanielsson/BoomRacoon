import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Typography, Container } from '@material-ui/core';
import './ProfileForm.scss';

export function ProfileForm(props) {

    return (
        <div className='edit-profile'>
            <Container component="main" maxWidth="md">
                <div className="paper-paper">
                    <Typography component="h1" variant="h5" className="edit-profile-title">
                        Change profile info
                    </Typography>
                    <form className="profile-form" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            type="text"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="age"
                            label="Age"
                            name="age"
                            type="number"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="city"
                            label="City"
                            name="city"
                            type="text"
                        />
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
                        <div className="profile-submit-container">
                            <Button fullWidth variant="contained" className="cancel-profile-update">Cancel</Button>
                            <div className="gap"></div>
                            <Button fullWidth variant="contained" className="update-profile">Update</Button>
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

export default withRouter(connect(mapStateToProps)(ProfileForm));