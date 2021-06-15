declare module 'MovementTypes' {
    interface Movement {
        id: number;
        name: string;
        categoryId: number;
        movementVideo: string;
        baseReps: number;
    }
}

export { Movement };