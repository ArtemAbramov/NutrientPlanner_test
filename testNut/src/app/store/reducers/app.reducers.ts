import {ActionReducerMap} from '@ngrx/store'
import {IAppState} from '../state/app.state'
import {repositoriesReducers} from './repositories.reducers'

export const appReducers: ActionReducerMap<IAppState, any> = {
  repositories: repositoriesReducers
}
