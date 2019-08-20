import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {uploadBiography} from '../../../shared/api';
import clsx from 'clsx';
import {State} from '../../../shared/StateManager';


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

export default function Biography(props) {
    const context = useContext(State);
    const classes = useStyles();
    const [values, setValues] = useState({
        biography: context.data.biography,
    });

    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value});
        context.setData({...context.data, biography: event.target.value});
    };

    const onUploadBiography = async () => {
        await uploadBiography(values.biography);
        props.history.push('/');
    };

    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                <h2 align={'center'}>Biography</h2>
                <TextField
                    required
                    id="outlined-biography"
                    onChange={handleChange('biography')}
                    value={values.biography}
                    label="Biography"
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
                <Button
                    fullWidth
                    className={classes.button}
                    color={'primary'}
                    variant="contained"
                    value
                    onClick={onUploadBiography}
                >Save Biography</Button>
            </form>
        </div>

    );
}
