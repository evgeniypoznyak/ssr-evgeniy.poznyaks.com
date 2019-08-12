import axios from 'axios';


axios.interceptors.request.use(
    config => {
        let token = '';
        // eslint-disable-next-line no-undef
        if (__isBrowser__) {
            if (localStorage) {
                token = localStorage.getItem('token');
            }
        }

        config.headers['x-auth-token'] = token;
        return config;
    },
    error => Promise.reject(error),
);

export default axios;
