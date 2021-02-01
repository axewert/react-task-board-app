import { useEffect } from "react"
import { connect } from "react-redux"
import { showTaskForm } from "../redux/form/formActions"
import { fetchTasks } from "../redux/tasks/taskActions"

const Category = ({title, showTaskForm, categoryID, allTasks, fetchTasks}) => {
  useEffect(() => {
    fetchTasks(categoryID)
  },[])
  
  const getTasks = () => {
    const tasks = allTasks[categoryID]
    return Object.keys(tasks).map(id => {
      return tasks[id]
    }) 
  }
  

  const tasks = allTasks[categoryID] ? getTasks() : null

  return (
    <>
      <div className="container w-25" id={categoryID}>
        <h2>{title}</h2>
        <ul className="list-group">
          {tasks && tasks.map(task => {
            return <li className="list-group-item">{task.title}</li>
          })}
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => showTaskForm(categoryID)}
          >ADD NEW TASK</button>
        </ul>
      </div>
    </>
  )
}


const mapDispatchToProps = {
  showTaskForm,
  fetchTasks
}

const mapStateToProps = (state) => ({
  allTasks: state.tasks
})


export default connect(mapStateToProps, mapDispatchToProps)(Category)