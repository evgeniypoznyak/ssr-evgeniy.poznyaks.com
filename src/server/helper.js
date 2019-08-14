import axios from 'axios';
import {skills} from '../react/shared/initialData/skills';

export const getSkillsFromApiGateway = async () => {
    try {
        const result = await axios.get('http://localhost:2222/api/skills');
        // console.log(result.data.skills[36]);
        return result.data.skills;
    } catch (e) {
        console.log('Error: ', e.message);
        console.log('Something wrong happened with API Gateway! Returning default response.');
        return skills;
    }
};
