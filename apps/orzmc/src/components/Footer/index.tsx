import React, { Component } from 'react'

import FilterLink from 'components/FilterLink'
import { VisibilityFilters } from 'actions/types'

class Footer extends Component {
  render() {
    return (
      <footer className="todo-footer">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </footer>
    )
  }
}

export default Footer
