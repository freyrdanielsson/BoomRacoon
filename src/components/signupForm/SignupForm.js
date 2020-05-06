import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Link, Typography, Container } from '@material-ui/core';
import './SignupForm.scss';

export function SignupForm(props) {

    return (
        <div className='signup'>
            <Container component="main" maxWidth="md">
                <div className="paper-paper">
                    <div className="signup-image">
                        <img src={require('../../assets/images/racoon.png')} />
                    </div>
                    <Typography component="h1" variant="h5" className="signup-title">
                        SIGN UP
                    </Typography>
                    <form className="signup-form" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            className="signup-button-standard"
                        >
                            Sign up!
                        </Button>
                        <Link href="#" className="login-link">
                            Already have an account? Log in here!
                        </Link>
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

export default withRouter(connect(mapStateToProps)(SignupForm));