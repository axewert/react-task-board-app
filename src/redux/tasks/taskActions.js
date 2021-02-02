import axios from 'axios'

import { ADD_NEW_TASK } from "./taskTypes"



// export const addNewTask = (value, categoryID, activeTab) => {
//   console.log({value, categoryID, activeTab})
//   return {
//     type: ADD_NEW_TASK,
//   }
// }

// export function uploadTasks() {
//   return function(dispatch) {
//     return axios.get("https://api.myjson.com/bins/19dtxc")
//       .then(({ data }) => {
//       dispatch(setArticleDetails(data));
//     });
//   };
// }



export const addNewTask = (value, categoryID, activeTab) => {
  console.log({value, categoryID, activeTab}) 
  const task = {
    ...value
  }
  return dispatch => {
    axios
      .post(`https://react-note-app-5123a-default-rtdb.firebaseio.com/tabs/${activeTab}/categories/${categoryID}/tasks.json`,task)
      .then(res => {dispatch(updateTasks(task, res.data.name))})
  }
}

export const updateTasks = (value, id) => {
  return {
    type: ADD_NEW_TASK,
    payload: {
      value, id
    }
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

