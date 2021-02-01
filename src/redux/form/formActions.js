import {
  HIDE_FORM, 
  SHOW_TAB_FORM, 
  SHOW_CATEGORY_FORM,
  SHOW_TASK_FORM

} from './formTypes'

export const hideForm = () => {
  return {
    type: HIDE_FORM
  }
}


export const showTabForm = () => {
  return {
    type: SHOW_TAB_FORM,
  }
}

export const showCategoryForm = () => {
  return {
    type: SHOW_CATEGORY_FORM
  }
}

export const showTaskForm = (categoryID) => {
  return {
    type: SHOW_TASK_FORM,
    payload: {
      categoryID
    }
  }
}