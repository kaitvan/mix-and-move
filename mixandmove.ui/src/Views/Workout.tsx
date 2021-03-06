import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { getWorkoutDetailsByWorkout, updateTime } from '../Helpers/Data/WorkoutData';
import { Movement } from '../Helpers/Interfaces/MovementInterfaces';
import { WorkoutProps } from '../Helpers/Interfaces/WorkoutInterfaces';
import { User } from '../Helpers/Interfaces/UserInterfaces';

type WorkoutState = {
    workoutId: number,
    rounds: number,
    workoutStartTime: Date,
    movements: Movement[],
    currentIndex: number,
    end: boolean,
    totalTimeInSeconds: number,
    intervalTimeInSeconds: number,
    isWorkTime: boolean,
    running: boolean,
    user: User
}

class Workout extends Component<WorkoutProps> {
    private timer: any;

    state: WorkoutState = {
        workoutId: this.props.location.state.currentWorkoutId,
        rounds: this.props.location.state.rounds,
        workoutStartTime: this.props.location.state.workoutStartTime,
        movements: [],
        currentIndex: 0,
        end: false,
        totalTimeInSeconds: 0,
        intervalTimeInSeconds: 40,
        isWorkTime: true,
        running: true,
        user: this.props.user
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
        if (this.state.running) {
            clearInterval(this.timer);
        } else {
            this.timer = setInterval(() => {
                this.countDown();
            }, 1000)
        }
        this.setState({
            running: !this.state.running
        })
    }

    endWorkout = (): void => {
        const workout = {
            id: this.state.workoutId,
            totalTime: Number(this.state.rounds) * 600 - this.state.totalTimeInSeconds,
            userId: this.state.user.id,
            workoutTypeId: 1,
        }
        updateTime(workout).then(() => {
            this.props.history.push('/profile', { user: this.state.user});
        });
    }

    componentWillUnmount(): void {
        clearInterval(this.timer);
    }

    render(): JSX.Element {
        console.log('user on workout component', this.state.user)
        const { movements, currentIndex, end, totalTimeInSeconds, intervalTimeInSeconds, isWorkTime, running } = this.state;
        const minutes = Math.floor(totalTimeInSeconds/60);
        const seconds = totalTimeInSeconds % 60;

        let clockTime = `${minutes}:${seconds}`
        if (minutes < 10 && seconds < 10) {
            clockTime = `0${minutes}:0${seconds}`
        } else if (minutes < 10) {
            clockTime = `0${minutes}:${seconds}`
        } else if (seconds < 10) {
            clockTime = `${minutes}:0${seconds}`
        }

        const controlButton = running ? <i className="far fa-pause-circle fa-3x timer-icon"></i> : <i className="far fa-play-circle fa-3x timer-icon"></i>

        return (
            <div>
                { movements.length && !end && isWorkTime &&
                <div className='workout-bubble'>
                    <div className="movement-title">{movements[currentIndex].name}</div>
                    <img className="movement-image" src={movements[currentIndex].movementVideo} alt="name of exercise here"></img>
                    <div className="interval-timer">
                        {intervalTimeInSeconds < 10 ? (`00:0${intervalTimeInSeconds}`) : (`00:${intervalTimeInSeconds}`)}
                    </div>
                    <button className="timer-control-button" onClick={() => this.handleClick()}>{controlButton}</button>
                    <div className="overall-timer">
                        {clockTime}
                    </div>
                    <Button onClick={() => this.endWorkout()}>END</Button>
                </div>
                }
                { movements.length && !end && !isWorkTime &&
                <div className='workout-bubble'>
                    <div className="movement-title"></div>
                    <div className="movement-image">REST</div>
                    <div className="interval-timer">
                        {intervalTimeInSeconds < 10 ? (`00:0${intervalTimeInSeconds}`) : (`00:${intervalTimeInSeconds}`)}
                    </div>
                    <button className="timer-control-button" onClick={() => this.handleClick()}>{controlButton}</button>
                    <div className="overall-timer">
                        {clockTime}
                    </div>
                    <Button onClick={() => this.endWorkout()}>END</Button>
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