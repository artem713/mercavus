import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './users-list.scss'
import { IUser } from '../../interfaces/user'
import { ILoadable } from '../../interfaces/common'
import { UserListItem } from '../user-list-item'

export interface UsersListBaseProps {
  users: IUser[]
  selectedUserId: string
  selectUser(id: string): void
}

export interface UsersListProps extends UsersListBaseProps, ILoadable {
}

export const UsersList = ({
  isLoading,
  users,
  selectedUserId,
  selectUser,
}: UsersListProps) => {
  if (isLoading) {
    return (
      <div className={classnames(styles.container, styles.containerLoading)}>
        <span>loading users...</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {
        users.map(user => 
          <UserListItem
            key={`${user.id}-${user.name}`}
            user={user}
            isSelected={user.id === selectedUserId}
            selectUser={selectUser}
          />
        )
      }
    </div>
  )
}
