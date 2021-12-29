import React from 'react';
import { useState, useEffect } from 'react';

// @material
import { Grid } from '@mui/material';

//styles
import styles from './form-authorization.module.scss';

const dataTransmission = (e) => {
    e.preventDefault();
    window.location = 'http://localhost:3000/board'
}

const FormAuthorization = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [passwordError, setPasswordError] = useState('Password cannot be empty')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])



    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!re.test(String(e.target.value).toLocaleLowerCase())) {
            setEmailError('Uncorrect email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 16) {
            setPasswordError('Password must be longer than 3 and less than 16')
            if (e.target.value) {
                setPasswordError('Password cannot be empty')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <Grid container item xs direction={'column'} alignItems={'center'}>
            <h1 className={styles.h1}>Form Authorization</h1>
            <form className={styles.form}>
                {emailDirty && emailError && (
                    <div className={styles.error}>{emailError}</div>
                )}
                <input
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => emailHandler(e)}
                    value={email}
                    name="email"
                    type="text"
                    placeholder="Email"
                />
                {passwordDirty && passwordError && (
                    <div className={styles.error}>{passwordError}</div>
                )}
                <input
                    onBlur={(e) => blurHandler(e)}
                    onChange={(e) => passwordHandler(e)}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button onClick={dataTransmission} disabled={!formValid} className={styles.button}>Submit</button>
            </form>
        </Grid>
    )
}
export default FormAuthorization
