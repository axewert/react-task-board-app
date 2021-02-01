import { ADD_NEW_TASK } from "./taskTypes"



const initialState = {
  'des': {
    'id': {
      title:'lorem12',
      body: '12344',
      date: ''
    }
  },
  'todo': {
    'id': {
      title:'3214324234234',
      body: '12344',
      date: ''
    }
  }
}

const taskReducer = (state = initialState, action) => {
  const data = action.payload
  switch(action.type) {
    
    case ADD_NEW_TASK: 
      return {
        ...state,
        [data.categoryID]: {
          ...state[data.categoryID],
          [data.taskId]: {
            ...data.value
          }
        }
      }

    default: 
      return state
  }
}

export default taskReducer