import React from 'react'
import useStyles from './styles'
import { Grid, Typography, Button } from '@material-ui/core';
import illustration from '../assets/thinking.png'
import { Link } from 'react-router-dom'

const SlideA = () => {
    const classes = useStyles();

    return (
        <>
        <Grid container className={classes.root}>
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={illustration} alt="illustration" className={classes.illustration}/>
            </div>
            <div className={classes.textContainer}>
                <div className={classes.textComponent}>
                <Typography variant="p" className={classes.title}>
                    Hey there!  thinking on how to monitor your water system?
                </Typography>
                <Typography variant="p" className={classes.subtitle}>
                     Well worry no more, we got you covered just trust us and let us do the work for you.
                </Typography>
            </div>
            <div className={classes.buttonContainer}>
                <Button component={Link} to='/login' className={classes.button}>
                    Get Started
                </Button>
             </div>   

                </div>
          </div>  

        </Grid>

        </>
    )
}

export default SlideA
