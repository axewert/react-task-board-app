import { ADD_NEW_TASK } from "./taskTypes"



const initialState = {
  items: {}
}

const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_TASK:
      console.log(action.payload) 
      return {
        ...state,
        items:{
          ...state.items,
          [action.payload.id]: {
            ...action.payload.value,
            id: action.payload.id
          }
        }
      }

    default: 
      return state
  }
}

export default taskReducer