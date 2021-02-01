import { ADD_NEW_TAB } from "./tabTypes"

const initialState = {
  items: {
  },
  maxAmount: 4,
}

const tabReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_TAB:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            title: action.payload.tabTitle
          }
        }
      }
    default:
      return state
  }
}

export default tabReducer