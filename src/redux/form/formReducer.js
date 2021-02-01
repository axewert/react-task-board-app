import {
  HIDE_FORM, 
  SHOW_TAB_FORM, 
  SHOW_CATEGORY_FORM,
  SHOW_TASK_FORM
} from './formTypes'

const initialState = {
  formHidden: true,
  formSimple: true,
  inputTitle:'',
  textAreaTitle:'',
  type: '',
  categoryID: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_FORM: 
      return {
        ...state,
        formHidden: true
      }
    
    case SHOW_TAB_FORM:
      return {
        ...state,
        formHidden: false,
        inputTitle: 'название вкладки',
        type: {
          NEW_TAB: 'NEW_TAB'
        }
      }

    case SHOW_CATEGORY_FORM:
      return {
        ...state,
        formHidden: false,
        inputTitle: 'название категории',
        type: {
          NEW_CATEGORY: 'NEW_CATEGORY'
        }
      }
    case SHOW_TASK_FORM:
      return {
        ...state,
        formHidden: false,
        formSimple: false,
        inputTitle: 'название задачи',
        type: {
          NEW_TASK: 'NEW_TASK'
        },
        categoryID: action.payload.categoryID
      }

    
    default:
      return state
  }
}

export default formReducer