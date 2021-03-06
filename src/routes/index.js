import React from 'react';
import {
    BrowserRouter,
    Switch,

} from 'react-router-dom';

import { Login,
    Register,
    CreatePass,
    Main
} from '../components/JS/index' // add components here
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const Routes = () => {
    return(
        //add routes here
        <BrowserRouter>
            <Switch> 
                <PublicRoute path='/login' exact component={ Login }/>
                <PublicRoute path='/register' exact component={ Register } />
                <PublicRoute path='/forgetPass' exact component={ CreatePass } />
                <PrivateRoute path="/" exact component={ Main }/>
            </Switch>
           
        </BrowserRouter>
    )
}

export default Routes;

