import { ADD_NEW_CATEGORY } from "./categoryTypes"

const initialState = {
  maxAmount: 5,
  items: {
    '0': {title: 'to-do'}
  }
}

const categoryReducer  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_CATEGORY: 
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            title: action.payload.title
          }
        }
      }
    default:
      return state
  }
}

export default categoryReducer