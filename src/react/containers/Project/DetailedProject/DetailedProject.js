import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {getRandomString} from '../../../shared/utility';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
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
                            {d.picture ? <Fragment>
                                <div className={classes.imageWrapper}>
                                    <img alt="detailed" src={d.picture} className={classes.image}/>
                                </div>
                            </Fragment> : null}
                            <Divider className={classes.divider} component={'hr'} variant={'middle'}/>
                            <div>{d.description}</div>
                        </Paper>
                    </Fragment>
                );
            })}
        </Fragment>
    );
}
