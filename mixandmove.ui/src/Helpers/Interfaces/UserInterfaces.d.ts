declare module 'UserTypes' {
    interface User {
        id: number,
        firstName: string,
        lastName: string,
        address: string,
        userCreatedDate: Date,
        firebasedUid: string,
        displayName: string,
        profilePicture: string,
        emailAddress: string,
        active: boolean,
    }
}

export { User }
