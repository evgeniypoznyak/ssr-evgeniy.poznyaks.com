import axios from './axios';
import {skills} from './initialData/skills';

const url = process.env.API_GATEWAY || 'http://localhost:2222';

export async function fetchSkills(skill = 'all') {
    try {
        const result = await axios.get(`${url}/api/skills`);
        return result.data;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return {skills};
    }

    // return new Promise((resolve, reject) => {
    //     resolve({data: {skills: {rawData: skills.slice(), sortedData: getSkillsByPanes(skills.slice())}}});
    // });
}

export async function signInIntoApiGateway(data) {
    try {
        const result = await axios.post(`${url}/api/auth`, {...data});
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
        // or make a real request, but everything will be verified on the server with token attached to the header.
        /*
        const result = await axios.post('http://localhost:2222/api/auth/verify');
        return result.data;
        */
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return {token: ''};
    }
}

export async function patchSkill(skill) {
    try {
        const url = `${url}/api/skills`;
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
        const url = `${url}/api/skills` + skillId;
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
