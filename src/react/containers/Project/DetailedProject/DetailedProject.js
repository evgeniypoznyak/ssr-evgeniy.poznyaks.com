import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {getRandomString} from '../../../shared/utility';
import {Grid} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    paper: {
        'padding': theme.spacing(3, 2),
        'fontSize': '2rem',
        '@media (max-width: 960px)': {
            fontSize: '1.3rem',
        },
        '@media (max-width: 600px)': {
            fontSize: '1rem',
        },
    },
    imageWrapper: {
        width: '100%',
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
    },
    descriptionElement: {
        marginBottom: 20,
        padding: 10,
    },
    divider: {
        marginTop: 20,
        marginBottom: 20,
    },
}));

export default function DetailedProject(props) {
    const classes = useStyles();

    return (
        <Fragment>
            {props.description.map(d => {
                return (
                    <Fragment key={getRandomString(99)}>
                        <Paper className={classes.descriptionElement}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                spacing={1}
                                alignItems="center">
                                <Grid item xs={12} md={6}>
                                    {d.picture ? <Fragment>
                                        <div className={classes.imageWrapper}>
                                            <img alt="detailed" src={d.picture} className={classes.image}/>
                                        </div>
                                    </Fragment> : null}
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper className={classes.paper}>{d.description}</Paper>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Fragment>
                );
            })}
        </Fragment>
    );
}
