import { WorkoutProps } from '../../Helpers/Interfaces/WorkoutInterfaces';

export const WorkoutLog = ({ startTime, totalTime, workoutTypeId }: WorkoutProps): JSX.Element => {

    const getWorkoutType = (): string => {
        return workoutTypeId == 1 ? 'Time-Based Workout' : 'Rep-Based Workout';
    }

    const getWorkoutDate = (): string => {
        const dateSplit = startTime?.split("T");
        return dateSplit[0];
    }

    const calculateTotalTime = (): string => {
        const minutes = Math.floor(totalTime/60);
        const seconds = totalTime % 60;

        let clockTime = `${minutes}:${seconds}`
        if (minutes < 10 && seconds < 10) {
            clockTime = `0${minutes}:0${seconds}`
        } else if (minutes < 10) {
            clockTime = `0${minutes}:${seconds}`
        } else if (seconds < 10) {
            clockTime = `${minutes}:0${seconds}`
        }
        return clockTime;
    }

    return (
        <>
            <tr>
                <td>{getWorkoutDate()}</td>
                <td>{getWorkoutType()}</td>
                <td>{calculateTotalTime()}</td>
            </tr>
        </>
    )
}