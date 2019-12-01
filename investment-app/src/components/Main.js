import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Profile from './Profile';
import Report from './Report';
import WrappedRegistrationForm from './RegistrationForm';
import SignIn from './SignIn';

const Main = () => {
    return(<main>
        <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/report' component={Report}/>
            <Route path='/register' component={WrappedRegistrationForm}/>
            <Route path='/signin' component={SignIn}/>
        </Switch>
    </main>)
}

export default Main;