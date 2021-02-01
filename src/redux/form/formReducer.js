import {HIDE_FORM, SHOW_FORM, SHOW_TAB_FORM, SHOW_CATEGORY_FORM} from './formTypes'

const initialState = {
  formHidden: true,
  formSimple: true,
  inputName: '',
  inputTitle:'',
  textAreaName: '',
  textAreaTitle:'',
  type: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        formHidden: false
      }

    case HIDE_FORM: 
      return {
        ...state,
        formHidden: true
      }
    
    case SHOW_TAB_FORM:
      return {
        ...state,
        formHidden: false,
        inputName: 'title',
        inputTitle: 'название вкладки',
        type: {
          NEW_TAB: 'NEW_TAB'
        }
      }

    case SHOW_CATEGORY_FORM:
      return {
        ...state,
        formHidden: false,
        inputName: 'categoryTitle',
        inputTitle: 'название категории',
        type: {
          NEW_CATEGORY: 'NEW_CATEGORY'
        }
      }

    
    default:
      return state
  }
}

export default formReducer