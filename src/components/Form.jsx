import {useState} from 'react'
import { connect } from 'react-redux'
import { hideForm } from '../redux/form/formActions'

const Form = ({formSimple, formHidden, hideForm}) => {
  const [value, setValue] = useState('')

  // const handleChange = evt => {
  //   setValue(prev => ({...prev, ...{
  //     [evt.target.name]: evt.target.value
  //   }}))
  // }

  // const handleSubmit = () => {
  //   if(value) {
  //     submitHandler(value)
  //   }
  //   setValue('')
  // }

  const renderTextArea = () => {
    return (
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea className="form-control" rows={3} defaultValue={""} />
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
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" placeholder="name@example.com" />
          </div>

          {!formSimple && renderTextArea()}

          <div className="container d-flex justify-content-between">
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-danger" onClick={hideForm}>Danger</button>
          </div>

        </div>
        <div 
          className="input-backdrop bg-dark w-100 h-100"
          style={{zIndex: 2000, opacity: .75}}
          data-testid="input-backdrop"
        />
      </div> 
    </>
  )
}

const mapStateToProps = state => ({
  ...state.form
})

const mapDispatchToProps = {
  hideForm
}

export default connect(mapStateToProps)(Form)