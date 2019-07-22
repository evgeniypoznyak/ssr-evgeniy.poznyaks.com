import React, {useContext} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import App from './App';
import theme from './theme';
import {State} from './shared/StateManager';

export const ReactMaterialUI = props => {
    const context = useContext(State);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App context={context}/>
        </ThemeProvider>
    );
};
export default ReactMaterialUI;
