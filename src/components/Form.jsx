import {useState} from 'react'
import { connect } from 'react-redux'
import { addNewCategory } from '../redux/categories/categoryActions'
import { hideForm } from '../redux/form/formActions'
import { addNewTab } from '../redux/tabs/tabActions'

const Form = ({state, addNewTab, addNewCategory, hideForm}) => {

  const {
    formHidden,
    formSimple,
    inputTitle,
    textAreaName,
    textAreaTitle,
    type, 
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
    console.log(value)
  }
 

  const handleHideForm = () => {
    setValue(inititalValue)
    hideForm()
  }

  const handleSubmit = () => {
    if(type.NEW_TAB && value) {
      addNewTab(value)
      handleHideForm()
    } else if(type.NEW_CATEGORY && value) {
      addNewCategory(value)
      handleHideForm()
    }
  }

  const renderTextArea = () => {
    return (
      <div className="mb-3">
        <label className="form-label">{textAreaTitle}</label>
        <textarea 
          className="form-control" 
          rows={3} 
          defaultValue={`Введите ${textAreaTitle}`} 
          name={textAreaName}
          value={value.body}
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
            <label className="form-label">{inputTitle}</label>
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
  state: state.form
})

const mapDispatchToProps = {
  hideForm, 
  addNewTab,
  addNewCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)