import {Component, OnDestroy, OnInit} from '@angular/core'
import {RepositoriesService} from './repositories.service'
import {Observable, Subscription} from 'rxjs'
import {FormControl} from '@angular/forms'
import {debounceTime, exhaustMap, map, switchMap} from 'rxjs/operators'
import {IRepository} from './interfaces/repository.interface'
import {select, Store} from '@ngrx/store'
import {IAppState} from './store/state/app.state'
import {GetRepositories} from './store/actions/repositories.actions'
import {selectRepositories} from './store/selectors/repositories.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  sortValues = ['Desc', 'Asc']
  repositories: IRepository[] = null

  sSub: Subscription

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.sSub = this.store.pipe(select(selectRepositories))
      .subscribe(repositories => {
        this.repositories = repositories
      })
  }

  ngOnDestroy(): void {
    if (this.sSub) {
      this.sSub.unsubscribe()
    }
  }

  search(name, sort): void {
    this.store.dispatch(new GetRepositories({name, sort}))
  }

  sort(name, sort): void {
    this.search(name, sort)
  }
}
