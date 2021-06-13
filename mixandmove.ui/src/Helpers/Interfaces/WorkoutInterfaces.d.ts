declare module 'WorkoutTypes' {
    interface Workout {
        id: number;
        startTime: Date;
        endTime: Date;
        userId: number;
        workoutTypeId: number;
    }
}

export { Workout };