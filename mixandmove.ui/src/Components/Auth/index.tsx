import React, { Component, MouseEvent } from 'react';
import firebase from 'firebase/app';
import { User } from '../../Helpers/Interfaces/UserInterfaces';
import userData from '../../Helpers/Data/UserData';
import { NavItem, NavLink } from 'reactstrap';

type AuthProps = {
    user: User | null
}

class Auth extends Component<AuthProps> {
    signInClickEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((user) => {
            if (user.additionalUserInfo?.isNewUser) {
                const userInfo = {
                    displayName: user.user?.displayName,
                    profilePicture: user.user?.photoURL,
                    firebaseUid: user.user?.uid,
                    email: user.user?.email
                }
                userData.addUser(userInfo);
                window.location.href = '/';
            }
        })
    }

    signOutClickEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        window.sessionStorage.removeItem('token');
        firebase.auth().signOut();
        window.location.href = '/'
    }

    signInOrOut = (): JSX.Element => {
        const { user } = this.props;
        if (user == false) {
            return (
                <link onClick={() => this.signInClickEvent}>Sign In</link>
            )
        } else {
            return (
                <link onClick={() => this.signOutClickEvent}>Sign Out</link>
            )
        }
    }

    render(): JSX.Element {
        console.log("user on auth component", this.props.user);
        return (
            <NavItem>
                {this.signInOrOut}
            </NavItem>
        )
    }
}

export default Auth;