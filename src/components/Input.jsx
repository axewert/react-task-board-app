import {useState} from 'react'

const Input = ({submitHandler}) => {
  const [value, setValue] = useState('')

  const handleChange = evt => {
    setValue(prev => ({...prev, ...{
      [evt.target.name]: evt.target.value
    }}))
  }

  const handleSubmit = () => {
    if(value) {
      submitHandler(value)
    }
    setValue('')
  }

  return (
    <div className="container position-absolute w-25 p-3 top-50 start-50 translate-middle">
      <div className="input-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Введите название вкладки" 
          aria-describedby="button-addon2"
          name="tabTitle"
          onChange={(e) => handleChange(e)}

        />
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          onClick={handleSubmit}
        >Готово</button>
      </div>
    </div>
  )
}

export default Input