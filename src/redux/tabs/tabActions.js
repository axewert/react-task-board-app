import { ADD_NEW_TAB, SET_ACTIVE_TAB } from "./tabTypes";
import axios from 'axios'
import { cleanCategory, fetchCategories } from "../categories/categoryActions";


export const setActiveTab = (id) => {
  return ({
    type: SET_ACTIVE_TAB,
    payload: {
      id,
    }
  })
}

export const switchTab = (id) => {
  return dispatch => {
    dispatch(cleanCategory(id))
    dispatch(fetchCategories(id))
    dispatch(setActiveTab(id))
  }
}

const updateState = ({id, title}) => {
  return ({
    type: ADD_NEW_TAB,
    payload: {
      id,
      title
    }
  })
}

export const fetchTabs = () => {
  return dispatch => {
    axios
      .get(`https://react-note-app-5123a-default-rtdb.firebaseio.com/tabs.json`)
      .then(res => {
        if(res.data) {
          Object.keys(res.data).map(id => {
            return dispatch(updateState(
              {
                id, 
                title: res.data[id].title
              }))
          })
        }
      })
  }
}

export const addNewTab = ({title}) => {
  return dispatch => {
    axios
      .post(`https://react-note-app-5123a-default-rtdb.firebaseio.com/tabs.json`, {title})
      .then(res => (
        dispatch(
          updateState(
            {
              id: res.data.name, 
              title
            }
          )
        )
      ))
  }
}



