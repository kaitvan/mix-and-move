import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Views/Home';
import About from '../Views/About';
import Profile from '../Views/Profile';
import Plan from '../Views/Plan';
import Workout from '../Views/Workout';

import { WorkoutProps } from '../Helpers/Interfaces/WorkoutInterfaces';
import { PlanProps } from '../Helpers/Interfaces/PlanInterfaces';
import { User } from '../Helpers/Interfaces/UserInterfaces'; 

type RouteProps = {
    user: User | null
}

export default function Routes({ user }: RouteProps): JSX.Element {
    console.log('user on routes component', user)
    return (
        <Switch>
            <Route exact path="/" component={() => <Home />}></Route>
            <Route exact path="/About" component={() => <About />}></Route>
            <Route exact path="/Profile" component={() => <Profile user={user}/>}></Route>
            <Route exact path="/Plan" component={(props: PlanProps) => <Plan {...props} user={user}/>}></Route>
            <Route exact path="/Workout" component={(props: WorkoutProps) => <Workout {...props} user={user}/>}></Route>
        </Switch>
    );
}