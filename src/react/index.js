import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import App from './App';
import theme from './theme';

export const ReactMaterialUI = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    );
};
export default ReactMaterialUI;
