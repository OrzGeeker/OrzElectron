import { Dispatch } from 'redux'
import Link from 'components/Link'
import { RootState } from 'reducers'
import { VisibilityFilters } from 'actions/types'
import { connect } from 'react-redux'
import { setVisibilityFilter } from 'actions'

interface FilterLinkProps {
  filter: VisibilityFilters
}

const mapStateToProps = (state: RootState, ownProps: FilterLinkProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch, ownProps: FilterLinkProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
