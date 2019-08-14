import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {Bio} from '../../shared/initialData/bio';

const useStyles = makeStyles(theme => ({

    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 20,
        width: 100,
        height: 100,
    },
}));

const Home = props => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="flex-end">
                <Avatar alt="Evgeniy Poznyak" src={'/assets/me.jpg'} className={classes.bigAvatar}/>
            </Grid>
            {Bio}
        </div>
    );
};

export default Home;
