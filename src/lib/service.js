import axios from 'axios';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
const GET_USERS = '/users/';
const POST_USER = '/posts/'

class UserDataService {
    getUsersData(userId) {
        return axios.get(`${BASE_API_URL}${GET_USERS}${userId}`);
    }
    postUserData(userId) {
        return axios.get(`${BASE_API_URL}${POST_USER}?userId=${userId}`);
    }
}

export default new UserDataService();
