import React, { Component } from 'react'

import { Dispatch } from 'redux'
import { addTodo } from 'actions'
import { connect } from 'react-redux'

interface TodoInputProps {
  handleAddTodo: (text: string) => void
}

interface TodoInputState {
  value: string
}

class TodoInput extends Component<TodoInputProps, TodoInputState> {
  constructor(props: TodoInputProps) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleAddTodoWrapper = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.handleAddTodo(this.state.value)
      this.setState({ value: '' })
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <section className="todo-input">
        <input
          className="new"
          type="text"
          placeholder="I will do ..."
          value={this.state.value}
          onKeyPress={this.handleAddTodoWrapper}
          onChange={this.handleInputChange}
        />
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleAddTodo: (text: string) => dispatch(addTodo(text))
})

export default connect(
  null,
  mapDispatchToProps
)(TodoInput)
