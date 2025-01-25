import axios from 'axios';
import ApiResource from './api_resource';

const BaseAPI = axios.create({
    baseURL: ApiResource.endpoint, // Your API base URL
});

// Add request interceptor
BaseAPI.interceptors.request.use(
    function (config) {
        // const authToken = store.getState().user?.authToken;
        // // Perform actions before sending the request (e.g., adding headers)
        // // You can access your user profile information here if needed.
        // if (authToken && !config.headers['x-auth']) {
        //     config.headers['x-auth'] = authToken;
        //     BaseAPI.defaults.headers.common['x-auth'] = authToken;
        // } else if (!authToken && config.headers['x-auth']) {
        //     delete config.headers['x-auth'];
        //     delete BaseAPI.defaults.headers.common['x-auth'];
        // }

        return config;
    },
    function (error) {
        // Handle request error (e.g., network issue)
        return Promise.reject(error);
    },
);

// Export the Axios BaseAPI for use in your components
export default BaseAPI;
