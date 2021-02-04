import {connect} from 'react-redux'
import './App.scss'



function App({currentTabs, tabs}) {

  return (
    <>
      <div className="nav-tabs-navigation">
        <span className="material-icons nav-arrow nav-arrow_backward">arrow_forward_ios</span>
        <div className="nav-tabs-container">
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-0"/>
            <label htmlFor="tab-radio-0">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item">
            <input type="radio" name="tab-radio" id="tab-radio-1"/>
            <label htmlFor="tab-radio-1">tab #1</label>
          </div>
          <div className="nav-tabs-item new-tab-input">
            <div className="input-container input-container-round input-container-active">
              <input type="text" className="input" placeholder="add new tab"/>
              <button className="btn btn-round-circle btn-accept"><span className="material-icons btn-icon accept-icon">done</span></button>
            </div>
          </div>
        </div>
        <span className=" nav-arrow material-icons">arrow_forward_ios</span>
      </div>
    </>
      
  )
}


export default connect(null, null)(App);
