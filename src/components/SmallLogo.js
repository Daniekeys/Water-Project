import React from 'react'
import { makeStyles } from '@material-ui/core'
import {Typography} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
    container: {
           width: '60px',
           height: '60px',
           display: 'grid',
           placeItems: 'center',
              margin: 'auto',
              borderRadius: '50%',

              backgroundColor: '#0d6efd',
                // padding: '1rem',

    },
    logoText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: '1.5rem',
        fontFamily: 'poppins !important',
        margin: 'auto',
        borderBottom: '3px solid #fff',
    },


}));

const SmallLogo = () => {
    const classes = useStyles();
    return (
        <>
         <div className={classes.container}>
         <Typography variant="h4" className={classes.logoText} >
             UW
             </Typography>
             </div>   
        </>
    )
}

export default SmallLogo
