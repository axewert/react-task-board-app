import { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { showForm, showTabForm } from '../redux/form/formActions'
import { addNewTab, fetchTabs, setActiveTab } from '../redux/tabs/tabActions'
import Form from './Form'

const Tabs = ({items, maxAmount, showTabForm, fetchTabs, setActiveTab}) => {
  useEffect(() => {
    fetchTabs()
  }, [])
  const renderBtn = () => {
    if(Object.keys(items).length < maxAmount) {
      return (
        <div className="container d-flex justify-content-center pt-3">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={showTabForm}
          >Добавить вкладку</button>
        </div>
      )
    }
  }

  const renderTab = (id, tab) => {
    console.log(tab)
    return (
      <li className="nav-item mx-1" key={id}>
        <a 
          className={tab.isActive? 'nav-link active': 'nav-link'} 
          aria-current="page" 
          href="#"
          id={id}
          onClick={() => setActiveTab(id)}
          >{tab.title}</a>
      </li>
    )
  }
  
  return (
    <>
      <Form />
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
  ...state.tabs,
})

const mapDispatchToProps = {
  fetchTabs , showTabForm , 
  setActiveTab
}

export default connect(mapStatetoProps, mapDispatchToProps)(Tabs)