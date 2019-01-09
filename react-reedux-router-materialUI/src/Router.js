import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { firebaseApp } from './firebase'
import { createBrowserHistory } from 'history'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { logUser } from './actions'

import BecomeAHost from './pages/becomeahost'
import SignIn from './pages/login'
import SignUp from './pages/signup'
import Help from './pages/help'

const history = createBrowserHistory();

const isLogIn = createStore(reducer);

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        console.log('user has signed in or up', user);
        const { email } = user
        isLogIn.dispatch(logUser(email));
        history.push('/becomeahost');
    } else {
        console.log('user has signed out or still need to sign in.')
        history.replace('/becomeahost')
    }
})

const IamRouter = () => (
    // <Provider store={isLogIn}>
        <Switch>
            <Router  exact path='/' history={history} />
                <Route  path='/becomeahost' component={BecomeAHost} />
                <Route  path='/help' component={Help} />
                <Route  path='/signup' component={SignUp} />
                <Route  path='/login' component={SignIn} />
        </Switch>
    // </Provider>
)

export default IamRouter;