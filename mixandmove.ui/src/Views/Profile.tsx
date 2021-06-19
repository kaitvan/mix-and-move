import React, { Component } from 'react';
import { User } from '../Helpers/Interfaces/UserInterfaces';
import { Table } from 'reactstrap';
import { Workout } from '../Helpers/Interfaces/WorkoutInterfaces';
import { getWorkoutsByUser } from '../Helpers/Data/WorkoutData';
import { WorkoutLog } from '../Components/WorkoutLog';

type UserProps = {
    user: User;
}

type ProfileState = {
    user: User;
    workouts: Workout[];
}

class Profile extends Component<UserProps> {
    state: ProfileState = {
        user: this.props.user,
        workouts: [],
    };

    componentDidMount(): void {
        if (this.state.user) {
            console.log('user on profile component', this.state.user);
            getWorkoutsByUser(this.state.user.id).then((response: Workout[]) => {
                this.setState({
                    workouts: response,
                });
            });
        }
        
    }

    formatUserCreatedDate = (): string => {
        if (this.state.user) {
            const date = this.state.user.userCreatedDate;
            const year = date.substring(0, 4);
            return `${year}`;
        }
        return '';
    }
    

    render(): JSX.Element {
        const { user, workouts } = this.state;
        const workoutRow = (workout: Workout): JSX.Element => {
            return <WorkoutLog workoutTypeId={workout.workoutTypeId} startTime={workout.startTime} endTime={workout.endTime} />;
        }
        const rows = workouts.map(workoutRow);

        return ( 
            <div className="d-flex m-5">
                <div className="profile-container">
                    <div className="profile-bubble">
                        <img className="profile-picture" src={user?.profilePicture} alt={user?.displayName}></img>
                        <div className="pb-3 font-weight-bold">{user?.displayName}</div>
                        <div className="pb-5">Member since {this.formatUserCreatedDate()}</div>
                    </div>
                </div>
                <div className="workout-log-container">
                    <div className="log-title">My Workout Log</div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Type</th>
                                <th>Total Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Profile;