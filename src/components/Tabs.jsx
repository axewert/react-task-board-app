import './Tabs.scss'

import { connect } from "react-redux"
import { toggleTabs } from '../redux/rootActions'

const Tabs = ({tabs, toggleTabs}) => {
  const {current, active} = tabs
  console.log(toggleTabs)
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

  return (
    <div className="container tabs-container">
      <ul className="nav nav-pills">
        {current.map(id => {
          return renderTab(tabs[id], id)
        })}
      </ul>
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