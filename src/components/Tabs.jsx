import { useState } from 'react'
import {connect} from 'react-redux'
import { addNewTab } from '../redux/tabs/tabActions'
import Input from './Input'

const Tabs = ({items, maxAmount, addNewTab}) => {
  const [isInputOpen, setIsInputOpen] = useState(false)

  const switchInput = () => {
    setIsInputOpen(!isInputOpen)
  }
  
  const handleSubmitTab = (tabTitle) => {
    addNewTab(tabTitle)
    switchInput()
  }

  const renderBtn = () => {
    if(Object.keys(items).length < maxAmount) {
      return (
        <div className="container d-flex justify-content-center pt-3">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={switchInput}
          >Добавить вкладку</button>
        </div>
      )
    }
  }

  const renderTab = (id, tab) => {
    return (
      <li className="nav-item mx-1">
        <a 
          className="nav-link active" 
          aria-current="page" 
          href="#" 
          id={id}
          key={id}
          >{tab.title}</a>
      </li>
    )
  }
  
  return (
    <>
      {isInputOpen && <Input submitHandler={handleSubmitTab}/>}
      <ul className="nav nav-pills justify-content-center pt-5">
          {Object.keys(items).map(id => {
            return renderTab(id, items[id])
          })}
      </ul>
      {renderBtn()}
    </>
  )
}

const mapStatetoProps = state => ({
  ...state.tabs
})

const mapDispatchToProps = {
  addNewTab
}

export default connect(mapStatetoProps, mapDispatchToProps)(Tabs)