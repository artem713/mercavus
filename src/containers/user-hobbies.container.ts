import { connect } from 'react-redux'
import { AppState } from '../reducers'
import { ACTIONS } from '../actions/users'
import { getSelectedUser, getSelectedUserHobbies } from '../reducers/users'
import { UserHobbies } from '../components/user-hobbies'

const mapStateToProps = ({users}: AppState) => ({
  user: getSelectedUser(users),
  hobbies: getSelectedUserHobbies(users),
})

const mapDispatchToProps = {
  addHobby: ACTIONS.addHobby,
  removeHobby: ACTIONS.removeHobby,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHobbies as any)
