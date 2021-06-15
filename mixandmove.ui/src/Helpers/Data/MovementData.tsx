import axios from 'axios';
import { BaseURL } from '../config.json';
import { Movement } from '../Interfaces/MovementInterfaces';

const movementURL = `${BaseURL}/movements`;

const getMovementsByCategory = (categoryId: number): Promise<Movement> => new Promise((resolve, reject) => {
    axios.get(`${movementURL}/${categoryId}`).then((response) => {
        resolve(response.data)
    }).catch((error) => reject(error));
})

export { getMovementsByCategory };