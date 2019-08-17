import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {uploadResume} from '../../shared/api';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Resume(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        resume: null,
        age: '',
    });

    const handleFileChange = name => event => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        setValues({...values, [name]: data});
    };

    const onUploadResume = async () => {
        await uploadResume(values.resume);
        props.history.push('/');
    };

    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                <h2 align={'center'}>Resume</h2>
                <TextField
                    required
                    id="outlined-resume"
                    className={classes.textField}
                    onChange={handleFileChange('resume')}
                    margin="normal"
                    variant="outlined"
                    type="file"
                />
                <Button
                    disabled={!values.resume}
                    fullWidth
                    className={classes.button}
                    color={'primary'}
                    variant="contained"
                    value
                    onClick={onUploadResume}
                >Upload resume</Button>
            </form>
        </div>

    );
}
