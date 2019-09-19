//reducer定义规则
import { combineReducers } from 'redux'
import userinfo from './userinfo'

const rootReducer = combineReducers({
    userinfo
})

export default rootReducer