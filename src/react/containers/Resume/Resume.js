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

export default function OutlinedTextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        resume: {},
        age: '',
    });

    const handleFileChange = name => event => {
        const file = event.target.files[0];
        console.log(file);
        let data = new FormData();
        data.append('file', file);
        data.append('name', 'evgeniy_poznyak_resume.pdf');
        console.log(data.get('file'));
        setValues({...values, [name]: data});
    };

    const onUploadResume = async () => {
        const result = await uploadResume(values.resume);
        console.log(result);
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
