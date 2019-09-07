import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    makeStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 20,
    },
}));

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Contact Us" component={AdapterLink} to={'/contact-us/'}/>
                    <Tab label="Make me a call" href="tel:518-772-8217"/>
                    <Tab label="Resume" href={'/resume'} color="inherit" target="_blank"/>
                </Tabs>
            </AppBar>
        </div>
    );
}
