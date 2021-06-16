import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Views/Home';
import About from '../Views/About';
import Profile from '../Views/Profile';
import Plan from '../Views/Plan';
import Workout from '../Views/Workout';

import { WorkoutProps } from '../Helpers/Interfaces/WorkoutInterfaces'; 

export default function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={() => <Home />}></Route>
            <Route exact path="/About" component={() => <About />}></Route>
            <Route exact path="/Profile" component={() => <Profile />}></Route>
            <Route exact path="/Plan" component={() => <Plan />}></Route>
            <Route exact path="/Workout" component={(props: WorkoutProps) => <Workout{...props}/>}></Route>
        </Switch>
    );
}