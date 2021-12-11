import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
    root: {
        width: '100%',
        
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),

    },
    link: {
        color: '#00bcd4',
        textDecoration: 'none',
        padding: '4px 10px',
        '&:hover': {
            backgroundColor: '#00bcd4',
            color: '#fff',
        },


    },


    container:{
        display: 'flex',
        // flexWrap: 'wrap',
        padding: '10px',
        maxWidth: '600px',
        
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto',
            // height: '100vh',
            padding: '3rem 0',
            overflowY: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
    },
    imgContainer:{
        width: '100%',
        height: '50vh',
        backgroundColor: '#fff',
        [theme.breakpoints.down('sm')]: {
            height: '40vh',
            width: '100%',
        },
        
    },
    illustration:{
        width: '100%',
        height: 'auto',

    },
    textContainer:{
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
    },
    title:{
        fontSize: '1.5rem',
        
        color: '#474747',
        textAlign: 'left',
        
    },
    subtitle:{
        fontSize: '1rem',
        fontWeight: '300',

        color: '#474747',
        marginTop: '10px',
    },
    textComponent:{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',

        color: '#474747',
    },



    button:{
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
