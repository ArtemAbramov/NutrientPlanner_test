import {ActionReducerMap} from '@ngrx/store'
import {IAppState} from '../state/app.state'
import {repositoriesReducers} from './repositories.reducers'
import {routerReducer} from '@ngrx/router-store'

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  repositories: repositoriesReducers
}
