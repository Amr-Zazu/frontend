import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Activate from './containers/Activate';
import Signup from './containers/Signup';
import Modules from './containers/Modules';
import Index from './containers/Index';
import Amr from './containers/Amr';
import Layout from './hocs/Layout';

import { Provider } from 'react-redux';
import store from './store';


const App = () => (
    <Provider store={store}>
        <Router>
            <Layout />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/' component={Index} />
                    <Route exact path='/modules' component={Modules} />
                    <Route exact path='/amr' component={Amr} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                </Switch>
        </Router>
    </Provider>
);

export default App;