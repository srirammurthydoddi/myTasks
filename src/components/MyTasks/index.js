import {Component} from 'react'

import {v4} from 'uuid'

import TaskItem from '../TaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskInput: '',
    activeTagId: tagsList[0].optionId,
    tasksList: [],
  }

  onAddTask = event => {
    event.preventDefault()
    const {taskInput, activeTagId} = this.state

    const newTask = {
      id: v4(),
      task: taskInput,
      tag: activeTagId,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskInput: '',
      activeTagId: '',
    }))
  }

  onChangeTaskInput = event => {
    this.setState({
      taskInput: event.target.value,
    })
  }

  onChangeTagInput = event => {
    this.setState({activeTagId: event.target.value})
  }

  render() {
    const {taskInput, activeTagId, tasksList} = this.state
    return (
      <div className="app-container">
        <div className="task-container">
          <form className="form" onSubmit={this.onAddTask}>
            <h1 className="heading">Create a task!</h1>
            <label htmlFor="task" className="label">
              Task
            </label>
            <input
              type="text"
              id="task"
              className="input-text"
              placeholder="Enter the task here"
              value={taskInput}
              onChange={this.onChangeTaskInput}
            />
            <label htmlFor="task" className="label">
              Tags
            </label>
            <select
              className="tag-select"
              onChange={this.onChangeTagInput}
              value={activeTagId}
            >
              {tagsList.map(eachTag => (
                <option
                  key={eachTag.optionId}
                  value={eachTag.optionId}
                  className="option"
                >
                  {eachTag.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-button">
              Add Task
            </button>
          </form>
        </div>
        <div className="tags-container">
          <h1 className="tags-heading">Tags</h1>
          <ul className="tags-list">
            {tagsList.map(eachTag => (
              <button
                type="button"
                className="button"
                key={eachTag.id}
                value={eachTag.id}
              >
                {eachTag.displayText}
              </button>
            ))}
          </ul>
          <h1 className="tasks-heading">Tasks</h1>
          <ul className="tasks-list">
            {tasksList.map(eachTask => (
              <TaskItem key={eachTask.id} TaskDetails={eachTask} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyTasks
