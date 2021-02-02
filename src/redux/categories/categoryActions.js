import axios from 'axios'

import { ADD_NEW_CATEGORY, NO_CATEGORIES, CLEAN_CATEGORY } from "../categories/categoryTypes"

const noCategories = () => {
  return {
    type: NO_CATEGORIES
  }
}

export const cleanCategory = (id) => {
  return {
    type: CLEAN_CATEGORY,
    payload: {
      id
    }
  }
}

export const updateCategories = ({id, title}) => {
  return {
    type: ADD_NEW_CATEGORY,
    payload: {
      id,
      title
    }
  }
}

export const fetchCategories = (activeTab) => {
  return dispatch => {
    axios
      .get(`https://react-note-app-5123a-default-rtdb.firebaseio.com/tabs/${activeTab}/categories.json`)
      .then(res => {
        if(res.data) {
          Object.keys(res.data).map(id => {
            return dispatch(updateCategories(
              {
                id, 
                title: res.data[id].title
              }))
          })
        } else {
          dispatch(noCategories())
        }
      })
  }
}

export const addNewCategory = (value, activeTab) => {
  const {title} = value
  return dispatch => {
    axios
      .post(`https://react-note-app-5123a-default-rtdb.firebaseio.com/tabs/${activeTab}/categories.json`, {title})
      .then(res => (
        dispatch(
          updateCategories(
            {
              id: res.data.name, 
              title
            }
          )
        )
      ))
  }
}