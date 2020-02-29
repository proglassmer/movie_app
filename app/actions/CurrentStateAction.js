import types from '../types'
import Storage from '../../lib/Storage'

export const getCurrentState = () => {
	const current = Storage.getSession('current_state')
	return (dispatch) => {
		dispatch({ type: types.GET_CURRENT_STATE_SUCCESS, payload: current })
	}
}

export const updateCurrentState = (current) => {
	Storage.setSession('current_state', current)
	return (dispatch) => {
		dispatch({ type: types.ADD_CURRENT_STATE_SUCCESS, payload: current })
	}
}

export const remomveCurrentState = (current) => {
	Storage.deleteSession('current_state', current)
	return (dispatch) => {
		dispatch({ type: types.REMOVE_CURRENT_STATE_SUCCESS, payload: current })
	}
}