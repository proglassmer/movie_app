
import types from '../types'

const initState = {
	current_state: ''
}

const current_state = (state = initState, action = {}) => {
	switch(action.type) {
		case types.ADD_CURRENT_STATE_SUCCESS:
      return { ...state, current_state: action.payload }
    case types.REMOVE_CURRENT_STATE_SUCCESS:
      return { ...state, current_state: action.payload }
    case types.GET_CURRENT_STATE_SUCCESS:
      return { ...state, current_state: action.payload }
		default:
			return state
	}
}

export default current_state