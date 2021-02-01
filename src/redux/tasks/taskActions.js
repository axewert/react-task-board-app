import { ADD_NEW_TASK } from "./taskTypes"

export const addNewTask = (value, categoryID) => {
  return {
    type: ADD_NEW_TASK,
    payload: {
      value, categoryID,
      taskId: Date.now().toString()
    }
  }
}