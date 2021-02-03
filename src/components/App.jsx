import {connect} from 'react-redux'
import './App.scss'



function App({currentTabs, tabs}) {

  return (
    <>
    
      
      <div className="tab-container">
        <input type="radio" className="tab-check" name="btnradio" id="btnradio1" autoComplete="off" />
        <label className="tab-item" htmlFor="btnradio1">Radio 1</label>
        
        <div className="input-container new-tab-input">
          <input className='input' type="text" placeholder="Add new Tab"/>
        </div>
       
      </div>

    <div className="group-container">
      <div className="group-item">
        <h3 className="group-item-header">Group1</h3>
        <ul className="tasks-group">
          <li className="task-group-item">Cras justo odio</li>
          <li className="task-group-item">Cras justo odio</li>
          <li className="task-group-item">Cras justo odio</li>
          <li className="task-group-item">Cras justo odio</li>
          <li className="task-group-item">Cras justo odio</li>
          <li className="task-group-item">Cras justo odio</li>
          <li className="task-group-item">Cras justo odio</li>
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
