import {
  HIDE_FORM, 
  SHOW_TAB_FORM, 
  SHOW_CATEGORY_FORM
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