import Home from './containers/Home/Home';
import {fetchSkills} from './shared/api';
import Skill from './containers/Skill/Skill';
import Auth from './containers/Admin/Auth/Auth';
import Resume from './containers/Admin/Resume/Resume';
import Biography from './containers/Admin/Biography/Biography';
import ImportSkills from './containers/Admin/Import/ImportSkills/ImportSkills';
import Email from './containers/Email/Email';
import Skills from './containers/Skills/Skills';

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
        path: '/skills/',
        exact: true,
        component: Skills,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/skills/import',
        component: ImportSkills,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/skills/:id',
        component: Skill,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
    {
        path: '/contact-us',
        component: Email,
        fetchInitialData: (path = '') => fetchSkills(path.split('/').pop()),
    },
];

export default reactRoutes;
