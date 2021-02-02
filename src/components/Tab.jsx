import { connect } from "react-redux";
import { toggleTabs } from "../redux/rootActions";

const Tab = ({id, tabs, toggleTabs}) => {
  
const handleClick = () => {
  toggleTabs(id)
}

  return (
    <li className="nav-item p-3">
      <a 
        className={`nav-link${id === tabs.active ? ' active' : ''}`}
        onClick={() => handleClick()}
      >{tabs[id].title}</a>
    </li>
  )
}


const mapStateToProps = state => ({
  activeTab: state.tabs.active,
  tabs: state.tabs
})

const mapDispatchToProps = {
  toggleTabs
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);