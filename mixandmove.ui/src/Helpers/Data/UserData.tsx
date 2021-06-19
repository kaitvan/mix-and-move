import axios from 'axios';
import { BaseURL } from '../config.json';
import { User } from '../Interfaces/UserInterfaces';

const usersURL = `${BaseURL}/users`;

const addUser = (user: User): Promise<User> => new Promise((resolve, reject) => {
    axios.post(`${usersURL}`, user).then((response) => {
        return response.data;
    }).catch((error) => reject(error));
});

const getUserByFirebaseUid = (firebaseUid: string): Promise<User> => new Promise((resolve, reject) => {
    axios.get(`${usersURL}/firebase/${firebaseUid}`).then((response) => {
        resolve(response.data);
    }).catch((error) => reject(error));
});

const userData = {
    addUser,
    getUserByFirebaseUid,
}

export default userData;