import {Component, OnDestroy, OnInit} from '@angular/core'
import {IRepository} from '../interfaces/repository.interface'
import {Subscription} from 'rxjs'
import {select, Store} from '@ngrx/store'
import {IAppState} from '../store/state/app.state'
import {selectRepositories} from '../store/selectors/repositories.selectors'
import {GetRepositories} from '../store/actions/repositories.actions'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit, OnDestroy {
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
