import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Landingpage from './landingpage';
import Header from '../components/header/header'

const CompoPage = () => {
    return (
        <div>
            <Header />
            <h4>CustomCompo</h4>
        </div>
    )
}

const MainPage = () => {
    return (
        <div>
            <Switch>
                <Route path='/custom' component={CompoPage} />    
                <Route path='/home' component={Landingpage} />
                <Redirect path='/home' />
            </Switch>
        </div>
    )
}

export default withRouter(MainPage);