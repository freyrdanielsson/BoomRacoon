import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Typography, Container } from '@material-ui/core';
import './ProfileForm.scss';

export function ProfileForm(props) {
    const { handleUpdate, profile, setEditMode } = props;

    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [description, setDescription] = useState(profile.description)

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate({name, email, description});
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setName(profile.name);
        setEmail(profile.email);
        setDescription(profile.description);
        setEditMode(false);
    }

    return (
        <div className='edit-profile'>
            <Container component="main" maxWidth="md">
                <div className="paper-paper">
                    <Typography component="h1" variant="h5" className="edit-profile-title">
                        Change profile info
                    </Typography>
                    <form className="profile-form" noValidate>
                        <TextField
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            type="text"
                        />
                        <TextField
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            type="text"
                        />
                        <TextField
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                            <Button fullWidth variant="contained" className="cancel-profile-update" onClick={handleCancel}>Cancel</Button>
                            <div className="gap"></div>
                            <Button fullWidth variant="contained" className="update-profile" onClick={handleSubmit}>Update</Button>
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