import { WorkoutProps } from '../../Helpers/Interfaces/WorkoutInterfaces';

export const WorkoutLog = ({ startTime, endTime, workoutTypeId }: WorkoutProps): JSX.Element => {

    const getWorkoutType = (): string => {
        return workoutTypeId == 1 ? 'Time-Based Workout' : 'Rep-Based Workout';
    }

    const getWorkoutDate = (): string => {
        const dateSplit = startTime?.split("T");
        return dateSplit[0];
    }

    const calculateTotalTime = (): string => {
        const difference = Date.parse(endTime) - Date.parse(startTime);
        const differenceInSeconds = Number(difference/1000);

        const minutes = Math.floor(differenceInSeconds/60);
        const seconds = differenceInSeconds % 60;

        let totalTime = `${minutes}:${seconds}`
        if (minutes < 10 && seconds < 10) {
            totalTime = `0${minutes}:0${seconds}`
        } else if (minutes < 10) {
            totalTime = `0${minutes}:${seconds}`
        } else if (seconds < 10) {
            totalTime = `${minutes}:0${seconds}`
        }
        return totalTime;
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