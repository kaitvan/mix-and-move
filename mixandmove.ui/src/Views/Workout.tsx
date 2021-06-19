import React, { Component, useEffect } from 'react';
import { Button } from 'reactstrap';
import { getWorkoutDetailsByWorkout } from '../Helpers/Data/WorkoutData';
import { Movement } from '../Helpers/Interfaces/MovementInterfaces';
import { WorkoutProps } from '../Helpers/Interfaces/WorkoutInterfaces';

type WorkoutState = {
    workoutId: number,
    rounds: number,
    movements: Movement[],
    currentIndex: number,
    end: boolean,
    totalTimeInSeconds: number,
    intervalTimeInSeconds: number,
    isWorkTime: boolean,
}

class Workout extends Component<WorkoutProps> {
    private timer: any;

    state: WorkoutState = {
        workoutId: this.props.location.state.currentWorkoutId,
        rounds: this.props.location.state.rounds,
        movements: [],
        currentIndex: 0,
        end: false,
        totalTimeInSeconds: 0,
        intervalTimeInSeconds: 40,
        isWorkTime: true,
    }

    componentDidMount(): void {
        const { workoutId, rounds } = this.state;
        this.setState({ totalTimeInSeconds: rounds * 600 });
        getWorkoutDetailsByWorkout(workoutId).then((response: Movement[]) => {
            this.setState({
                movements: response,
            })
        })
        this.timer = setInterval(() => {
            this.countDown();
        }, 1000)
    }

    countDown = (): void => {
        if (this.state.totalTimeInSeconds > 0) {
            this.setState({
                totalTimeInSeconds: this.state.totalTimeInSeconds - 1
            })
        } else {
            clearInterval(this.timer);
            this.setState({
                end: true
            })
        }
        if (this.state.intervalTimeInSeconds > 0) {
            this.setState({
                intervalTimeInSeconds: this.state.intervalTimeInSeconds - 1
            })
        } else {
            this.setState({
                isWorkTime: !this.state.isWorkTime,
            })
            if (this.state.isWorkTime) {
                this.setState({
                    intervalTimeInSeconds: 39,
                })
                const { currentIndex } = this.state;
                if (currentIndex < 9) {
                    this.setState({ currentIndex: currentIndex + 1 })
                } else {
                    this.setState({ end: true })
                }
            } else {
                this.setState({
                    intervalTimeInSeconds: 19,
                })
            }
        }
    }

    handleClick = (): void => {
        console.log("pause clicked");
    }

    endWorkout = (): void => {
        this.props.history.push('/profile');
    }

    render(): JSX.Element {
        const { movements, currentIndex, end, totalTimeInSeconds, intervalTimeInSeconds, isWorkTime } = this.state;
        const minutes = Math.floor(totalTimeInSeconds/60);
        const seconds = totalTimeInSeconds % 60;

        let totalTime = `${minutes}:${seconds}`
        if (minutes < 10 && seconds < 10) {
            totalTime = `0${minutes}:0${seconds}`
        } else if (minutes < 10) {
            totalTime = `0${minutes}:${seconds}`
        } else if (seconds < 10) {
            totalTime = `${minutes}:0${seconds}`
        }

        return (
            <div>
                { movements.length && !end && isWorkTime &&
                <div className='workout-bubble'>
                    <div className="movement-title">{movements[currentIndex].name}</div>
                    <img className="movement-image" src={movements[currentIndex].movementVideo} alt="name of exercise here"></img>
                    <div className="interval-timer">
                        {intervalTimeInSeconds < 10 ? (`00:0${intervalTimeInSeconds}`) : (`00:${intervalTimeInSeconds}`)}
                    </div>
                    <button className="timer-control-button" onClick={() => this.handleClick()}><i className="far fa-pause-circle fa-3x timer-icon"></i></button>
                    <div className="overall-timer">
                        {totalTime}
                    </div>
                </div>
                }
                { movements.length && !end && !isWorkTime &&
                <div className='workout-bubble'>
                    <div className="movement-title"></div>
                    <div className="movement-image">REST</div>
                    <div className="interval-timer">
                        {intervalTimeInSeconds < 10 ? (`00:0${intervalTimeInSeconds}`) : (`00:${intervalTimeInSeconds}`)}
                    </div>
                    <button className="timer-control-button" onClick={() => this.handleClick()}><i className="far fa-pause-circle fa-3x timer-icon"></i></button>
                    <div className="overall-timer">
                        {totalTime}
                    </div>
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