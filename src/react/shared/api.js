import axios from './axios';
import {skills} from './initialData/skills';

const url = process.env.API_GATEWAY || 'http://localhost:2222';
const apiPublic = process.env.API_PUBLIC || 'http://localhost:2222';

export async function fetchSkills(skill = 'all') {
    try {
        console.log('processing url: ', `${url}/api/skills/`);
        const result = await axios.get(`${url}/api/skills/`);
        return result.data;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        console.log('returning regular skills...');
        return {skills};
    }

}

export async function signInIntoApiGateway(data) {
    try {
        console.log('processing url: ', `${apiPublic}/api/auth`);
        const result = await axios.post(`${apiPublic}/api/auth`, {...data});
        return result.data;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return {token: ''};
    }
}

export async function verifyToken() {
    try {
        // eslint-disable-next-line no-undef
        if (__isBrowser__ && localStorage.getItem('token') && localStorage.getItem('token').length > 0) {
            return 'OK';
        }
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return {token: ''};
    }
}

export async function patchSkill(skill) {
    try {
        const url = `${apiPublic}/api/skills`;
        const result = await axios.patch(url, {skill});
        return result.data;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return 'Skill not been patched';
    }
}

export async function deleteSkill(skillId) {
    try {
        const url = `${apiPublic}/api/skills/` + skillId;
        const result = await axios.delete(url);
        return result.data;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return 'Skill not been deleted';
    }
}

export const getSkillsByPanes = skills => {
    const sortedSkills = skills.slice().sort(sortByOrder);
    return sortedSkills.reduce((acc, curr) => {
        if (curr['panel'] === 'left') {
            acc['left'].push(curr);
        }
        if (curr['panel'] === 'right') {
            acc['right'].push(curr);
        }
        return acc;
    }, {left: [], right: []});
};

export const sortByOrder = (a, b) => {
    if (a.order < b.order) {
        return -1;
    }
    if (a.order > b.order) {
        return 1;
    }
    return 0;
};
