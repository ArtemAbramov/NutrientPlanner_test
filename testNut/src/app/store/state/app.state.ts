import {initialRepositoriesState, IRepositoriesState} from './repositories.state'
import {RouterReducerState} from '@ngrx/router-store'

export interface IAppState {
  router?: RouterReducerState
  repositories: IRepositoriesState
}

export const initialAppState: IAppState = {
  repositories: initialRepositoriesState
}

export const getInitialState = (): IAppState => initialAppState
