import * as React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Users from '../../containers/users.container'
import UserHobbies from '../../containers/user-hobbies.container'
import * as styles from './app.scss'

export const App = () => (
  <Provider store={store}>
    <div className={styles.container}>
      <Users/>
      <UserHobbies/>
    </div>
  </Provider>
)