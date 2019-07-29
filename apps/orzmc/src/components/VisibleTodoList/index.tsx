import { RootState } from 'reducers'
import { Todo } from 'reducers/todos'
import TodoList from 'components/Todo/List'
import { VisibilityFilters } from 'actions/types'
import { connect } from 'react-redux'

function getVisibleTodos(todos: Todo[], filter: VisibilityFilters) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

export default connect(
  mapStateToProps,
  null
)(TodoList)
