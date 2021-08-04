import React, {Fragment, useContext, useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {getSkillsByPanes, patchSkill} from '../../../shared/api';
import {State} from '../../../shared/StateManager';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    divider: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#c4c4c4',
        height: 2,
        width: '90%',
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

const SkillEdit = props => {
    const [expanded, setExpanded] = useState(null);
    const context = useContext(State);
    const skill = props.skill;
    const classes = useStyles();
    const [values, setValues] = useState(skill);

    const handleExpandedChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleSkillChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleProjectPropChange = (name, index) => event => {
        const projects = values.projects.slice();
        projects[index][name] = event.target.value;
        setValues({
            ...values,
            projects: projects,
        });
    };

    const handleProjectImageChange = (name, index, imageIndex) => event => {
        const projects = values.projects.slice();
        projects[index].images[imageIndex][name] = event.target.value;
        setValues({
            ...values,
            projects: projects,
        });
    };

    const handleProjectDescChange = (name, index, projectDescIndex) => event => {
        const projects = values.projects.slice();
        projects[index].longDescription[projectDescIndex][name] = event.target.value;
        setValues({
            ...values,
            projects: projects,
        });
    };

    const onSaveSkillClicked = async () => {
        const rawData = context.data.rawData.slice();
        await patchSkill(values);
        const indexToBeUpdated = rawData.findIndex(skill => skill.id === values.id);
        rawData[indexToBeUpdated] = values;
        const dataToBeUpdated = {
            ...context.data,
            rawData,
            sortedData: getSkillsByPanes(rawData.slice()),
        };
        context.setData(dataToBeUpdated);
    };

    return (
        <div className={classes.root}>
            <Button
                className={classes.button}
                color={'secondary'}
                variant="contained"
                onClick={props.closeSkill}
            >Close Form</Button>
            <Button
                className={classes.button}
                color={'primary'}
                variant="contained"
                onClick={onSaveSkillClicked}
            >Save skill</Button>
            <Fragment>
                <form className={classes.container} noValidate autoComplete="off">
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
                        id="outlined-select-pane-native"
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
                        className={clsx(classes.textField, classes.dense)}
                        margin="dense"
                        variant="outlined"
                        multiline
                        fullWidth
                        rowsMax="4"
                        value={values.description}
                        placeholder="Description"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleSkillChange('description')}
                    />
                    <div className={classes.root}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color={'primary'}
                        >Add New Project</Button>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Projects</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className={classes.root}>
                                    {skill.projects.map((project, index) => {
                                        return (
                                            <ExpansionPanel key={index}>
                                                <ExpansionPanelSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1d-content"
                                                    id="panel1d-header">
                                                    <Typography>{project.name}</Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails>
                                                    <div className={classes.root}>
                                                        <div className={classes.container}>
                                                            <TextField
                                                                id="outlined-project-name"
                                                                label="Project Name"
                                                                className={classes.textField}
                                                                value={skill.projects[index].name}
                                                                onChange={handleProjectPropChange('name', index)}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                            <TextField
                                                                id="outlined-project-company-name"
                                                                label="Company Name"
                                                                className={classes.textField}
                                                                value={skill.projects[index].companyName}
                                                                onChange={handleProjectPropChange('companyName', index)}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                            <TextField
                                                                id="outlined-project-website"
                                                                label="Website"
                                                                className={classes.textField}
                                                                value={skill.projects[index].website}
                                                                onChange={handleProjectPropChange('website', index)}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                            <TextField
                                                                id="outlined-project-github"
                                                                label="GitHub"
                                                                className={classes.textField}
                                                                value={skill.projects[index].github}
                                                                onChange={handleProjectPropChange('github', index)}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                            <TextField
                                                                id="outlined-project-logo"
                                                                label="Logo"
                                                                className={classes.textField}
                                                                value={skill.projects[index].logo}
                                                                onChange={handleProjectPropChange('logo', index)}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                            <TextField
                                                                id="outlined-project-cardCover"
                                                                label="Card cover"
                                                                className={classes.textField}
                                                                value={skill.projects[index].cardCover}
                                                                onChange={handleProjectPropChange('cardCover', index)}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                            <TextField
                                                                id="outlined-project-dateCreated"
                                                                label="Date Created"
                                                                type="date"
                                                                className={classes.textField}
                                                                value={skill.projects[index].dateCreated}
                                                                onChange={handleProjectPropChange('dateCreated', index)}
                                                                margin="normal"
                                                                variant="outlined"
                                                            />
                                                            <TextField
                                                                id="outlined-project-shortDescription"
                                                                label="Project short description"
                                                                value={skill.projects[index].shortDescription}
                                                                className={clsx(classes.textField, classes.dense)}
                                                                margin="dense"
                                                                multiline
                                                                rowsMax="4"
                                                                placeholder="Description"
                                                                fullWidth
                                                                variant="outlined"
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                onChange={handleProjectPropChange('shortDescription', index)}
                                                            />
                                                            <Button
                                                                className={classes.button}
                                                                variant="contained"
                                                                color={'primary'}
                                                            >Add Image With Name</Button>
                                                            <ExpansionPanel
                                                                className={classes.root}
                                                                expanded={expanded === 'project-image' + index}
                                                                onChange={handleExpandedChange('project-image' + index)}
                                                            >
                                                                <ExpansionPanelSummary
                                                                    expandIcon={<ExpandMoreIcon/>}
                                                                    aria-controls="project-image-content"
                                                                    id="project-image-header"
                                                                >
                                                                    <Typography className={classes.heading}>Project
                                                                        Images</Typography>
                                                                </ExpansionPanelSummary>
                                                                <ExpansionPanelDetails>
                                                                    <div>
                                                                        {skill.projects[index].images.map((image, imageIndex) => {
                                                                            return (
                                                                                <div key={imageIndex}
                                                                                    className={classes.root}>
                                                                                    <img alt={'project image'}
                                                                                        src={image.path}/>
                                                                                    <TextField
                                                                                        id="outlined-project-image-label"
                                                                                        label="Image label"
                                                                                        className={classes.textField}
                                                                                        value={skill.projects[index].images[imageIndex].label}
                                                                                        margin="normal"
                                                                                        variant="outlined"
                                                                                        onChange={handleProjectImageChange('label', index, imageIndex)}
                                                                                    />
                                                                                    <TextField
                                                                                        id="outlined-project-image-path"
                                                                                        label="Image path"
                                                                                        className={classes.textField}
                                                                                        value={skill.projects[index].images[imageIndex].path}
                                                                                        onChange={handleProjectImageChange('path', index, imageIndex)}
                                                                                        margin="normal"
                                                                                        variant="outlined"
                                                                                    />
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </ExpansionPanelDetails>
                                                            </ExpansionPanel>

                                                            <Button
                                                                className={classes.button}
                                                                variant="contained"
                                                                color={'primary'}
                                                            >Add Long Description Section with Image</Button>
                                                            <ExpansionPanel
                                                                className={classes.root}
                                                                expanded={expanded === 'project-description' + index}
                                                                onChange={handleExpandedChange('project-description' + index)}>
                                                                <ExpansionPanelSummary
                                                                    expandIcon={<ExpandMoreIcon/>}
                                                                    aria-controls="project-description-content"
                                                                    id="project-description-header"
                                                                >
                                                                    <Typography className={classes.heading}>Project
                                                                        Detailed
                                                                        Description</Typography>
                                                                </ExpansionPanelSummary>
                                                                <ExpansionPanelDetails>
                                                                    <div className={classes.root}>
                                                                        {skill.projects[index].longDescription.map((longDesc, lDIndex) => {
                                                                            return (
                                                                                <div key={lDIndex}>
                                                                                    <img alt={'longDescription picture'}
                                                                                        src={longDesc.picture}/>
                                                                                    <TextField
                                                                                        id="outlined-project-description-image-path"
                                                                                        label="Description Image path"
                                                                                        fullWidth
                                                                                        className={classes.textField}
                                                                                        value={skill.projects[index].longDescription[lDIndex].picture}
                                                                                        margin="normal"
                                                                                        variant="outlined"
                                                                                        onChange={handleProjectDescChange('picture', index, lDIndex)}
                                                                                    />
                                                                                    <TextField
                                                                                        id="outlined-project-longDescription-description"
                                                                                        label="Long Description Description"
                                                                                        fullWidth
                                                                                        className={clsx(classes.textField, classes.dense)}
                                                                                        value={skill.projects[index].longDescription[lDIndex].description}
                                                                                        variant="outlined"
                                                                                        margin="dense"
                                                                                        multiline
                                                                                        rowsMax="4"
                                                                                        InputLabelProps={{
                                                                                            shrink: true,
                                                                                        }}
                                                                                        onChange={handleProjectDescChange('description', index, lDIndex)}
                                                                                    />
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </ExpansionPanelDetails>
                                                            </ExpansionPanel>

                                                        </div>
                                                    </div>
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        );
                                    })}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    </div>
                </form>
            </Fragment>
        </div>
    );
};
export default SkillEdit;
