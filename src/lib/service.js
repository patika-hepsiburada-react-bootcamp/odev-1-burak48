import axios from 'axios';

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
const GET_USERS = '/users/';
const POST_USER = '/posts/'

class UserDataService {
    async getUsersData(userId) {
        return await axios.get(`${BASE_API_URL}${GET_USERS}${userId}`);
    }
    async postUserData(userId) {
        return await axios.get(`${BASE_API_URL}${POST_USER}?userId=${userId}`);
    }
}

export default new UserDataService();
