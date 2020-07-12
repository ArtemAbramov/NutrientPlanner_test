import {initialRepositoriesState, IRepositoriesState} from '../state/repositories.state'
import {ERepositoriesActions, RepositoriesActions} from '../actions/repositories.actions'

export const repositoriesReducers = (
  state: IRepositoriesState = initialRepositoriesState,
  action: RepositoriesActions
): IRepositoriesState => {
  switch (action.type) {
    case ERepositoriesActions.GetRepositoriesSuccess: {
      return {
        ...state,
        repositories: action.payload
      }
    }
    case ERepositoriesActions.GetRepositorySuccess: {
      return {
        ...state,
        selectedRepository: action.payload
      }
    }

    default:
      return state
  }
}
