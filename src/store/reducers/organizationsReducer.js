/* eslint-disable import/no-anonymous-default-export */
import * as actions from '../actions/actionTypes'

const initialState = {
    error: null,
    loading: false,
    organizations: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case actions.ORGANIZATION_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actions.ORGANIZATION_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false
            }
        case actions.ORGANIZATION_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case actions.ORGANIZATION_FINISH:
            return {
                ...state,
                loading: false
            }
        case actions.ORGANIZATION_GET_ALL:
            return {
                ...state,
                organizations : action.payload
            }
        default:
            return state
    }

}