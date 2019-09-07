import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {NavLink} from 'react-router-dom';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import {processToggleDrawer} from './HeaderUtils';
import AdminMenu from './AdminMenu/AdminMenu';
import {Email} from '@material-ui/icons';
import {Phone} from '@material-ui/icons';

function ElevationScroll(props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.node.isRequired,
    window: PropTypes.func,
};

function Header(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
        },
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        avatar: {
            margin: 10,
        },
        bigAvatar: {
            margin: 10,
            width: 60,
            height: 60,
        },
        skillName: {
            margin: 'auto',
        },
        skillsHeader: {
            textAlign: 'center',
        },
    }));

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const classes = useStyles();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const toggleDrawer = processToggleDrawer(setState, state);

    const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
    const leftSideMenu = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem
                    onClick={scrollToTop}
                    button key={'email'}
                    component={AdapterLink}
                    to={'/contact-us/'}>
                    <ListItemIcon>
                        <Email/>
                    </ListItemIcon>
                    <ListItemText primary={'Email Me'}/>
                </ListItem>

                <ListItem button component="a" href="tel:518-772-8217">
                    <ListItemIcon>
                        <Phone/>
                    </ListItemIcon>
                    <ListItemText primary="Call Me"/>
                </ListItem>
            </List>
            <Divider/>
            <List>
                <ListItem
                    className={classes.skillsHeader}
                    onClick={scrollToTop}
                    button key={'skills'}
                    component={AdapterLink}
                    to={'/skills/'}>
                    <ListItemText primary={'My Skills'}/>
                </ListItem>
                {props.context.data.rawData.map(skill => (
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
                        <Divider component="li"/>
                    </Fragment>
                ))}
            </List>
        </div>
    );

    const adminMenu = props.context.data.authorized === true ? <AdminMenu/> : null;

    return (
        <React.Fragment>
            <CssBaseline/>
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            onClick={toggleDrawer('left', true)}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6">
                            <NavLink
                                onClick={scrollToTop}
                                to={'/'}
                                style={{textDecoration: 'none', color: 'inherit'}}
                                activeClassName={classes.active}>
                                <Button color="inherit">Evgeniy Poznyak</Button></NavLink>
                        </Typography>
                        <Typography className={classes.title} variant="subtitle1" edge="center">
                            <div>
                                Software Engineer
                            </div>
                        </Typography>
                        {adminMenu}
                        <Button
                            href={'/resume'}
                            color="inherit"
                            target="_blank"
                        >Resume</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar/>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {leftSideMenu('left')}
            </Drawer>
        </React.Fragment>
    );
}

export default React.memo(Header);
