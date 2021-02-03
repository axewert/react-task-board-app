import {connect} from 'react-redux'
import './App.scss'



function App({currentTabs, tabs}) {

  return (
    <>
      <h2>app</h2>
      <div className="container nav-container">
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" defaultChecked />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>
          <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
        </div>
        <div className="container nav-input">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary nav-btn" type="button" id="button-addon2">Button</button>
          </div>

        </div>

      </div>
      
      <div className="container-fluid tasks-container pt-5">
        <div className="container tasks-group">
          <div className="container tasks-group-title">
            <h2>Group 1</h2>
            <span className="material-icons">create</span>
          </div>
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
            <li className="list-group-item">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="container new-task-btns d-flex">
                <button type="button" className="btn btn-primary">Готово</button>
                <button type="button" className="btn btn-danger">Отмена</button>
              </div>

            </li>
          </ul>
        </div>
      </div>
    </>
  )
}


export default connect(null, null)(App);
