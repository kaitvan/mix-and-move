declare module 'WorkoutTypes' {
    interface Workout {
        id: number;
        startTime: Date;
        endTime: Date;
        userId: number;
        workoutTypeId: number;
    }

    interface WorkoutDetails {
        id: number;
        workoutId: number;
        movementId: number;
        seconds: number;
    }
}

export { Workout, WorkoutDetails };