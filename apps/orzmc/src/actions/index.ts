import * as types from './types'

const addTodo = (text: string) => ({
  text,
  type: types.ADD_TODO
})

const deleteTodo = (id: number) => ({
  id,
  type: types.DELETE_TODO
})

const toggleTodo = (id: number) => ({
  id,
  type: types.TOGGLE_TODO
})

const setVisibilityFilter = (filter: types.VisibilityFilters) => ({
  filter,
  type: types.SET_VISIBILITY_FILTER
})

export { addTodo, deleteTodo, toggleTodo, setVisibilityFilter }
