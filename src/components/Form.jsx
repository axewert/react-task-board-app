import {useState} from 'react'
import { connect } from 'react-redux'
import { addNewCategory } from '../redux/categories/categoryActions'
import { hideForm } from '../redux/form/formActions'
import { addNewTab } from '../redux/tabs/tabActions'
import { addNewTask } from '../redux/tasks/taskActions'

const Form = ({state, addNewTab, addNewCategory, hideForm, activeTab, addNewTask}) => {
  const {
    formHidden,
    formSimple,
    inputTitle,
    textAreaTitle,
    type, 
    categoryID
  } = state
  
  const inititalValue = {
    title:'',
    body:''
  }

  const [value, setValue] = useState(inititalValue)
  

  const handleChange = (evt) => {
    setValue(prev => ({...prev, ...{
      [evt.target.name]: evt.target.value
    }}))
  }
 

  const handleHideForm = () => {
    setValue(inititalValue)
    hideForm()
  }

  const trimValue = () => {
    Object.keys(value).map(id => {
        value[id].trim()
        setValue({id: value[id]})
    })
  }

  const handleSubmit = () => {
    if(!value) return null
    
    trimValue()

    if(type.NEW_TAB) {
      addNewTab(value)
      handleHideForm()
    } else if(type.NEW_CATEGORY) {
      addNewCategory(value, activeTab)
      handleHideForm()
    } else if(type.NEW_TASK) {
      addNewTask(value, categoryID, activeTab)
      handleHideForm()
    }
  }

  const capitalize = (text) => {
    const letter = text.charAt(0).toUpperCase()
    return letter + text.slice(1)
  }

  const renderTextArea = () => {
    return (
      <div className="mb-3">
        <label className="form-label">{capitalize(textAreaTitle)}</label>
        <textarea 
          className="form-control" 
          rows={3} 
          name='body'
          value={value.body}
          onChange={(e) => handleChange(e)}
          placeholder={`Введите ${textAreaTitle}`}
        />
      </div>
    )
  }

  return (
    <>
      <div 
        className={`container-fluid d-flex justify-content-center align-items-center top-0 start-0 position-absolute w-100 h-100 p-0 ${formHidden?'invisible':'visible'}`}
        data-testid="input-container"
        style={{zIndex: 1080}}
      >
 
        <div className="container w-50 bg-white position-absolute p-3 rounded" style={{zIndex: 3000}}>

          <div className="mb-3">
            <label className="form-label">{capitalize(inputTitle)}</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder={`Введите ${inputTitle}`}
              name='title'
              onChange={(e) => handleChange(e)}
              value={value.title}
            />
          </div>

          {!formSimple && renderTextArea()}

          <div className="container d-flex justify-content-between">
            <button type="button" className="btn btn-success" onClick={() => handleSubmit()}>Success</button>
            <button type="button" className="btn btn-danger" onClick={handleHideForm}>Danger</button>
          </div>

        </div>
        <div 
          className="input-backdrop bg-dark w-100 h-100"
          style={{zIndex: 2000, opacity: .75}}
          data-testid="input-backdrop"
          onClick={handleHideForm}
        />
      </div> 
    </>
  )
}

const mapStateToProps = state => ({
  state: state.form,
  activeTab: state.tabs.active
})

const mapDispatchToProps = {
  hideForm, 
  addNewTab,
  addNewCategory,
  addNewTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)