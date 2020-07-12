import {Action} from '@ngrx/store'
import {IRepository} from '../../interfaces/repository.interface'

export enum ERepositoriesActions {
  GetRepositories = '[Repository] Get Repositories',
  GetRepositoriesSuccess = '[Repository] Get Repositories Success',
  GetRepository = '[Repository] Get Repository',
  GetRepositorySuccess = '[Repository] Get Repository Success'
}

export class GetRepositories implements Action {
  public readonly type = ERepositoriesActions.GetRepositories
  constructor(public payload: {name, sort}) {}
}

export class GetRepositoriesSuccess implements Action {
  public readonly type = ERepositoriesActions.GetRepositoriesSuccess
  constructor(public payload: IRepository[]) {}
}

export class GetRepository implements Action {
  public readonly type = ERepositoriesActions.GetRepository
  constructor(public payload: number) {}
}

export class GetRepositorySuccess implements Action {
  public readonly type = ERepositoriesActions.GetRepositorySuccess
  constructor(public payload: IRepository) {}
}

export type RepositoriesActions = GetRepositories | GetRepositoriesSuccess | GetRepository | GetRepositorySuccess
