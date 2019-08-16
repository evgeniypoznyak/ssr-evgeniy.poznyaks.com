import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {Bio} from '../../shared/initialData/bio';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 20,
        width: 150,
        height: 150,
    },
}));

const Home = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="baseline"
            >
                <Grid item style={{maxWidth: 240}}>
                    <Avatar alt="Evgeniy Poznyak" src={'/assets/me2.jpg'} className={classes.avatar}/>
                </Grid>

            </Grid>
            <div>
                {Bio}
            </div>
        </Fragment>
    );
};

export default Home;
