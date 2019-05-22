import * as React from 'react'
import * as classnames from 'classnames'
import { IUser } from '../../interfaces/user'
import { IHobby } from '../../interfaces/hobby'
import * as styles from './user-hobbies-list.scss'

export interface UserHobbiesListProps {
  user: IUser
  hobbies: IHobby[]
  removeHobby({user, hobby}: {user: IUser, hobby: IHobby}): void
}

interface NoHobbiesPlaceholderProps {
  user: IUser
}

const NoHobbiesPlaceholder = ({user}: NoHobbiesPlaceholderProps) =>
  <span>{`${user.name} has no specified his hobbies yet. Press add button above to add first hobby!`}</span>

export const UserHobbiesList = ({user, hobbies, removeHobby}: UserHobbiesListProps) => {
  const tryRemoveHobby = (hobby: IHobby) => {
    if (confirm(`Are you sure you want to delete ${user.name}'s hobby ${hobby.name}`)) {
      removeHobby({user, hobby})
    }
  }

  if (!hobbies.length) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
        <NoHobbiesPlaceholder user={user}/>
      </div>
    )
  }

  return (<div className={styles.container}>
    {
      hobbies.map(hobby => (
        <div key={`${hobby.name}-${hobby.level}`} className={styles.item}>
          <span className={styles.level}>{hobby.level}</span>
          <span className={styles.name}>{hobby.name}</span>
          <span className={styles.date}>{hobby.date}</span>
          <button className={styles.deleteBtn} onClick={() => tryRemoveHobby(hobby)}>remove</button>
        </div>
      ))
    }
  </div>)
}