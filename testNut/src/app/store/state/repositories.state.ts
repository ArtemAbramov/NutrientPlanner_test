import {IRepository} from '../../interfaces/repository.interface'

export interface IRepositoriesState {
  repositories: IRepository[]
  selectedRepository: IRepository
}

export const initialRepositoriesState: IRepositoriesState = {
  repositories: null,
  selectedRepository: null
}
