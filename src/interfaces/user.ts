import { IHobby } from './hobby'

export interface IUser {
  id: string
  name: string
  hobbies: IHobby[]
}
