import {initialRepositoriesState, IRepositoriesState} from './repositories.state'

export interface IAppState {
  repositories: IRepositoriesState
}

export const initialAppState: IAppState = {
  repositories: initialRepositoriesState
}

export const getInitialState = (): IAppState => initialAppState
