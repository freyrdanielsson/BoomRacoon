import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, TextField, Link, Typography, Container } from '@material-ui/core';
import './LoginForm.scss';
import { logInUser } from '../../actions/auth';


export function LoginForm(props) {

    const [formInfo, setFormInfo] = useState(['', '']); // email, pwd

    const handleChange = (index, e)  => {
        let temp = [...formInfo];
        temp[index] = e.target.value;
        setFormInfo(temp);
    }

    const handleSubmit = () => {
        if(formInfo[0] && formInfo[1]) {
            props.logInUser(formInfo);
        }
    }

    return (
        <div className='login'>
            <Container component="main" maxWidth="md">
                <div className="paper-paper">
                    <div className="login-image">
                        <img src={require('../../assets/images/racoon.png')} />
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
                            onChange={(e) => handleChange(0, e)}
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
                            onChange={(e) => handleChange(1, e)}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            className="login-button-standard"
                            onClick={() => handleSubmit()}
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
    console.log(state);
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logInUser: (input) => dispatch(logInUser(input))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));