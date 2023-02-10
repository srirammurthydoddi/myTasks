import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails

  return (
    <li className="task-list">
      <div className="task-item">
        <p className="text">{task}</p>
        <button type="button" className="button-text">
          {tag}
        </button>
      </div>
    </li>
  )
}

export default TaskItem
