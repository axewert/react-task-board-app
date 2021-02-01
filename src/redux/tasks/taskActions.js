import axios from 'axios'

import { ADD_NEW_TASK } from "./taskTypes"

const url = 'https://react-note-app-5123a-default-rtdb.firebaseio.com'


export const addNewTask = (taskId, task, categoryID) => {
  console.log({taskId, task, categoryID})
  return {
    type: ADD_NEW_TASK,
    payload: {
      task, categoryID,
      taskId
    }
  }
}

// export function uploadTasks() {
//   return function(dispatch) {
//     return axios.get("https://api.myjson.com/bins/19dtxc")
//       .then(({ data }) => {
//       dispatch(setArticleDetails(data));
//     });
//   };
// }

export const uploadTasks = (value, categoryID) => {
  const task = {
    ...value
  }
  return dispatch => {
    axios
      .post(`https://react-note-app-5123a-default-rtdb.firebaseio.com/categories/${categoryID}.json`, task)
      .then(res => addNewTask(res.data, task, categoryID))
  }
}

export const reloadData = (data) => {
  
}

export const fetchTasks = (categoryID) => {
  return dispatch => {
    axios
      .get(`https://react-note-app-5123a-default-rtdb.firebaseio.com/categories/${categoryID}.json`)
      .then(res => reloadData(res))
  }
}

