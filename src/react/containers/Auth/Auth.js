import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {signInIntoApiGateway} from '../../shared/api';

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

    const onSignInClicked = async () => {
        const result = await signInIntoApiGateway(
            {
                email: values.email + '',
                password: values.password + '',
            });
        // eslint-disable-next-line no-undef
        if (result.token.length > 0 && __isBrowser__) {
            localStorage.setItem('token', result.token);
        }
    };

    const signInDisabled = () => {
        return (values.email.length === 0 || values.password.length === 0);
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
            <Button
                disabled={signInDisabled()}
                variant="contained"
                onClick={onSignInClicked}
                color="primary"
                className={classes.button}
            >
                Sign In
            </Button>
        </Fragment>

    );
}
