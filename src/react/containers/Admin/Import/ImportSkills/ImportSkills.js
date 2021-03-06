import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {getSkillsByPanes, putSkills} from '../../../../shared/api';
import {State} from '../../../../shared/StateManager';


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

export default function ImportSkills(props) {
    const context = useContext(State);
    const classes = useStyles();
    const [values, setValues] = React.useState({
        skills: null,
    });

    const handleFileChange = name => event => {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        const reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    };

    function onReaderLoad(event) {
        const obj = JSON.parse(event.target.result);
        setValues({...values, ['skills']: obj});
    }

    const onImportSkills = async () => {
        const result = await putSkills(values.skills);
        const skills = result.skills;
        context.setData({...context.data, rawData: result.skills, sortedData: getSkillsByPanes(skills)});
        props.history.push('/');
    };

    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
                <h2 align={'center'}>Import Skills</h2>
                <TextField
                    required
                    id="outlined-resume"
                    className={classes.textField}
                    onChange={handleFileChange('skills')}
                    margin="normal"
                    variant="outlined"
                    type="file"
                />
                <Button
                    disabled={!values.skills}
                    fullWidth
                    className={classes.button}
                    color={'primary'}
                    variant="contained"
                    value
                    onClick={onImportSkills}
                >Import skills</Button>
            </form>
        </div>

    );
}
