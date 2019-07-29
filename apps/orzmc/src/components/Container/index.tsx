import 'styles/index.scss'

import React, { Component } from 'react'

import Footer from 'components/Footer'
import TodoInput from 'components/Todo/Input'
import VisibleTodoList from 'components/VisibleTodoList'

class Container extends Component {
  render() {
    return (
      <div className="todo-container">
        <header className="todo-header">
          <h1>TODOS</h1>
        </header>
        <TodoInput />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default Container
