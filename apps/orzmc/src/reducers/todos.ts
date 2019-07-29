import * as types from 'actions/types'

import { Reducer } from 'redux'

let nextTodoId = 0

export interface Todo {
  completed: boolean
  id: number
  text: string
}

interface TodoAction {
  id?: number
  text?: string
  type: string
}

const todos: Reducer<Todo[], TodoAction> = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          id: nextTodoId++,
          text: action.text
        } as Todo
      ]
    case types.DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case types.TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? ({ ...todo, completed: !todo.completed } as Todo)
          : todo
      )
    default:
      return state
  }
}

export default todos
