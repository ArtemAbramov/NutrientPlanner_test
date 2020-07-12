import {IAppState} from '../state/app.state'
import {createSelector} from '@ngrx/store'
import {IRepositoriesState} from '../state/repositories.state'

const repositoriesState = (state: IAppState) => state.repositories

export const selectRepositories = createSelector(
  repositoriesState,
  (state: IRepositoriesState) => state.repositories
)

export const selectRepository = createSelector(
  repositoriesState,
  (state: IRepositoriesState) => state.selectedRepository
)
