import { IUser } from '../interfaces/user'
import { IHobby } from '../interfaces/hobby';
import { generateId } from '../utils/generate-id';
import { users } from './users.data';

export interface IUsersService {
  getUsers(): Promise<IUser[]>
  createUser(name: string, hobbies?: IHobby[]): IUser
}

export const usersService: IUsersService = {
  getUsers(): Promise<IUser[]> {
    return new Promise((resolve) => setTimeout(() => resolve(users), 500))
  },

  createUser(name: string, hobbies: IHobby[] = []): IUser {
    return {
      id: generateId(),
      name,
      hobbies,
    }
  }
}
