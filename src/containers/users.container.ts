import { connect } from 'react-redux'
import { AppState } from '../reducers'
import { getUsers, getIsLoading, getSelectedUserId } from '../reducers/users'
import { ACTIONS } from '../actions/users'
import { Users } from '../components/users'

const mapStateToProps = ({users}: AppState) => ({
  isLoading: getIsLoading(users),
  users: getUsers(users),
  selectedUserId: getSelectedUserId(users),
})

const mapDispatchToProps = {
  loadUsers: ACTIONS.fetchItems,
  addUser: ACTIONS.addItem,
  selectUser: ACTIONS.selectUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users as any)
