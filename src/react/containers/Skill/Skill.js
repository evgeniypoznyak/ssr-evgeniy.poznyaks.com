import React, {Fragment, useContext, useEffect, useState} from 'react';
import {Redirect, Switch} from 'react-router';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';
import Project from '../Project/Project';
import {State} from '../../shared/StateManager';
import Spinner from '../../components/UI/Spinner/Spinner';
import {getRandomString} from '../../shared/utility';
import SkillEdit from '../SkillEdit/SkillEdit';
import {deleteSkill, getSkillsByPanes} from '../../shared/api';
import {BrowserRouter} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
    input: {
        display: 'none',
    },
}));
const Skill = props => {
    const context = useContext(State);
    const [skillToEdit, setSkillToEdit] = useState(null);
    const [selectedPath, setSelectedPath] = useState(null);
    const classes = useStyles();
    const skills = [];
    useEffect(() => {
        if (props && props.history && props.history.location && props.history.location.pathname) {
            setSelectedPath(props.history.location.pathname.split('/').pop());
            setSkillToEdit(null);
        }
    }, [props.history.location.pathname]);


    let content = <Spinner/>;

    const onSetSkillEdit = skill => {
        setSkillToEdit(
            <SkillEdit skill={skill} closeSkill={() => setSkillToEdit(null)}/>,
        );
    };

    const onDeleteSkill = async skillId => {
        await deleteSkill(skillId);
        const rawData = context.data.rawData.slice();
        const indexToBeUpdated = rawData.findIndex(skill => skill.id === skillId);
        rawData.splice(indexToBeUpdated, 1);
        const dataToBeUpdated = {
            ...context.data,
            rawData,
            sortedData: getSkillsByPanes(rawData.slice()),
        };
        props.history.push('/');
        context.setData(dataToBeUpdated);
    };

    if (context) {
        let adminOptions = null;
        skills.push(...context.data.rawData);
        const selectedSkill = skills.find(el => el.id === selectedPath);
        if (selectedSkill) {
            if (context.data.authorized) {
                adminOptions = <Fragment>
                    <div className={classes.container}>
                        <Button
                            disabled={(skillToEdit !== null)}
                            onClick={() => onSetSkillEdit(selectedSkill)}
                            className={classes.button}
                            variant="contained"
                            color={'primary'}
                        >Edit</Button>
                        <Button className={classes.button} variant="contained" color={'default'}>New</Button>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color={'secondary'}
                            onClick={() => onDeleteSkill(selectedSkill.id)}
                        >Delete</Button>
                    </div>
                </Fragment>;
            }
            content =
                <Fragment>
                    {adminOptions}
                    {skillToEdit}
                    <Grid container justify="center">
                        <Typography variant="h5" style={{
                            flexGrow: 1, textAlign: 'center', marginTop: 28,
                        }}>
                            {selectedSkill.name}
                        </Typography>
                        <Avatar
                            alt="Skill logo"
                            src={selectedSkill.logo}
                            style={{margin: 5, width: 70, height: 70}}/>
                    </Grid>
                    <Typography variant="subtitle1">
                        {selectedSkill.description}
                    </Typography>

                    <Grid container justify={'space-evenly'}>
                        {selectedSkill.projects.map(project =>
                            <Grid item key={project.id + '_' + getRandomString(99)}>
                                <Project project={project}/>
                            </Grid>,
                        )}
                    </Grid>
                </Fragment>;
        }
    }

    return (<Fragment>{content}</Fragment>);
};

export default Skill;
