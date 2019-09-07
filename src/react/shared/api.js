import axios from './axios';
import {skills} from './initialData/skills';

const url = process.env.API_GATEWAY ||
    'https://api.evgeniy.poznyaks.com'
    // 'http://localhost:2222'
;
const apiPublic = process.env.API_GATEWAY_PUBLIC ||
    'https://api.evgeniy.poznyaks.com'
    // 'http://localhost:2222'
;

const selfUrl = process.env.SELF_URL ||
    ''
    // 'http://localhost:3001'
;

export async function fetchSkills(path = 'all') {
    const biography = await getBiography();
    try {
        console.log('[GET] processing url: ', `${url}/api/skills/`);
        const result = await axios.get(`${url}/api/skills/`);
        return {
            skills: result.data.skills,
            biography,
        };
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        console.log('returning regular skills...');
        return {skills, biography};
    }
}

export async function sendEmail(data) {
    try {
        const url = `${apiPublic}/api/email`;
        console.log('[POST] processing url: ', `${url}`);
        const result = await axios.post(url, data);
        return result.data;
    } catch (e) {
        const error = {
            status: e.response.data.status,
            message: e.response.data.message,
            errorMessage: e.message,
        };
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return error;
    }
}

export async function fetchBiography(path) {
    console.log(path);
    const url = '/biography';
    try {
        console.log('[GET] processing url: ', `${url}/`);
        const result = await axios.get(`${url}/`);
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
        console.log('[POST] processing url: ', `${apiPublic}/api/auth`);
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

export async function verifyTokenApi() {
    try {
        const url = `${apiPublic}/api/auth/verify`;
        console.log('[POST] processing url: ', `${url}`);
        const result = await axios.post(url);
        return result.data;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return {token: ''};
    }
}

export async function patchSkill(skill) {
    try {
        const url = `${apiPublic}/api/skills`;
        console.log('[PATCH] processing url: ', `${url}`);
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
        console.log('[DELETE] processing url: ', `${url}`);
        const result = await axios.delete(url);
        return result.data;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return 'Skill not been deleted';
    }
}

export async function uploadResume(resume) {
    try {
        const verification = await verifyTokenApi();
        if (verification === 'OK') {
            const url = '/resume';
            console.log('[POST] processing url: ', `${url}`);
            return await axios.post(url, resume);
        }
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with this server! Returning default response.');
        return 'Resume not been uploaded';
    }
}


export async function putSkills(skills) {
    try {
        const verification = await verifyTokenApi();
        if (verification === 'OK') {
            const url = `${apiPublic}/api/skills`;
            console.log('[PATCH] processing url: ', `${url}`);
            const result = await axios.put(url, {skills});
            return result.data;
        }
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return 'Skill not been patched';
    }
}


export async function uploadBiography(biography) {
    try {
        const verification = await verifyTokenApi();
        if (verification === 'OK') {
            const url = '/biography';
            console.log('[POST] processing url: ', `${url}`);
            return await axios.post(url, {biography});
        }
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with this server! Returning default response.');
        return 'Resume not been uploaded';
    }
}

export async function getBiography() {
    try {
        const url = `${selfUrl}/biography`;
        console.log('[GET] processing url: ', `${url}`);
        const result = await axios.get(url);
        return result.data.biography;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with this server! Returning default response.');
        return 'Biography not been uploaded';
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
    if (a.order * 1 < b.order * 1) {
        return -1;
    }
    if (a.order * 1 > b.order * 1) {
        return 1;
    }
    return 0;
};
