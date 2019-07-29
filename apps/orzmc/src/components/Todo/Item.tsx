import React, { Component } from 'react'
import { deleteTodo, toggleTodo } from 'actions'

import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface TodoItemProps {
  id: number
  completed: boolean
  text: string
  handleToggleTodo: (id: number) => void
  handleDeleteTodo: (id: number) => void
}

class TodoItem extends Component<TodoItemProps> {
  handleToggleTodoWrapper = (id: number) => () =>
    this.props.handleToggleTodo(id)

  handleDeleteTodoWrapper = (id: number) => () =>
    this.props.handleDeleteTodo(id)

  render() {
    const { id, text, completed } = this.props

    return (
      <li>
        <input
          className={completed ? 'todo-mark-completed' : ''}
          id={`todo-mark-${id}`}
          type="checkbox"
          onClick={this.handleToggleTodoWrapper(id)}
        />
        <label
          className={completed ? 'todo-label-completed' : ''}
          htmlFor={`todo-mark-${id}`}
        >
          {text}
        </label>
        <span onClick={this.handleDeleteTodoWrapper(id)}>✘</span>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleDeleteTodo: (id: number) => dispatch(deleteTodo(id)),
  handleToggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
  null,
  mapDispatchToProps
)(TodoItem)
