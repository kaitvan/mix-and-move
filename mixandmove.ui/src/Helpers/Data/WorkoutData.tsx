import axios from 'axios';
import { BaseURL } from '../config.json';
import { Workout } from '../Interfaces/WorkoutInterfaces';

const workoutURL = `${BaseURL}/workouts`;

const addWorkout = (workout: Workout): Promise<Workout> => new Promise((resolve, reject) => {
    axios.post(`${workoutURL}`, workout).then((response) => {
        resolve(response.data)
    }).catch((error) => reject(error));
});

export { addWorkout }