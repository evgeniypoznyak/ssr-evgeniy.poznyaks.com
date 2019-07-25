import Home from './containers/Home/Home';
import Grid from './Grid';
import {fetchSkills} from './api';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/skills/:id',
        component: Grid,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
];

export default routes;
