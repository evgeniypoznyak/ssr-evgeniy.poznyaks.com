import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function Auth() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: 'test@mail.com',
        password: 12345,
    });

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    return (
        <Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    id="outlined-name"
                    label="Email"
                    className={classes.textField}
                    value={values.email}
                    type="email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange('email')}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
            </form>
            <Button variant="contained" color="primary" className={classes.button}>
                Sign In
            </Button>
        </Fragment>

    );
}
