import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {Paper} from '@material-ui/core';
import {Email, Phone} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        marginTop: 20,
        // '@media (max-width: 960px)': {
        //     display: 'none',
        // },
    },
    menuWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    avatar: {
        height: 25,
        width: 25,
    },
});

export default function Footer() {
    const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const classes = useStyles();
    const [value, setValue] = React.useState(null);

    return (
        <Paper className={classes.root}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.menuWrapper}
            >
                <BottomNavigationAction
                    onClick={scrollToTop}
                    label="Email Me"
                    component={AdapterLink}
                    to={'/contact-us/'}
                    icon={<Email/>}
                />
                <BottomNavigationAction
                    label="Call Me"
                    href="tel:518-772-8217"
                    icon={<Phone/>}
                />
                <BottomNavigationAction
                    color="inherit"
                    target="_blank"
                    label="My GuiHub"
                    href={'https://github.com/evgeniypoznyak/'}
                    icon={<Avatar className={classes.avatar} alt={'My GitHub'} src={'/assets/github-grey.jpg'}/>}
                />
                <BottomNavigationAction
                    color="inherit"
                    target="_blank"
                    label="My LinkedIn"
                    href={'https://www.linkedin.com/in/evgeniypoznyak/'}
                    icon={<Avatar alt={'My LinkedIn'} className={classes.avatar} src={'/assets/linkedin-grey.jpg'}/>}
                />
            </BottomNavigation>
        </Paper>

    );
}
