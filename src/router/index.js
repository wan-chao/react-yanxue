import React, { Component } from 'react'
import { HashRouter,Switch} from 'react-router-dom';

import FrontendAuth from './frontendAuth'
import routerConfig  from './routerConfig'


class Routes extends Component {
    render(){
        return (
            <HashRouter>
                <Switch>
                    <FrontendAuth config={routerConfig} />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes