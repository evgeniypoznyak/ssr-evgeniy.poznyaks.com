import React, {useEffect} from 'react';
import routes from './routes';
import {Route, Switch} from 'react-router-dom';
import NoMatch from './components/404/NoMatch';
import Layout from './hoc/Layout/Layout';

const App = (props) => {
    useEffect(() => {

    }, []);

    // Where is a Switch and is then StaticContent from router defined
    const reactRoutes = <Switch>
        {routes.map(({path, exact, component: Component, ...rest}) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
                <Component {...props} {...rest} />
            )}/>
        ))}
        <Route render={(props) => <NoMatch {...props} />}/>
    </Switch>;

    return (
        <Layout>
            {reactRoutes}
        </Layout>
    );
};
export default App;
