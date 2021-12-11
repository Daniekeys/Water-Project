import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Paper, Avatar, Button, } from '@material-ui/core';




const Dashboard = () => {

    const userInfo = localStorage.getItem('user');
    const user = JSON.parse(userInfo);
    const {email, name,imageUrl} = user;

    return (
        <Grid>
            <Typography variant="h4" align="center">
                Welcome {name}
            </Typography>
            <Typography variant="h6" align="center">
                {email}
            </Typography>
            <Avatar alt="Remy Sharp" src={imageUrl} style={{ width: '200px', height: '200px', margin: 'auto', marginTop: '20px' }} />
        </Grid>
    )
}

export default Dashboard
