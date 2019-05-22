import * as React from 'react'
import { IUser } from '../../interfaces/user'
import * as styles from './users-list-item.scss'
import * as classnames from 'classnames'

export interface UserListItemProps {
  user: IUser
  isSelected: boolean;
  selectUser(id: string): void
}

export const UserListItem = ({user, isSelected, selectUser}: UserListItemProps) => (
  <div
    className={classnames({
      [styles.container]: true,
      [styles.selected]: isSelected
    })}
    onClick={() => selectUser(user.id)}
  >
    {user.name}
  </div>
)
