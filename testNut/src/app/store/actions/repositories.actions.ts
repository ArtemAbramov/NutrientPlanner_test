import {Action} from '@ngrx/store'
import {IRepository} from '../../interfaces/repository.interface'

export enum ERepositoriesActions {
  GetRepositories = '[Repositories] Get Repositories',
  GetRepositoriesSuccess = '[Repositories] Get Repositories Success'
}

export class GetRepositories implements Action {
  public readonly type = ERepositoriesActions.GetRepositories
  constructor(public payload) {}
}

export class GetRepositoriesSuccess implements Action {
  public readonly type = ERepositoriesActions.GetRepositoriesSuccess

  constructor(public payload: IRepository[]) {}
}

export type RepositoriesActions = GetRepositories | GetRepositoriesSuccess
