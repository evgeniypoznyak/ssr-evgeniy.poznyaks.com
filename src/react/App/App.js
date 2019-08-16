import React, {useContext, useEffect} from 'react';
import reactRoutes from '../reactRoutes';
import {Route, Switch} from 'react-router-dom';
import NoMatch from '../components/404/NoMatch';
import Layout from '../hoc/Layout/Layout';
import {verifyToken} from '../shared/api';
import {State} from '../shared/StateManager';


const App = props => {
    const context = useContext(State);
    useEffect(() => {
        (async () => {
            const res = await verifyToken();
            if (res === 'OK') {
                context.setData({...context.data, 'authorized': true});
            }
        })();
    }, []);

    const routesWithReact = <Switch>
        {reactRoutes.map(({path, exact, component: Component, ...rest}) => (
            <Route key={path} path={path} exact={exact} render={props => (
                <Component {...props} {...rest} />
            )}/>
        ))}
        <Route render={props => <NoMatch {...props} />}/>
    </Switch>;

    return (
        <Layout context={props.context}>
            {routesWithReact}
        </Layout>
    );
};
export default App;
