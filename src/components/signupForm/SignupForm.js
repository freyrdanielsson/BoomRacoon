import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Link, Typography, Container } from '@material-ui/core';
import './SignupForm.scss';
import { signUpUser } from '../../actions/auth';

export function SignupForm(props) {
    const [formInfo, setFormInfo] = useState(['', null, '', '']); // name, age, email, pwd

    const handleChange = (index, e)  => {
        let temp = [...formInfo];
        temp[index] = e.target.value;
        setFormInfo(temp);
    }

    const handleSubmit = () => {
        if(formInfo[0] && formInfo[1] && formInfo[2] && formInfo[3]) {
            props.signUpUser(formInfo);
        }
    }

    return (
        <div className='signup'>
            <Container component="main" maxWidth="md">
                <div className="paper-paper">
                    <div className="signup-image">
                        <img alt="" src={require('../../assets/images/racoon.png')} />
                    </div>
                    <Typography component="h1" variant="h5" className="signup-title">
                        SIGN UP
                    </Typography>
                    <form className="signup-form" >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="nameSignup"
                            label="Name"
                            name="name"
                            type="text"
                            onChange={(e) => handleChange(0, e)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="ageSignup"
                            label="Age"
                            name="age"
                            type="number"
                            onChange={(e) => handleChange(1, e)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            onChange={(e) => handleChange(2, e)}
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
                            onChange={(e) => handleChange(3, e)}
                        />
                        <p className="auth-error-signup">{props.authError ? props.authError : null}</p>
                        <Button
                            fullWidth
                            variant="contained"
                            className="signup-button-standard"
                            onClick={() => handleSubmit()}
                        >
                            Sign up!
                        </Button>
                        <Link href="/login" className="login-link" >
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
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: (newUser) => dispatch(signUpUser(newUser))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));