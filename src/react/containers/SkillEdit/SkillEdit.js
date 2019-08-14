import React, {Fragment, useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {getSkillsByPanes, patchSkill, verifyToken} from '../../shared/api';
import {State} from '../../shared/StateManager';

const useStyles = makeStyles(theme => ({
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
}));

const SkillEdit = props => {
    const context = useContext(State);
    const skill = props.skill;
    const classes = useStyles();
    const [values, setValues] = useState(skill);

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

    console.log(values);

    return (
        <Fragment>
            <Button color={'primary'} onClick={props.closeSkill}>Close Form</Button>
            <Button color={'primary'} onClick={onSaveSkillClicked}>Save skill</Button>
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
                    <div>
                        {skill.projects.map((project, index) => {
                            return (
                                <div className={classes.container} key={index}>
                                    <div className={classes.divider}>
                                    </div>
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
                                        className={classes.textField}
                                        value={skill.projects[index].shortDescription}
                                        style={{margin: 8}}
                                        placeholder="Description"
                                        fullWidth
                                        margin="normal"
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={handleProjectPropChange('shortDescription', index)}
                                    />
                                    {skill.projects[index].images.map((image, imageIndex) => {
                                        return (
                                            <Fragment key={imageIndex}>
                                                <img alt={'project image'} src={image.path}/>
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
                                                    fullWidth
                                                    className={classes.textField}
                                                    value={skill.projects[index].images[imageIndex].path}
                                                    onChange={handleProjectImageChange('path', index, imageIndex)}
                                                    margin="normal"
                                                    variant="outlined"
                                                />
                                            </Fragment>
                                        );
                                    })}
                                    {skill.projects[index].longDescription.map((longDesc, lDIndex) => {
                                        return (
                                            <Fragment key={lDIndex}>
                                                <img alt={'longDescription picture'} src={longDesc.picture}/>
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
                                                    className={classes.textField}
                                                    value={skill.projects[index].longDescription[lDIndex].description}
                                                    margin="normal"
                                                    variant="outlined"
                                                    onChange={handleProjectDescChange('description', index, lDIndex)}
                                                />
                                            </Fragment>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </form>
            </Fragment>
        </Fragment>
    );
};
export default SkillEdit;
