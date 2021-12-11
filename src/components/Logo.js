import React from 'react'
import { makeStyles } from '@material-ui/core'
import {Typography} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    container: {
           width: 'fit-content',
              margin: 'auto', 
              backgroundColor: '#0d6efd',
                padding: '1rem',


    },
    logoText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '2rem',
        fontFamily: 'poppins !important',
        margin: 'auto',
        borderBottom: '3px solid #fff',
    },


}));

const Logo = () => {
    const classes = useStyles();
    return (
        <>
         <div className={classes.container}>
         <Typography variant="h4" className={classes.logoText} >
             UniWaters
             </Typography>
             </div>   
        </>
    )
}

export default Logo
