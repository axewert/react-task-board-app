import {useState} from 'react'

const Input = ({submitHandler, hidden, toggleVisible}) => {
  const [value, setValue] = useState('')
  const [visiible, setVisible] = useState('invisible')
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
    <>
    <div 
      className={`container-fluid p-0 position-absolute w-100 h-100 ${hidden?'invisible':'visible'}`}
      data-testid="input-container"
    >
      <div 
        className="input-backdrop bg-dark w-100 h-100"
        style={{zIndex: 1000, opacity: .75}}
        onClick={() => toggleVisible()}
      />
      <div className="container rounded position-absolute w-25 p-3 top-50 start-50 translate-middle bg-white" style={{zIndex: 1050}}>
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
    </div>
      
    </>
  )
}

export default Input