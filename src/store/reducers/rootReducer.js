import {combineReducers} from 'redux';
import organizationsReducer from './organizationsReducer'

export default combineReducers({
    organizations: organizationsReducer
})