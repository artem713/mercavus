import * as React from 'react'
import { IUser } from '../../interfaces/user'
import { IHobby, PassionLevel } from '../../interfaces/hobby'
import * as classnames from 'classnames'
import * as styles from './user-hobbies.scss'
import { UserHobbiesList } from '../user-hobbies-list'

export interface UserHobbiesProps {
  user: IUser
  hobbies: IHobby[]
  addHobby({user, hobby}: {user: IUser, hobby: IHobby}): void
  removeHobby({user, hobby}: {user: IUser, hobby: IHobby}): void
}

const NoUserSelectedPlaceholder = () =>
  <span>Select a user from the users list...</span>

export const UserHobbies = ({user, hobbies, addHobby, removeHobby}: UserHobbiesProps) => {
  const [level, setLevel] = React.useState(PassionLevel.Low)
  const [hobby, setHobby] = React.useState('')
  const [year, setYear] = React.useState('')
  const tryAddHobby = () => {
    if (hobbies.find(h => h.name.toLowerCase() === hobby.trim().toLowerCase())) {
      alert(`The hobby "${hobby}" already exists in the hobbies list`)
      return
    }

    addHobby({user, hobby: {name: hobby, level, date: year}})
  }

  if (!user) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
        <NoUserSelectedPlaceholder/>
      </div>
    )
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <select value={level} onChange={({target: {value}}) => setLevel(value as PassionLevel)}>
          {Object.values(PassionLevel).map(lvl =>
            <option key={lvl} value={lvl}>{lvl}</option>
          )}
        </select>
        <input
          type='text'
          value={hobby}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setHobby(value)}
          placeholder='Enter user hobby'
        />
        <input
          type='text'
          value={year}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setYear(value)}
          placeholder='Enter year'
        />
        <button onClick={tryAddHobby}>Add</button>
      </div>
      <UserHobbiesList
        user={user}
        hobbies={hobbies}
        removeHobby={removeHobby}
      />
    </div>
  )
}