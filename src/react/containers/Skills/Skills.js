import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {State} from '../../shared/StateManager';
import {sortByOrder} from '../../shared/api';
import {Link} from 'react-router-dom';
import {Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    skillWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    paper: {
        maxWidth: 300,
        margin: 10,
        padding: 10,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    skillName: {
        margin: 'auto',
    },
    avatar: {
        // marginLeft: 5,
    },
}));

export default function Skills() {
    const context = useContext(State);
    const sortedSkills = context.data.rawData.slice().sort(sortByOrder);
    const AdapterLink = React.forwardRef((props, ref) => <Link
        style={{textDecoration: 'none'}} innerRef={ref} {...props} />);
    const classes = useStyles();
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const skills = sortedSkills.map(skill => <Paper
        className={classes.paper}
        onClick={scrollToTop}
        key={skill.id}
        component={AdapterLink}
        to={'/skills/' + skill.id}
    >
        <Avatar alt={skill.name} src={skill.logo} className={classes.avatar}/>
        <Typography variant="h6" gutterBottom className={classes.skillName}>
            {skill.name}
        </Typography>
    </Paper>);

    return (
        <div className={classes.skillWrapper}>{skills}</div>
    );
}
