import React, { Component } from 'react';
import { Movement } from '../Helpers/Interfaces/MovementInterfaces';

type WorkoutState = {
    workoutId: string,
    movements: Movement[],
}

class Workout extends Component {
    state: WorkoutState = {
        workoutId: '',
        movements: [],
    }

    render(): JSX.Element {
        return (
            <div>
                <div className='workout-bubble'>
                    <div className="movement-title">Name of exercise here</div>
                    <img className="movement-image" src="https://media.self.com/photos/59c81783bdd6c02d85791296/master/w_1600%2Cc_limit/Fitness_08.gif" alt="name of exercise here"></img>
                    <div className="interval-timer">0:40</div>
                    <button className="timer-control-button"><i className="far fa-pause-circle fa-3x timer-icon"></i></button>
                    <div className="overall-timer">24:00</div>
                </div>
            </div>
        )
    }
}

export default Workout;