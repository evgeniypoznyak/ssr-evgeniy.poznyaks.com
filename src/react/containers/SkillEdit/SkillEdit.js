import React, {Fragment, useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
}));

const SkillEdit = props => {
    const skill = props.skill;
    const classes = useStyles();
    const [values, setValues] = useState(skill);

    const handleSkillChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    return (
        <Fragment>
            <Button color={'primary'} onClick={props.closeSkill}>Close Form</Button>
            <Fragment>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        disabled
                        id="outlined-skill-id"
                        value={values.id}
                        label="Skill id is disabled"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-skill-name"
                        label="Skill Name"
                        className={classes.textField}
                        value={values.name}
                        onChange={handleSkillChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-skill-version"
                        label="Skill version"
                        className={classes.textField}
                        value={values.version}
                        onChange={handleSkillChange('version')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-skill-logo"
                        label="Skill logo"
                        className={classes.textField}
                        value={values.logo}
                        onChange={handleSkillChange('logo')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-skill-order"
                        label="Skill order"
                        className={classes.textField}
                        value={values.order}
                        onChange={handleSkillChange('order')}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Pane"
                        className={classes.textField}
                        value={values.panel}
                        onChange={handleSkillChange('panel')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                        variant="outlined"
                    >
                        <option key="left" value="left">
                            Left
                        </option>
                        <option key="right" value="right">
                            Right
                        </option>
                    </TextField>
                    <TextField
                        id="outlined-skill-description"
                        label="Skill Description"
                        value={values.description}
                        style={{margin: 8}}
                        placeholder="Description"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleSkillChange('description')}
                    />
                </form>
            </Fragment>
        </Fragment>
    );
};
export default SkillEdit;
