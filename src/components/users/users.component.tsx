import * as React from 'react'
import { UsersList } from '../users-list'
import { IUser } from '../../interfaces/user'
import * as styles from './users.scss'

export interface UsersProps {
  isLoading: boolean
  users: IUser[]
  selectedUserId: string
  loadUsers(): void
  addUser(name: string): void
  selectUser(id: string): void
}

export const Users = ({
  users,
  loadUsers,
  isLoading,
  addUser,
  selectUser,
  selectedUserId,
}: UsersProps) => {
  const [newUserName, setNewUserName] = React.useState('')
  const onAddUser = () => {
    addUser(newUserName)
    setNewUserName('')
  }

  React.useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='Enter user name'
          value={newUserName}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setNewUserName(value)}
          className={styles.inputContainerField}
        />
        <button onClick={onAddUser}>Add</button>
      </div>
      <UsersList
        users={users}
        selectedUserId={selectedUserId}
        isLoading={isLoading}
        selectUser={selectUser}
      />
    </div>
  )
}