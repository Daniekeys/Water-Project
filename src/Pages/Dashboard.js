import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Grid, Paper, Avatar, Button,Badge } from '@material-ui/core';
import SmallLogo from '../components/SmallLogo';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PlusIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#f5f6ff',
        minHeight: '100vh',
        paddingBottom: '2rem',
        
        
    },
    Navbar: {
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 1rem',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: '10',
        marginBottom: '1rem',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: '50px',
        height: '50px',
        marginRight: '1rem',
    },
    icon: {
        fontSize: '2rem',
        
    },
    iconContainer: {
        marginRight: '1rem',
    },
    name: {
        fontSize: '1.1rem',
        marginBottom: '1rem',

    },
    reservePaper: {
        padding: '1rem',
        height: 'auto',
        width: '90%',
        margin: '1rem auto',
        backgroundColor: '#cfe2ff',
        borderRadius: '6px',
    },
    wLevel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100px',
        borderRadius: '3px',
        backgroundColor: '#084298',
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        margin:'1rem auto',
        
    },
    subContainer: {
        padding: '1rem 0',
        height: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        flexWrap: 'wrap',
    },
    tankA: {
        padding: '1rem',
        height: 'auto',
        width: '45%',
        margin: '0 auto',
        backgroundColor: '#e0cffc',
        borderRadius: '6px',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    wLevelA: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100px',
        borderRadius: '3px',
        backgroundColor: '#290661',
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        margin:'1rem auto',
        
    },
    tankB: {
        padding: '1rem',
        height: 'auto',
        width: '45%',
        margin: '0 auto',
        backgroundColor: '#cfe2ff',
        borderRadius: '6px',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    wLevelB: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100px',
        borderRadius: '3px',
        backgroundColor: '#084298',
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        margin:'1rem auto',
        
    },
    tankC: {
        padding: '1rem',
        height: 'auto',
        width: '45%',
        margin: '0 auto',
        backgroundColor: '#f8d7da',
        borderRadius: '6px',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    wLevelC: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100px',
        width: '100px',
        borderRadius: '3px',
        backgroundColor: '#842029',
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        margin:'1rem auto',
        
    },
    tankD: {
        padding: '1rem',
        height: '245px',
        width: '45%',
        margin: '0 auto',
        backgroundColor: '#d1e7e6',
        borderRadius: '6px',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    wLevelD: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        borderRadius: '3px',
        backgroundColor: '#0f514f',
        color: '#fff',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        margin:'1rem auto',
        
    },
    button: {
        backgroundColor: '#084298',
        color: '#fff',
        fontSize: '1rem',
        fontWeight: 'bold',
        padding: '0.5rem 1rem',
        margin: '0 auto',

    },
    plus: {
        fontSize: '2rem',
    textAlign: 'center',
    margin: '0 auto',
    },




 
   


}));



const Dashboard = () => {
    const classes = useStyles();

    const userInfo = localStorage.getItem('user');
    const user = JSON.parse(userInfo);
    const {email, name,imageUrl} = user;
    const [notNum, setNotNum] = useState('0');

    return (
        <Grid className={classes.root}>
            <div className={classes.Navbar}>
                <div className={classes.logoContainer}>
                <SmallLogo />
            </div>
            <div className={classes.userInfo}>
            <Badge badgeContent={notNum} color="primary" className={classes.iconContainer}>
    <NotificationsIcon className={classes.icon} />
    </Badge>
                <Avatar alt={name} src={imageUrl} className={classes.avatar} />
                </div>
            </div>
            <div className={classes.content}>




            <Typography variant="h4" align="center" className={classes.name}>
                Welcome back  {name}
            </Typography>
          <Paper className={classes.reservePaper}>
            <Typography variant="h5" align="center" className={classes.name}>
                Main
            </Typography>
            <div className={classes.wLevel}>
                <Typography variant="h6" align="center" className={classes.levelText}>
                    100%
                </Typography>

            </div>
            <Typography variant="h6" align="center" className={classes.status}>
                Status: Full
            </Typography>
            <Typography variant="h6" align="center" className={classes.connected}>
                Connected: Yes
            </Typography>
            <Typography variant="h6" align="center" className={classes.connected}>
                No of Tanks: 3
            </Typography>

            </Paper>
            <div className={classes.subContainer}>
                <Paper className={classes.tankA}>
                    <Typography variant="h5" align="center" className={classes.name}>
                        Tank A
                    </Typography>
                    <div className={classes.wLevelA}>
                        <Typography variant="h6" align="center" className={classes.levelText}>
                            100%
                        </Typography>

                    </div>
                    <Button variant="contained"  className={classes.button}>
                        View
                    </Button>

                </Paper>
                <Paper className={classes.tankB}>
                <Typography variant="h5" align="center" className={classes.name}>
                        Tank B
                    </Typography>
                    <div className={classes.wLevelB}>
                        <Typography variant="h6" align="center" className={classes.levelText}>
                            100%
                        </Typography>
                   
                    </div>
                    <Button variant="contained"  className={classes.button}>
                        View
                    </Button>
                </Paper>
                <Paper className={classes.tankC}>
                <Typography variant="h5" align="center" className={classes.name}>
                        Tank C
                    </Typography>
                    <div className={classes.wLevelC}>
                        <Typography variant="h6" align="center" className={classes.levelText}>
                            100%
                        </Typography>

                    </div>
                    <Button variant="contained"  className={classes.button}>
                        View
                    </Button>
                </Paper>
                <Paper className={classes.tankD}>
                <Typography variant="h5" align="center" className={classes.name}>
                        Add Tank
                    </Typography>
               <PlusIcon className={classes.plus} />
                </Paper>

                </div>

            </div>
        </Grid>
    )
}

export default Dashboard
