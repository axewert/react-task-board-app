import { ADD_NEW_TAB, SET_ACTIVE_TAB } from "./tabTypes"

const initialState = {
  items: {
  },
  maxAmount: 4,
  active: ''
}

const tabReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_TAB:
      return {
        ...state,
        active: action.payload.id,
        items: {
          ...state.items,
          [action.payload.id]: {
            title: action.payload.title,
          },
        }
      }
    case SET_ACTIVE_TAB:
      const current = action.payload.id
      return {
        ...state,
        active: current,
      } 
    default:
      return state
  }
}

export default tabReducer