import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Link, Typography, Container } from '@material-ui/core';
import './LoginForm.scss';

export function LoginForm(props) {

    return (
        <div className='login'>
            <Container component="main" maxWidth="md">
                <div className="paper-paper">
                    <div className="login-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Rocky_Raccoon_mascot_of_MINIX_3.jpg" />
                    </div>
                    <Typography component="h1" variant="h5" className="login-title">
                        LOG IN
                    </Typography>
                    <form className="form-form" noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
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
                            className="login-button-google"
                        >
                            Log in with Google
                        </Button>
                        <Button
                            fullWidth
                            variant="contained"
                            className="login-button-standard"
                        >
                            Log In
                        </Button>
                        <Link href="#" className="sign-up-link">
                            No account? Sign up here!
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

export default withRouter(connect(mapStateToProps)(LoginForm));