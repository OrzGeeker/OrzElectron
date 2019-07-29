import todos, { Todo } from './todos'

import { VisibilityFilters } from 'actions/types'
import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'

export interface RootState {
  todos: Todo[]
  visibilityFilter: VisibilityFilters
}

export default combineReducers({
  todos,
  visibilityFilter
})
