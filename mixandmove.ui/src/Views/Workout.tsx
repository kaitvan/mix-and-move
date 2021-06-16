import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { getWorkoutDetailsByWorkout } from '../Helpers/Data/WorkoutData';
import { Movement } from '../Helpers/Interfaces/MovementInterfaces';
import { WorkoutProps } from '../Helpers/Interfaces/WorkoutInterfaces';

type WorkoutState = {
    workoutId: number,
    movements: Movement[],
    currentIndex: number,
    end: boolean
}

class Workout extends Component<WorkoutProps> {
    state: WorkoutState = {
        workoutId: this.props.location.state.currentWorkoutId,
        movements: [],
        currentIndex: 0,
        end: false
    }

    componentDidMount(): void {
        const { workoutId } = this.state;
        getWorkoutDetailsByWorkout(workoutId).then((response: Movement[]) => {
            this.setState({
                movements: response,
            })
        })
    }

    handleClick = (): void => {
        const { currentIndex } = this.state;
        if (currentIndex < 9) {
            this.setState({ currentIndex: currentIndex + 1 })
        } else {
            this.setState({ end: true })
        }
    }

    endWorkout = (): void => {
        this.props.history.push('/profile');
    }

    render(): JSX.Element {
        const { movements, currentIndex, end } = this.state;
        return (
            <div>
                { movements.length && !end &&
                <div className='workout-bubble'>
                    <div className="movement-title">{movements[currentIndex].name}</div>
                    <img className="movement-image" src={movements[currentIndex].movementVideo} alt="name of exercise here"></img>
                    <div className="interval-timer">0:40</div>
                    <button className="timer-control-button" onClick={() => this.handleClick()}><i className="far fa-pause-circle fa-3x timer-icon"></i></button>
                    <div className="overall-timer">24:00</div>
                </div>
                }
                { end &&
                <div className='bubble'>
                    <div>YOU DID IT!</div>
                    <Button onClick={() => this.endWorkout()}>END</Button>
                </div>
                }
            </div>
        )
    }
}

export default Workout;