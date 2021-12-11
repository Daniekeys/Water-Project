import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import GoogleAuth from '../components/GoogleLogin';
import Logo from '../components/Logo';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f5f6ff',
        minHeight: '100vh',
        paddingTop: '1rem',
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '1rem',
        paddingTop: '2rem',
        paddingBottom: '1rem',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
        },
    },
    loginContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
    },
    sectionOne: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sectionTwo: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        // alignItems: 'center',
    },
    formItem: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem auto',
        width: '100%',
        padding: '0.5rem',
        backgroundColor: '#fff',
        borderRadius:'3px',
        marginBottom: '1rem',

    },
    label: {
        fontSize: '1rem',
        color: '#828282',
        marginBottom: '0rem',
    },
    formField: {
        width: '100%',
        height: '2rem',
        border: 'none',
        outline: 'none',
    },
    loginBtn:{
        backgroundColor: '#0d6efd !important',
        color: '#fff !important',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        padding: '10px 20px',
        // paddingTop: '30px',
        
        borderRadius: '5px',
        marginTop: '20px',
        '&:hover': {
            backgroundColor: '#0d6efa',
            color: '#fff',
        },
    },


}));




const Login = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
         <div className={classes.logoContainer}>
            <Logo />
           </div>   
           <div className={classes.loginContainer}>
               <div className={classes.sectionOne}>
            <Typography variant="h4" gutterBottom>
                Welcome back!
            </Typography>
            <Typography variant="h6" gutterBottom>
                Please sign in to continue
            </Typography>
            <GoogleAuth />

            <Typography variant="h6" gutterBottom>
                Or
            </Typography>
            <Typography variant="h6" gutterBottom>
                sign in with your email
            </Typography>
            </div>
            <div className={classes.sectionTwo}>
            <label className={classes.label}>Email</label>
             <div className={classes.formItem}>
               
                    <input type="text" placeholder="Email" className={classes.formField} />

                    </div>   
                    <label className={classes.label}>Password</label>
             <div className={classes.formItem}>
               
                    <input type="password" placeholder="Password" className={classes.formField} />
                    </div>   
            </div>
            <div className={classes.loginBtnContainer}>
                <Button variant="contained"  className={classes.loginBtn}
                component={Link} to="/dashboard">
                
                    Login
                </Button>


                </div>
            </div>



        </Grid>
    )
}

export default Login
