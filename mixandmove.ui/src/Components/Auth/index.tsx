import React, { Component } from 'react';
import firebase from 'firebase/app';
import { User } from '../../Helpers/Interfaces/UserInterfaces';
import userData from '../../Helpers/Data/UserData';
import { NavItem } from 'reactstrap';

type AuthProps = {
    user: User | null
}

class Auth extends Component<AuthProps> {
    signInClickEvent = (e: React.MouseEvent<HTMLButtonElement>): void => {
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

    signOutClickEvent = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        window.sessionStorage.removeItem('token');
        firebase.auth().signOut();
        window.location.href = '/'
    }

    signInOrOut = (): JSX.Element => {
        const { user } = this.props;
        if (user == false) {
            return (
                <button className='auth-button' onClick={this.signInClickEvent}>Sign In</button>
            )
        } else {
            return (
                <button className='auth-button' onClick={this.signOutClickEvent}>Sign Out</button>
            )
        }
    }

    render(): JSX.Element {
        return (
            <NavItem>
                {this.signInOrOut()}
            </NavItem>
        )
    }
}

export default Auth;