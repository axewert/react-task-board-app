import {connect} from 'react-redux'
import Tab from './Tab';
import './App.scss'
import Category from './Category';
import Form from './Form';



function App({currentTabs, tabs}) {

  const tabsItem = currentTabs.map(id => <Tab id={id}/>)
  
  const categoryItem = tabs[tabs.active].categories.map(id => <Category id={id}></Category>)
  
  const placeholder = <h2>no tasks</h2>

  return (
    <>
      <div className="container tabs">
        <ul className="nav nav-pills">
          {tabsItem.length ? tabsItem : tabs.placeholder}
        </ul>
        <button type="button" className="btn btn-primary position-absolute end-0 mx-3">Primary</button>
      </div>
      <div className="container-fluid d-flex categories p-5">
        {categoryItem.length ? categoryItem : placeholder}
      </div>
      <Form />
    </>
  )
}

const mapStateToProps = state => ({
  currentTabs: state.currentTabs,
  tabs: state.tabs
})

export default connect(mapStateToProps, null)(App);
