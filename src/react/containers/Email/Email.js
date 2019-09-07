import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import {sendEmail} from '../../shared/api';
import Spinner from '../../components/UI/Spinner/Spinner';

const EMAIL_NOT_PROCEED = 'EMAIL_NOT_PROCEED';
const EMAIL_IN_PROCESS = 'EMAIL_IN_PROCESS';
const EMAIL_FAIL = 'EMAIL_FAIL';
const EMAIL_SUCCESS = 'EMAIL_SUCCESS';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    formContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 400,
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
}));

export default function Email(props) {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
    });

    const [emailStatus, setEmailStatus] = useState(EMAIL_NOT_PROCEED);

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
    };

    const onSendEmail = async () => {
        if (isAllRequiredValid()) {
            setEmailStatus(EMAIL_IN_PROCESS);
            const result = await sendEmail(values);
            console.log('result: ', result);
            if (result.message === 'success') {
                setEmailStatus(EMAIL_SUCCESS);
            } else {
                setEmailStatus(EMAIL_FAIL);
            }
        }
    };

    const isEmailValid = () => {
        // eslint-disable-next-line max-len
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return pattern.test(values.email);
    };

    const isNameIsValid = () => {
        return (values.name && values.name.length > 1);
    };

    const isMessageValid = () => {
        return (values.message && values.message.length > 5);
    };

    const isAllRequiredValid = () => {
        return (isEmailValid() && isNameIsValid() && isMessageValid());
    };

    let button = null;
    if (emailStatus === EMAIL_NOT_PROCEED || emailStatus === EMAIL_FAIL || emailStatus === EMAIL_SUCCESS) {
        button = <Button
            fullWidth
            disabled={!isAllRequiredValid()}
            className={classes.button}
            color={'primary'}
            variant="contained"
            value
            onClick={onSendEmail}
        >Send Email</Button>;
    }
    if (emailStatus === EMAIL_IN_PROCESS) {
        button = <Spinner/>;
    }

    let form = <form className={classes.formContainer} noValidate autoComplete="off">
        <h2 align={'center'}>Send me email</h2>
        <TextField
            required
            id="outlined-name"
            label="Your name"
            onChange={handleChange('name')}
            value={values.name}
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            required
            id="outlined-email"
            label="Your Email"
            onChange={handleChange('email')}
            value={values.email}
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            type="email"
            name="email"
            autoComplete="email"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            id="outlined-company"
            label="Your company (optional)"
            onChange={handleChange('company')}
            value={values.company}
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
        />
        <TextField
            required
            id="outlined-message"
            onChange={handleChange('message')}
            value={values.message}
            label="Message"
            fullWidth
            className={clsx(classes.textField, classes.dense)}
            variant="outlined"
            margin="dense"
            multiline
            rowsMax="10"
            InputLabelProps={{
                shrink: true,
            }}
        />
        {button}
    </form>;

    if (emailStatus === EMAIL_SUCCESS) {
        form = <h1>Thank you!</h1>;
        setTimeout(() => {
            props.history.push('/');
        }, 2000);
    }

    return (
        <div className={classes.container}>
            {form}
        </div>
    );
}
