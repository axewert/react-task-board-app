import { ADD_NEW_CATEGORY } from "../categories/categoryTypes"

export const addNewCategory = () => {
  return {
    type: ADD_NEW_CATEGORY,
    payload: {
      id: Date.now().toString(),
      title: 'design'
    }
  }
}