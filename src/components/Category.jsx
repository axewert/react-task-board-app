import { connect } from "react-redux";

const Category = ({id, categories, tasks}) => {
  const tasksItem = categories[id].tasks.map(id => <li className="list-group-item">{tasks[id].title}</li> )
  const placeholder = <h2>no tasks</h2>
  
  return (
    <div className="container category">
      <h2>{categories[id].title}</h2>
      <ul className="list-group">
        {tasksItem.length ? tasksItem : placeholder}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.categories,
  tasks: state.tasks
})

export default connect(mapStateToProps, null)(Category);