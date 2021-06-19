import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import fbConnection from '../Helpers/fbConnection';
import Routes from '../Helpers/routes';
import './App.scss';
import Navigation from '../Components/Navigation';
import { User } from '../Helpers/Interfaces/UserInterfaces';
import userData from '../Helpers/Data/UserData';

fbConnection();

type AppState = {
  user?: User | boolean;
}

class App extends Component<AppState> {
  state = {
    user: null
  };

  removeListener = (noop: void): void => noop;

  componentDidMount(): void {
    this.removeListener = firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      if (user) {
        user.getIdToken().then((token: string) => sessionStorage.setItem('token', token));
        userData.getUserByFirebaseUid(user.uid).then((response) => {
          this.setState({ user: response });
        });
      } else {
        this.setState({ user: false });
      }
    });
  }

  render(): JSX.Element {
    const { user } = this.state;
    console.log('user on app component', user)
    return (
      <div className="App">
        <Navigation user={user}/>
        <Router>
          <Routes user={user}></Routes>
        </Router>
      </div>
    )
  }
}

export default App;
