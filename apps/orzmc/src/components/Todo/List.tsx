import React, { Component } from 'react'

import { Todo } from 'reducers/todos'
import TodoItem from 'components/Todo/Item'

interface TodoListProps {
  todos: Todo[]
}

class TodoList extends Component<TodoListProps, {}> {
  render() {
    const { todos } = this.props

    return (
      <ul className="todo-list">
        {// tslint:disable-next-line: jsx-no-multiline-js
        todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    )
  }
}

export default TodoList
