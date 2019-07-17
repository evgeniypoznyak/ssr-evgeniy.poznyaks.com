import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
            // main: amber.A400,
            // light: amber[200],
            // dark: amber[700],
        },
        // type: 'dark',
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;


/*
import {createMuiTheme} from '@material-ui/core/styles';
import {red, amber, blue} from '@material-ui/core/colors';
import createPalette from '@material-ui/core/styles/createPalette';


export default createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: amber.A400,
            light: amber[200],
            dark: amber[700],
        },
        type: 'light',
    },
    spacing: 10,
});
 */
