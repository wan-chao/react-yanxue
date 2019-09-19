import * as actionTypes from '../constants/actionTypes';

const initialState = {
    isLogin:localStorage.getItem('__config_center_token')?true:false,
}

export default function userinfo (state = initialState ,action) {
    switch (action.type) {
        //登录
        case actionTypes.USERINFO_LOGIN:
            return Object.assign({}, state, {
                isLogin: action.data
            })
        case actionTypes.USERINFO_SET:
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}