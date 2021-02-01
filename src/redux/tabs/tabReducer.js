import { ADD_NEW_TAB, SET_ACTIVE_TAB } from "./tabTypes"

const initialState = {
  items: {
  },
  maxAmount: 4,
  prevActiveID: '-MSTCo5SYH-lK5sSiqU2'
}

const tabReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_TAB:

      return {
        ...state,
        prevActiveID: action.payload.id,
        items: {
          ...state.items,
          [action.payload.id]: {
            title: action.payload.title,
          },
        }
      }
    case SET_ACTIVE_TAB:
      const current = action.payload.id
      const prev = state.prevActiveID
      return {
        ...state,
        prevActiveID: current,
        items: {
          ...state.items,
          [current]: {
            ...state.items[current],
            isActive: true
          },
          [prev]: {
            ...state.items[prev],
            isActive: false
          }
        }
      } 
    default:
      return state
  }
}

export default tabReducer