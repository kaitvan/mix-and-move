import { RouteComponentProps } from "react-router-dom";

declare module 'WorkoutTypes' {
    interface Workout {
        id: number;
        startTime: Date;
        totalTime: number;
        userId: number;
        workoutTypeId: number;
    }

    interface WorkoutDetails {
        id: number;
        workoutId: number;
        movementId: number;
        seconds: number;
    }

    interface WorkoutProps {
        location: RouteComponentProps["location"],
        history: RouteComponentProps["history"],
        currentWorkoutId: number,
        user: User,
        workout: Workout
    }
}

export { Workout, WorkoutDetails, WorkoutProps };