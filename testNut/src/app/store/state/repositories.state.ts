import {IRepository} from '../../interfaces/repository.interface'

export interface IRepositoriesState {
  repositories: IRepository[]
}

export const initialRepositoriesState: IRepositoriesState = {
  repositories: null
}
