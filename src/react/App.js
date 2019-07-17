import React from 'react';
import routes from './routes';
import {Route, Link, Redirect, Switch} from 'react-router-dom';
// import {createMuiTheme} from '@material-ui/core';
// import ThemeProvider from '@material-ui/styles/ThemeProvider';
// import MuiThemeProvider from '@material-ui/';

import NoMatch from './NoMatch';
import Layout from './hoc/Layout/Layout';

// const muiTheme = createMuiTheme({
//
// });
// const theme = {
//     ...muiTheme,
//     // custom styles
// };
const App = (props) => {
    const reactRoutes = <Switch>
        {routes.map(({path, exact, component: Component, ...rest}) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props} {...rest} />
            )}/>
        ))}
        <Route render={(props) => <NoMatch {...props} />}/>
    </Switch>;

    return (

        <div>
            <Layout>
                {reactRoutes}
            </Layout>
        </div>

    );
};
export default App;
