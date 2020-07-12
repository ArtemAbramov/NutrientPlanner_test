import {Injectable} from '@angular/core'
import {Actions, Effect, ofType} from '@ngrx/effects'
import {RepositoriesService} from '../../repositories.service'
import {
  ERepositoriesActions,
  GetRepositories,
  GetRepositoriesSuccess,
  GetRepository,
  GetRepositorySuccess
} from '../actions/repositories.actions'
import {debounceTime, map, switchMap, withLatestFrom} from 'rxjs/operators'
import {empty, of} from 'rxjs'
import {IGithubResponse} from '../../interfaces/response.interface'
import {select, Store} from '@ngrx/store'
import {IAppState} from '../state/app.state'
import {selectRepositories} from '../selectors/repositories.selectors'

@Injectable()
export class RepositoriesEffects {
  @Effect()
  getRepository$ = this.actions$.pipe(
    ofType<GetRepository>(ERepositoriesActions.GetRepository),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectRepositories))),
    switchMap(([id, repositories]) => {
      const selectedRepository = repositories.filter(repo => repo.id === +id)[0]
      return of(new GetRepositorySuccess(selectedRepository))
    })
  )
  @Effect()
  getRepositories$ = this.actions$.pipe(
    ofType<GetRepositories>(ERepositoriesActions.GetRepositories),
    debounceTime(400),
    map(action => action.payload),
    switchMap(payload => {
      if (payload.name === '') {
        return empty()
      }

      return this.repositoriesService.getRepositories(payload.name).pipe(
        map((githubResponse: IGithubResponse) => {
          let repositories = null
          switch (payload.sort) {
            case 'Desc': {
              repositories = githubResponse.items.sort((a, b): number => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return 1
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return -1
                }
                return 0
              })
              break
            }
            case 'Asc': {
              repositories = githubResponse.items.sort((a, b): number => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1
                }
                return 0
              })
              break
            }
            default:
              repositories = githubResponse.items
              break
          }
          return new GetRepositoriesSuccess(repositories)})
      )
    })
  )

  constructor(
    private repositoriesService: RepositoriesService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}
}
