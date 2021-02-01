import {HIDE_FORM} from './formTypes'

const initialState = {
  formHidden: false,
  formSimple: true
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_FORM: 
      return {
        ...state,
        formHidden: true
      }
    default:
      return state
  }
}

export default formReducer