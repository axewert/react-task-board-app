import './Tabs.scss'

import { connect } from "react-redux"
import { toggleTabs } from '../redux/rootActions'

const Tabs = ({tabs, toggleTabs}) => {
  const {
    current, 
    active, 
    placeholder,
    maxTabs,
    newTabText
  } = tabs

  const handleToggle = (evt) => {
    toggleTabs(evt.target.id)
  }

  const renderTab = (tab, id) => {
    return (
      <li className="nav-item" key={id}>
        <a 
          className={`nav-link${id === active ? ' active' : ''}`} 
          onClick={(e) => handleToggle(e)}
          id={id}

        >{tab.title}</a>
      </li>
    )
  }

  const renderButton = () => {
    if(current < maxTabs) {
      return <button type="button" className="btn btn-primary new-tab-btn">{newTabText}</button>
    }
  }

  return (
    <div className="container tabs-container">
      {!current.length && <h3 className="placeholer">{placeholder}</h3>}
      <ul className="nav nav-pills">
        {current.map(id => {
          return renderTab(tabs[id], id)
        })}
      </ul>
      {renderButton()}
    </div>
  )
}

const mapStateToProps = state => ({
  tabs: state.tabs
})

const mapDispatchToProps = {
  toggleTabs
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)