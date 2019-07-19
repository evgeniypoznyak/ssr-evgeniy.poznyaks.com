import React from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0.5),
        textAlign: 'center',
    },
    input: {
        display: 'none',
    },
}));
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
const RightPane = (props) => {
    const classes = useStyles();

    const buttons = props['skills'].map((el) => {
        return <Button
            key={el.id}
            component={AdapterLink}
            to={'/skills/' + el.id}
            variant="contained"
            size="small"
            color={el.color}
            className={classes.button}>
            {el.name}
        </Button>;
    });

    return (
        <Hidden only={['sm', 'xs']}>
            <Box clone order={{sm: 2, md: 3}}>
                <Grid item sm={2} xs={6}>
                    <Paper style={props.styles.Paper}>
                        <Grid container direction={'column'}>
                            {buttons}
                        </Grid>
                    </Paper>
                </Grid>
            </Box>
        </Hidden>
    );
};
export default RightPane;
