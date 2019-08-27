import React, {Fragment} from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(0.5),
        textAlign: 'center',
    },
    input: {
        display: 'none',
    },
    list: {
        width: 250,
    },
    hiddenSkill: {
        display: 'none',
    },
    Pane: {
        '@media (max-width: 960px)': {
            display: 'none',
        },
    },
}));
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
const SkillPane = props => {
    const classes = useStyles();
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Grid item md={2} lg={2} className={classes.Pane}>
            <Paper style={props.styles.Paper}>
                <List>
                    {props.skills.map((skill, index) => (
                        <Fragment key={skill.id}>
                            <ListItem
                                onClick={scrollToTop}
                                alignItems={'center'}
                                button
                                component={AdapterLink}
                                to={'/skills/' + skill.id}>
                                <ListItemAvatar>
                                    <Avatar alt={skill.name} src={skill.logo}/>
                                </ListItemAvatar>
                                <ListItemText primary={skill.name} className={classes.skillName}/>
                            </ListItem>
                            {props.skills[index + 1] ? <Divider component={'li'}/> : null}
                        </Fragment>
                    ))}
                </List>
            </Paper>

        </Grid>


    );
};
export default SkillPane;
