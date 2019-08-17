import Home from './containers/Home/Home';
import {fetchBiography, fetchSkills} from './shared/api';
import Skill from './containers/Skill/Skill';
import Auth from './containers/Auth/Auth';
import Resume from './containers/Resume/Resume';
import Biography from './containers/Biography/Biography';

const reactRoutes = [
    {
        path: '/',
        exact: true,
        component: Home,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/auth',
        component: Auth,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/upload-resume',
        component: Resume,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/upload-biography',
        component: Biography,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/skills/:id',
        component: Skill,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
];

export default reactRoutes;
