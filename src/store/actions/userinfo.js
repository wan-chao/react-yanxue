import * as actionTypes from '../constants/actionTypes';

export function login(data) {
    return {
        type:actionTypes.USERINFO_LOGIN,
        data
    }
}

export function userData(data) {
    return {
        type:actionTypes.USERINFO_SET,
        data
    }
}