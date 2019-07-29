import * as types from 'actions/types'

import { Reducer } from 'redux'

const VisibilityFilters = types.VisibilityFilters

interface VisibilityFilterAction {
  filter: types.VisibilityFilters
  type: string
}

const visibilityFilter: Reducer<
  types.VisibilityFilters,
  VisibilityFilterAction
> = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
