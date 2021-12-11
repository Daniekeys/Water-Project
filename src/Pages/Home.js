
import React from "react";
// import useStyles from './styles';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Logo from '../components/Logo';
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
    containerA: {
        width: '100%',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',

        backgroundColor: '#f5f6ff',
          


    },


}));

const Home = () => {
    const classes = useStyles();
    const history = useHistory();
    setTimeout(() => {
        history.push("/slide");
    }, 5000);


    return (
        <div className={classes.containerA}>
            <Logo />
       
        </div>
    );
    }
    export default Home;
