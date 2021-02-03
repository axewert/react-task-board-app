import {connect} from 'react-redux'
import './App.scss'



function App({currentTabs, tabs}) {

  return (
    <>
    <div className="new-tab-form">
      
    </div>
    <div >
      <div className="tab-container">
        <input type="radio" className="tab-check" name="btnradio" id="btnradio1" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio1">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio2" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio2">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio3">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio3">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio3">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio3">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio3">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio3">Radio 1</label>
        <input type="radio" className="tab-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio3">Radio 1</label>
        <div className="new-tab-input">
          <input className='input' type="text" placeholder="Add new Tab"/>
          {/* <button className="btn new-tab-btn tab-item">add new tab</button> */}
        </div>
       
      </div>
    </div>

    <div className="group-container">
      <div className="group-item">
        <h3 className="group-item-header">Group1</h3>
        <ul className="tasks-group">
          <li className="task-group-item">Cras justo odio</li>
        </ul>

        <button className="btn new-task-btn">add new task</button>
      </div>

      <div className="group-item">
        <h3 className="group-item-header">Group1</h3>
        <ul className="tasks-group">
          <li className="task-group-item">Cras justo odio</li>
        </ul>
        
        <button className="btn new-task-btn">add new task</button>
      </div>
      
    </div>

    </>
      
  )
}


export default connect(null, null)(App);
