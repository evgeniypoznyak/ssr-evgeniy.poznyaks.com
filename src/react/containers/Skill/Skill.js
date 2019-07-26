import React, {Fragment, useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Project from '../Project/Project';
import {State} from '../../shared/StateManager';
import Spinner from '../../components/UI/Spinner/Spinner';
import {getRandomString} from '../../shared/utility';

const Skill = props => {
    const skills = [];
    let selectedPath = null;
    if (props && props.history && props.history.location && props.history.location.pathname) {
        selectedPath = props.history.location.pathname.split('/').pop();
    }
    const state = useContext(State);

    let content = <Spinner/>;

    if (state) {
        skills.push(...state.data.rawData);
        const selectedSkill = skills.find(el => el.id === selectedPath);
        if (selectedSkill) {
            content =
                <Fragment>
                    <Grid container justify="center">
                        <Typography variant="h5" style={{
                            flexGrow: 1, textAlign: 'center', marginTop: 28,
                        }}>
                            {selectedSkill.name}
                        </Typography>
                        <Avatar alt="Skill logo" src={selectedSkill.logo}
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
