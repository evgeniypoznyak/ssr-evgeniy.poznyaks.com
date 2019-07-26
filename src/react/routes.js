import Home from './containers/Home/Home';
import {fetchSkills} from './shared/api';
import Skill from './containers/Skill/Skill';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/skills/:id',
        component: Skill,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
];

export default routes;
