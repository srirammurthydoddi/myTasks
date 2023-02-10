import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {taskInput} = taskDetails

  return (
    <li className="task-list">
      <div className="task-item">
        <p className="text">{taskInput}</p>
      </div>
    </li>
  )
}

export default TaskItem
