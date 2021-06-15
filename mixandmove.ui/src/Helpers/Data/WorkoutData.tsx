import axios from 'axios';
import { BaseURL } from '../config.json';
import { Workout, WorkoutDetails } from '../Interfaces/WorkoutInterfaces';

const workoutURL = `${BaseURL}/workouts`;
const workoutDetailsURL = `${BaseURL}/WorkoutDetails`;

const addWorkout = (workout: Workout): Promise<Workout> => new Promise((resolve, reject) => {
    axios.post(`${workoutURL}`, workout).then((response) => {
        resolve(response.data)
    }).catch((error) => reject(error));
});

const addWorkoutDetails = (workoutDetails: WorkoutDetails): Promise<WorkoutDetails> => new Promise((resolve, reject) => {
    axios.post(`${workoutDetailsURL}`, workoutDetails).then((response) => {
        resolve(response.data)
    }).catch((error) => reject(error));
})

export { addWorkout, addWorkoutDetails }