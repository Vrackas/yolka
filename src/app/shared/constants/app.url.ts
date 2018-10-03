import { environment } from '../../../environments/environment';

const api = environment.apiHost;


export const APP_URL = {
    auth: {
        login: api + 'login',
        logout: api + 'logout'
    },
    'client': {
        all: api + 'get-my-cleaning',
        my: api + 'get-my-cleaners'
    },
    'incognito': {
        all: api + 'get-all-cleaners',
        create: api + 'clean-order'
    },
    'user': {
        login: api + 'login',
        register: api + 'register'
    }

};
