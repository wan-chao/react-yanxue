import React, { Component } from 'react';
import { Route,Redirect } from 'react-router-dom';

//redux相关
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
const store = configureStore()


export default class FrontendAuth extends Component {
    
    render(){
        const { location,config } = this.props;
        const { pathname } = location;
        const isLogin = store.getState().userinfo.isLogin;
        const targetRouterConfig = config.find((v) => v.path === pathname);

        //不需要授权的页面
        if(targetRouterConfig && !targetRouterConfig.auth){
            const { component } = targetRouterConfig;
            return (
                <Provider store={store}>
                    <Route exact  path={pathname} component={component} />
                </Provider>
            )
        }

        //需要授权的页面进行登录验证
        if(isLogin){
            if(targetRouterConfig){
                return (
                    <Provider store={store}>
                        <Route path={pathname} component={targetRouterConfig.component} />
                    </Provider>
                )
            }else{
                return (
                    <Redirect to='/404' />
                )
            }
        }else{
            return (
                <Redirect to='/login' />
            )
        }
    }
}